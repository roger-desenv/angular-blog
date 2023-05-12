import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  
  photoCover: string = "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
  contentTitle: string = "MINHA NOTÍCIA"
  contentDescription: string = "Olá Roger Developer"

  constructor() { }

  ngOnInit(): void {
  }

}
