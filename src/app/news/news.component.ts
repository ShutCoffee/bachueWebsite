import { Component, OnInit } from '@angular/core';
import {NewsService} from "../services/news.service";
import {News} from "../models/news.model";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: News[] = []

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.getNews()
  }

  private getNews(): void {
    this.news = this.newsService.getNews()
  }
}
