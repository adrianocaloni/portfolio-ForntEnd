import { Component, Input, OnInit } from '@angular/core';
import { Estudio } from 'src/app/models/Estudio';
import { EstudiosService } from 'src/app/services/estudios.service';


@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  estudios: Estudio[] = []; 
  @Input()
  loading!: boolean;

  constructor(private estudioservice: EstudiosService) { }

  ngOnInit(): void {
   this.estudioservice
     .getEstudios()
     .subscribe(e => this.estudios = e
    )
     
   }
  
   eliminarEstudio(estudio: Estudio){
    this.estudioservice
    .deleteEstudio(estudio)
    .subscribe(
      () => (this.estudios = this.estudios.filter(e => e.id !== estudio.id))
    );
  }

  agregarEstudio(estudio: Estudio){
    this.estudioservice
    .addEstudio(estudio)
    .subscribe((estudio) => this.estudios.push(estudio));  }


  updateEstudio(estudio: Estudio, id:any){
    console.log(estudio,id)
    this.estudioservice
    .updateEstudio(estudio, estudio.id)
    .subscribe()
  }
}
