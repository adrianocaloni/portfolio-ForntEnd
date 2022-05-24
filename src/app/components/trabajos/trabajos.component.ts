import { Component, Input, OnInit} from '@angular/core';
import { Trabajo } from 'src/app/models/Trabajo';
import { TrabajosService } from 'src/app/services/trabajos.service';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {

  trabajos: Trabajo[] = []; 
  @Input()
  loading!: boolean;

  constructor(private trabajoService: TrabajosService) { }

  ngOnInit(): void {
     this.trabajoService
     .getTrabajos()
     .subscribe((trabajos: Trabajo[]) => (this.trabajos = trabajos));

  
   }
  
   eliminarTrabajo(trabajo: Trabajo){
    this.trabajoService
    .deleteTrabajo(trabajo)
    .subscribe(
      () => (this.trabajos = this.trabajos.filter(t => t.id !== trabajo.id))
    );
  }

  agregarTrabajo(trabajo: Trabajo){
    console.log(this.loading)
    this.trabajoService
    .addTrabajo(trabajo)
    .subscribe((trabajo) => this.trabajos.push(trabajo));  }




  editarTrabajo(trabajo: Trabajo, id:any){
    this.trabajoService
    .updateTrabajo(trabajo,trabajo.id)
    .subscribe();
  }
}
