import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Proyecto } from 'src/app/models/Proyecto';

@Component({
  selector: 'app-proyecto-header',
  templateUrl: './proyecto-header.component.html',
  styleUrls: ['./proyecto-header.component.css']
})
export class ProyectoHeaderComponent implements OnInit {
  
  @Input()
  proyecto!: Proyecto
  @Input()
  loading!: boolean;
  @Output() onGuardarProyecto: EventEmitter<Proyecto> = new EventEmitter();

  
  name: string ="";
  motivo: string ="";
  date_start: string ="";
  date_end: string ="";
  description: string ="";
  urlImage: string ="";
  portfolio: string ="";
  urlImagePort: string = "";
  presentacion: string ="";
  urlImageVideo: string ="";
  redes: string ="";
  urlImageRedes: string ="";


  constructor( ) { }

  ngOnInit(): void {
  }


  onSubmit() {
    if (!this.name) {
      alert('Por favor, ingrese el nombre del Proyecto');
      return;
    }
    const newProyecto = {
      name: this.name,
      motivo: this.motivo,
      date_start: this.date_start,
      date_end: this.date_end,
      urlImage: this.urlImage,
      description: this.description,

      portfolio: this.portfolio,
      urlImagePort: './assets/icons8-git-48.png',

      presentacion: this.presentacion,
      urlImageVideo: './assets/icons8-video-48.png',

      redes: this.redes,
      urlImageRedes: './assets/icons8-instagram-48.png',

    }

    this.onGuardarProyecto.emit(newProyecto);

    this.name = '';
    this.date_start = '';
    this.date_end = '';
    this.urlImage = '';
    this.description =''; 
    this.portfolio = '';
    this.urlImagePort = '';
    this.presentacion = '';
    this.urlImageVideo = '';
    this.redes = '';
    this.urlImageRedes = '';
  }
}
