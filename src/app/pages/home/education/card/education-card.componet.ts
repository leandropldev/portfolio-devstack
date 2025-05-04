import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Education } from "../../../../interfaces/education";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-education-card",
  imports: [
    CommonModule
  ],
  templateUrl: "./education-card.component.html",
  styleUrls: ["./education-card.component.css"],
})
export class EducationCardComponent {
  @Input() card!: Education;
  @Input() showContent: boolean = false;
  @Output() activeCard = new EventEmitter<number>();

  toggleVisibility(cardId : number) {
    this.activeCard.emit(cardId);
  }
}      