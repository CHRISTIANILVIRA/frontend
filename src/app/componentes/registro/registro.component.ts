import { Component, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/servicios/peticion.service';
import Swal, { SweetAlertResult } from 'sweetalert2';
import * as $ from 'jquery';




@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private peticion: PeticionService) {}


  ngOnInit(): void {}

  identificacion: number = 1
  nombre: String = ""
  sexo: String = ""
  email: String = ""
  password: String = ""
  telefono: Number = 1
  estado: Number = 0


Registrar(){
  let post = {
    Host:this.peticion.urlHost,
    path:"/usuarios/save",
    payload:{
      identificacion: this.identificacion,
      nombre: this.nombre,
      sexo: this.sexo,
      email: this.email,
      password: this.password,
      telefono: this.telefono,
      estado: this.estado
    }
  }
  this.peticion.Post(post.Host+post.path, post.payload).then(
    (res:any) => {
      console.log(res)
      if(res.state == true) {
        Swal.fire({
          icon: "success",
          title: "Que bien!",
          text: res.mensaje,
        }).then((result: SweetAlertResult) => {
          if (result.isConfirmed) {
            location.replace("login")
            
          }
        } 
            );
        

    ($('#modalnuevo') as any).modal('hide');
      // this.CargarTodas()
    } else {
      Swal.fire({
        icon: "error",
        title: "Ouch!",
        text: res.mensaje,
      });
    }
    }
  )
}

}
