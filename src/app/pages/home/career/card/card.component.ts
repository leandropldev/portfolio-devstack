import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  card: any= {
    position: "FullStack Developer",
    company: "Wafx Portugal",
    companyCountry: "pt",
    dateBegin: "Setembro 2022",
    dateEnd: "Present",
    activities: [
      "Incorporated third-party APIs into the web application for data exchange and real-time updates",
      "Utilized Java frameworks such as Spring, Hibernate and Angular",
      "Implemented a CI/CD pipeline for testing and deployment",
      "AWS resources creation and maintenance (EC2, ELB, Gateway)"
    ],
    stacks: [
      "Spring Boot",
      "Angular",
      "Argos CD",
      "Docker",
      "PostgreSQL",
      "Git Corp",
      "Scrum",
      "Mockito",
      "Junit",
      "Jest",
      "AWS"
    ]
  }
}
