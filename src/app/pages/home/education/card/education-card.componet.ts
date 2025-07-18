import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Education } from "../../../../interfaces/education";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "app-education-card",
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: "./education-card.component.html",
  styleUrls: ["./education-card.component.css"],
})
export class EducationCardComponent {
  @Input() card!: Education;
  @Input() showContent: boolean = false;
  @Output() activeCard = new EventEmitter<number>();

  certificationFolder: string = 'assets/data/education/certificate/';

  toggleVisibility(cardId : number) {
    this.activeCard.emit(cardId);
  }
}      