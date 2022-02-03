

export class Project {
  title: string;
  description: string;
  image: string;
  country: string;
  text: string;

  constructor(title: string, description: string, image: string, country: string, text: string) {
    this.title = title;
    this.description = description;
    this.image = image;
    this.country = country;
    this.text = text
  }
}
