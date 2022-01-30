import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";
import {Project} from "../models/project.model";

@Component({
  selector: 'app-short-project',
  templateUrl: './short-project.component.html',
  styleUrls: ['./short-project.component.css']
})
export class ShortProjectComponent implements OnInit {

  @Input() project: Project = new Project('','','', '');

  constructor() { }

  ngOnInit(): void {
  }
}
