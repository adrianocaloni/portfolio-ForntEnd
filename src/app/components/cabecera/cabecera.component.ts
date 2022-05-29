
import { Component,  EventEmitter,  Input,  OnInit, Output } from '@angular/core';
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


  constructor(private authService:AutenticacionService, private perfilDatos: PortfolioService) {}

  ngOnInit(): void {

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

}

