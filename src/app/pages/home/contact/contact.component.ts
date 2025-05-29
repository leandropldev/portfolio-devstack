import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { ContactMeLinks } from '../../../interfaces/contactMe';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    TranslateModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactForm: FormGroup;
  formMessage: string = '';
  imageUrl: string = '../assets/images/icons/';
  pdfLink: string = '../assets/images/icons/pdf.png';
  contactMeLinks: ContactMeLinks[] = [
    {
      name: 'LinkedIn',
      icon: `${this.imageUrl}linkedin.png`,
      url: 'https://www.linkedin.com/in/developer-reis/' 
    },
    {
      name: 'GitHub',
      icon: `${this.imageUrl}github.png`,
      url: 'https://github.com/leandropldev'
    },
    {
      name: 'Stack Overflow',
      icon: `${this.imageUrl}stackoverflow.png`,
      url: 'https://stackoverflow.com/users/7240745/leandropl'
    } 
  ]

  constructor(
    private fb: FormBuilder,
    private translateService: TranslateService,
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
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
            this.updateMessage(this.translateService.instant('contact.form.success'));
            this.contactForm.reset();
          },
          (error) => {
            console.info('FAILED...', error);
          }
        );
    }
  }

  updateMessage(message: string): void {
    this.formMessage = message;
    setTimeout(() => this.formMessage = '', 3000);
  }
}