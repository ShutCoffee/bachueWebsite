import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Project } from "../models/project.model";
import { ProjectsService } from "../services/projects.service";

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  public name: string = "";
  public project: Project = new Project("","","","", "")

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectsService) { }

  ngOnInit(): void {
    this.getName();
    this.findProject();
  }

  private getName(): void {
    let para = this.route.snapshot.paramMap.get('name');
    if(para != null) {
      this.name = para;
    }
  }

  private findProject(): void {
    this.parseName();
    let proj = this.projectService.findProject(this.name);
    if(proj) {
      this.project = proj;
    }
  }

  private parseName(): void {
    this.name = this.name.split('-').join(' ');
    let words = this.name.split(' ');
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    this.name = words.join(" ");
  }



}
