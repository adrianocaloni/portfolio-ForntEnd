import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';   
import { Trabajo } from 'src/app/models/Trabajo';

@Component({
  selector: 'app-trabajo-header',
  templateUrl: './trabajo-header.component.html',
  styleUrls: ['./trabajo-header.component.css']
})
export class TrabajoHeaderComponent implements OnInit {
  @Input()
  loading!: boolean;

  @Input()
  trabajo!: Trabajo;
  @Output() onGuardarTrabajo: EventEmitter<Trabajo> = new EventEmitter();

  
  name_job: string ="";
  cargo: string ="";
  date_start: string ="";
  date_end: string ="";
  urlImage:string ="";
  description: string ="";


  constructor( ) { }

  ngOnInit(): void {
  }


  onSubmit() {
    if (!this.name_job) {
      alert('Por favor, ingrese el nombre de una Empresa');
      return;
    }
    
    const newTrabajo = {
      name_job: this.name_job,
      cargo: this.cargo,
      date_start: this.date_start,
      date_end: this.date_end,
      urlImage: this.urlImage,
      description: this.description
    }

    this.onGuardarTrabajo.emit(newTrabajo);

    this.name_job = '';
    this.cargo = '';
    this.date_start = '';
    this.date_end = '';
    this.urlImage = '';
    this.description =''; 
  }
}
