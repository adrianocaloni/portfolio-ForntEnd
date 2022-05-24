import { Component, Input, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/Proyecto';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyecto[] = []; 
  @Input()
  loading!: boolean;

  constructor(private proyectoService: ProyectosService) { }

  ngOnInit(): void {
     this.proyectoService
     .getProyectos()
     .subscribe((proyectos: Proyecto[]) => (this.proyectos = proyectos));
   }
  
   eliminarProyecto(proyecto: Proyecto){
    this.proyectoService
    .deleteProyecto(proyecto)
    .subscribe(
      () => (this.proyectos = this.proyectos.filter(t => t.id !== proyecto.id))
    );
  }

  agregarProyecto(proyecto: Proyecto){
    this.proyectoService
    .addProyecto(proyecto)
    .subscribe((proyecto) => this.proyectos.push(proyecto));  }

    
  editarProyecto(proyecto: Proyecto, id:any){
    this.proyectoService
    .updateProyecto(proyecto,proyecto.id)
    .subscribe()
  }
}
