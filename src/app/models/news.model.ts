
export class News {
  title: string;
  image: string;
  text: string;
  date: string;

  constructor(title: string, image: string, text: string, date: string) {
    this.title = title;
    this.image = image;
    this.text = text;
    this.date = date;
  }
}
