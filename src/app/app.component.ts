import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bachueWebsite';

  onSubmit() {
    window.open("https://www.google.com/")
  }
}
