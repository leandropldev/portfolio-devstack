import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactForm: FormGroup;
  message: string = ''

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      emailjs
        .send(
          'porfolio_service', 
          'template_a0vtg9s', 
          { ...this.contactForm.value }, 
          { publicKey: 'RAytH9INxkmzFeXxl' }
        )
        .then(
          () => {
            this.message = 'Message sent successfully!';
            this.contactForm.reset();
          },
          (error) => {
            console.info('FAILED...', error);
          }
        );
    }
  }
}