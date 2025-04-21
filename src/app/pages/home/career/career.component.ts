import { Component } from '@angular/core';
import { CardComponent } from "./card/card.component";
import { JobExperince } from '../../../interfaces/jobExperience';

@Component({
  selector: 'app-career',
  imports: [CardComponent],
  templateUrl: './career.component.html',
  styleUrl: './career.component.css'
})
export class CareerComponent {

  cards: JobExperince[] = [
    {
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
    },
    {
      position: "FullStack bronha",
      company: "Wafx Portugal",
      companyCountry: "br",
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
  ]
}
