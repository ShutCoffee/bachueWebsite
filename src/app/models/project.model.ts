import {count} from "rxjs";

export class Project {
  title: string;
  description: string;
  image: string;
  country: string;

  constructor(title: string, description: string, image: string, country: string) {
    this.title = title;
    this.description = description;
    this.image = image;
    this.country = country;
  }
}
