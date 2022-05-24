import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Trabajo } from 'src/app/models/Trabajo';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-trabajo-list',
  templateUrl: './trabajo-list.component.html',
  styleUrls: ['./trabajo-list.component.css']
})
export class TrabajoListComponent implements OnInit {


  @Input()
  trabajo!: Trabajo;
  @Input()
  loading!: boolean;


  @Output() onEliminarTrabajo: EventEmitter<Trabajo> = new EventEmitter();
  @Output() onEditarTrabajo: EventEmitter<Trabajo> = new EventEmitter();

  name_job: string ="";
  cargo: string ="";
  date_start: string ="";
  date_end: string ="";
  urlImage:string ="";
  description: string ="";

  constructor(private AuthService: AutenticacionService) { }

  ngOnInit(): void {

  }

    //Eliminar un trabajo 
    onEliminar(trabajo: Trabajo){
      this.onEliminarTrabajo.emit(trabajo)
    }

    onGuardar (trabajo: Trabajo){

    const editTrabajo = {
      name_job: trabajo.name_job,
      cargo: trabajo.cargo,
      date_start: trabajo.date_start,
      date_end: trabajo.date_end,
      urlImage: trabajo.urlImage,
      description: trabajo.description
    }

    this.onEditarTrabajo.emit(editTrabajo); 
  }
    



}
