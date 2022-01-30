import { Component, OnInit } from '@angular/core';
import { Project } from "../models/project.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projects: Project[] = [new Project("Casa Mantay",
    "Casa Mantay befindet sich in Cusco, Peru. Das Ziel des Projektes ist es, in einem geschützten Umfeld für das Heranwachsen der Kinder zu sorgen und den jungen Müttern eine Ausbildung zu ermöglichen. Das Haus dient vor allem als Zufluchtsort für minderjährige schwangere Mädchen und minderjährige Mütter mit ihren Kindern, die auf sich alleine gestellt sind. Während ihres Aufenthaltes lernen die Mädchen ihre Aufgaben als Mutter wahrzunehmen und zu geniessen.",
    "assets/casa_mantay.jpg", "Peru"),
    new Project("Fundación Sanctuary Colombia", "Der Sitz des Projektes Fundación Sanctuary Colombia befindet sich in Bogotá, Kolumbien und setzt sich für die Verbesserung der Lebensqualität von Kindern, jungen Erwachsenen und Familien in den ärmsten Regionen von Chocó, Kolumbien ein. Sie kämpfen gegen die Armut, die Ungleichheit und die Unsicherheit der verschiedenen Bevölkerungsgruppen, die den Chocó bewohnen.",
      "assets/fundation_sanctuary.jpg", "Kolumbien"),
    new Project("«Madres Migrantes», Fundación Casa Viña", "Die Stiftung Casa Viña befindet sich in Quito, Ecuador. Sie setzt sich für die Gemeinschaft und insbesondere für die Bedürftigsten ein. In Ecuador leben heute mehr als eine halbe Million Venezolaner*innen – viele davon sind alleinstehende Mütter. Die Stiftung Casa Viña hilft Müttern mit Migrationshintergrund (die meisten von ihnen sind Venezolanerinnen oder Kolumbianerinnen) in prekären Situationen.",
      "assets/madres-migrantes.jpg", "Ecuador"),
    new Project("Situation in der Schweiz", "Auch in der Schweiz leben viele alleinstehende Mütter unter prekären Lebensbedingungen. Durch prägende Lebensereignisse wie Scheidung, Tod oder andere Schicksalsschläge rutschen viele Mütter mit ihren Kindern in die Armut.",
      "assets/situation_schweiz.jpg", "Schweiz")];

  constructor() { }

  ngOnInit(): void {
  }


}
