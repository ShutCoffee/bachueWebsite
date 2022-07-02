import { Component, OnInit } from '@angular/core';
import {NewsService} from "../services/news.service";
import {News} from "../models/news.model";

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {

  latestNews: News = new News('','','','')

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.latestNews = this.newsService.getLatestNews()
  }

}
