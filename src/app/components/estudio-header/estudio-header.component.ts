import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Estudio } from 'src/app/models/Estudio';

@Component({
  selector: 'app-estudio-header',
  templateUrl: './estudio-header.component.html',
  styleUrls: ['./estudio-header.component.css']
})
export class EstudioHeaderComponent implements OnInit {

  @Input()
  estudio!: Estudio;

  @Output() onGuardarEstudio: EventEmitter<Estudio> = new EventEmitter();

  @Input()
  loading!: boolean;
  name_esc: string ="";
  title: string ="";
  dateStart: string ="";
  dateEnd: string ="";
  description: string ="";
  tecnologias: string ="";
  urlImage: string ="";


  constructor( ) { }

  ngOnInit(): void {
  }


  onSubmit() {
    if (!this.name_esc) {
      alert('Por favor, ingrese el nombre de la Institución');
      return;
    }
    const newEstudio = {
      name_esc: this.name_esc,
      title: this.title,
      dateStart: this.dateStart,
      dateEnd: this.dateEnd,
      urlImage: this.urlImage,
      description: this.description,
      tecnologias: this.tecnologias
    }

    this.onGuardarEstudio.emit(newEstudio);

    this.name_esc = '';
    this.title = '';
    this.dateStart = '';
    this.dateEnd = '';
    this.urlImage = '';
    this.description =''; 
    this.tecnologias =''; 
  }

  
}
