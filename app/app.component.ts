import { Component } from '@angular/core';
import { Link } from './component/model/link.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  links: Link[];

  constructor() { 
    this.links = [
      new Link("YOUTUBE", "https://www.youtube.com",100)
    ];
  }

  guardarEnlace(title:HTMLInputElement,link:HTMLInputElement) { 
    this.links.push(new Link(title.value, link.value));
    title.value = "";
    link.value = "";
    return false;
  }
}
