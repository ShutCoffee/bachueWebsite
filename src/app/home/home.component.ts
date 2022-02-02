import { Component, OnInit } from '@angular/core';
import { Project } from "../models/project.model";
import { ProjectsService } from "../services/projects.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projects: Project[] = [];

  constructor(private projectService: ProjectsService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  private getProjects(): void {
    this.projects = this.projectService.getProjects();
  }


}
