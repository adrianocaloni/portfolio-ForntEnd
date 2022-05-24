import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Estudio } from 'src/app/models/Estudio';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-estudio-list',
  templateUrl: './estudio-list.component.html',
  styleUrls: ['./estudio-list.component.css']
})
export class EstudioListComponent implements OnInit {

  @Input()
  estudio!: Estudio;
  @Output() onEliminarEstudio: EventEmitter<Estudio> = new EventEmitter();
  @Output() onUpdateEstudio: EventEmitter<Estudio> = new EventEmitter();
  @Input()
  loading!: boolean;


  name_esc: string ="";
  title: string ="";
  dateStart: string ="";
  dateEnd: string ="";
  description: string ="";
  tecnologias: string ="";
  urlImage: string ="";
  

  constructor(private authService:AutenticacionService) { }



  ngOnInit(): void {

  }

    //Eliminar un Estudio
    onEliminar(estudio: Estudio){
      this.onEliminarEstudio.emit(estudio)
    }
    onGuardar (estudio: Estudio){
    const editEstudio = {
      name_esc: estudio.name_esc,
      title: estudio.title,
      dateStart: estudio.dateStart,
      dateEnd: estudio.dateEnd,
      description: estudio.description,
      tecnologias: estudio.tecnologias,
      urlImage: estudio.urlImage
    }
  
    this.onUpdateEstudio.emit(editEstudio);
  }


}
    

