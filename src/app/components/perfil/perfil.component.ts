import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Perfil } from 'src/app/models/Perfil';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  @Input()
  perfil: Perfil[] = []; 
  @Input()
  loading!: boolean;

  nombre: string ="";
  apellido: string ="";
  descripcion: string ="";
  titulo: string ="";
  urlImage: string ="";
  celular:string="";
  email:string="";
  localidad:string="";
  urlImagePortada: string="";

  constructor(private perfilDatos: PortfolioService) { }
  ngOnInit(): void {

    this.perfilDatos
    .getPerfil()
    .subscribe(p =>this.perfil = p);
  
  }

  updatePerfil(perfil: Perfil, id: any){
    
    const editPerfil = {
      nombre: perfil.nombre,
      apellido: perfil.apellido,
      urlImage: perfil.urlImage,
      descripcion:perfil.descripcion,
      titulo: perfil.titulo,
      celular:perfil.celular,
      email:perfil.email,
      localidad:perfil.localidad,
      urlImagePortada:perfil.urlImagePortada,

      
    }
    
    this.perfilDatos
    .editPerfil(editPerfil, perfil.id)
    .subscribe(
      () => (this.perfil = this.perfil.filter(p => p.id == perfil.id))
    );
  }
}
