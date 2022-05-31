import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Proyecto } from 'src/app/models/Proyecto';

@Component({
  selector: 'app-proyecto-list',
  templateUrl: './proyecto-list.component.html',
  styleUrls: ['./proyecto-list.component.css']
})
export class ProyectoListComponent implements OnInit {
  @Input()
  proyecto!: Proyecto
  @Output() onEliminarProyecto: EventEmitter<Proyecto> = new EventEmitter();
  @Output() onEditarProyecto: EventEmitter<Proyecto> = new EventEmitter();
  @Input()
  loading!: boolean;

  name: string ="";
  motivo: string ="";
  date_start: string ="";
  date_end: string ="";
  urlImage:string ="";
  description: string ="";
  portfolio: string ="";
  urlImagePort: string ="";
  presentacion: string ="";
  urlImageVideo:string ="";
  redes: string ="";
  urlImageRedes: string ="";

  constructor() { }

  ngOnInit(): void {
  }
  
    //Eliminar un Proyecto 
    onEliminar(proyecto: Proyecto){
      this.onEliminarProyecto.emit(proyecto)
    }


    onGuardar (proyecto: Proyecto){
    
    const newProyecto = {
      name: proyecto.name,
      motivo: proyecto.motivo,
      date_start: proyecto.date_start,
      date_end: proyecto.date_end,
      urlImage: proyecto.urlImage,
      description: proyecto.description,
      portfolio: "./assets/icons8-github-48.png",
      urlImagePort: proyecto.urlImagePort,
      presentacion: "./assets/icons8-video-48.png",
      urlImageVideo: proyecto.urlImageVideo,
      redes: "./assets/icons8-instagram-48.png",
      urlImageRedes: proyecto.urlImageRedes
    }

    this.onEditarProyecto.emit(newProyecto);

  }
    



}
