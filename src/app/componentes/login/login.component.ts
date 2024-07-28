import { Component, Host } from '@angular/core';
import { Router } from '@angular/router';
import { PeticionService } from 'src/app/servicios/peticion.service';
import { ServiceauthService } from 'src/app/servicios/serviceauth.service';

declare var Swal: any

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private peticion: PeticionService, private router: Router){}

  email: string = ""
  password: string = ""

  login(){

    
    var post = {
      Host:this.peticion.urlHost,
      path:"/usuarios/login",
      payload: {
        email:this.email,
        password:this.password
      }
    }

    this.peticion.Post(post.Host + post.path, post.payload).then((res:any) => {
      console.log(res)
      if(res.state == true){
        Swal.fire({
          title: "Bienvenido!",
          text: res.mensaje,
          icon: "success"
        });

        this.router.navigate(["dashboard"])

      }
      else{
        Swal.fire({
          title: "Ouch!",
          text: res.mensaje,
          icon: "error"
        });

      }
    })


  }

}
