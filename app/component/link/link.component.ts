import { Component, OnInit, Input,HostBinding } from '@angular/core';
import { Link } from '../model/link.model';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
// DECORADOR
  // El decorador HostBinding nos permite poner clases a nuetsro HTML entre otras cosas de la siguiente forma
  @HostBinding('attr.class') cssClass = 'row';
  // Almacena el arreglo imitido por otro componente para leerlo y presentarlo en el DOM
  @Input() link: Link;
  constructor() { }

  ngOnInit(){
  }

}
