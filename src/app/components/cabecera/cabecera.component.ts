
import { Component,  EventEmitter,  Input,  OnInit, Output } from '@angular/core';
import { Perfil } from 'src/app/models/Perfil';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})


export class CabeceraComponent implements OnInit {
  salir = false;
  user:any = {};
  public loading:boolean = false;
  public errorInicio:boolean = false;
  @Input()
  perfil: Perfil[] = []; 

  nombre: string ="";
  apellido: string ="";
  descripcion: string ="";
  titulo: string ="";
  urlImage: string ="";
  celular:string="";
  email:string="";
  localidad:string="";
  urlImagePortada: string="";


  constructor(private authService:AutenticacionService, private perfilDatos: PortfolioService) {}

  ngOnInit(): void {
    this.perfilDatos
    .getPerfil()
    .subscribe(p =>this.perfil = p);

  }


  login(){

    let formulario:any= document.getElementById("login");
    let formularioValido:boolean= formulario.reportValidity();
    if(formularioValido)
    {
     this.authService
      .loginUser(this.user)
      .subscribe( data => this.inciarSesion(data)
     )

    }
  }

    inciarSesion(resultado:any){
      if(resultado){
        this.loading = this.authService.setLogin(true)
        localStorage.setItem("usuario", JSON.stringify(resultado));
        this.errorInicio=false; 

      } else {
        this.errorInicio=true; 
       
      }
    }

    logout(){
      localStorage.removeItem("usuario");
      this.loading = this.authService.setLogin(false)
      

    }

    updatePortadaPerfil(perfil: Perfil, id: any){
    
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

