import { Component } from '@angular/core';
import { PeticionService } from 'src/app/servicios/peticion.service';

declare var $:any
declare var Swal:any

@Component({
  selector: 'app-actualizardatosuser',
  templateUrl: './actualizardatosuser.component.html',
  styleUrls: ['./actualizardatosuser.component.css']
})
export class ActualizardatosuserComponent {

  gOnInit(): void {
    this.CargarTodas()
    
  }

  constructor(private peticion:PeticionService) {}

  identificacion: number = 1
  nombre: String = ""
  sexo: String = ""
  email: String = ""
  password: String = ""
  telefono: Number = 1
  estado: Number = 0
  datos:any = []
  Idseleccionado:string = ""


CargarTodas(){

  let post = {
    Host: this.peticion.urlHost,
    path: "/usuarios/Misdatos",
    payload:{}
  }

  this.peticion.Post(post.Host+post.path, post.payload).then(
    (res:any) => {
      console.log(res)
      this.datos = res.data
    }
  )



}

AbrirModal(){
  this.nombre = ""
  this.estado = 1
  this.Idseleccionado = ""
  $('#Modalnuevo').modal('show')
}

Actualizar(){

  let post = {
    Host: this.peticion.urlHost,
    path: "/usuarios/update",
    payload:{
      identificacion:this.identificacion,
      nombre:this.nombre,
      sexo:this.sexo,
      email:this.email,
      password:this.password,
      telefono:this.telefono,
      estado:1,
      rol:this.datos[0].rol,
      _id:this.datos[0]._id
      
    }
  }

  this.peticion.Put(post.Host+post.path, post.payload).then(
    (res:any) => {
      console.log(res)
      if(res.state == true) {
        Swal.fire({
          icon: "success",
          title: "Que Bien!",
          text: res.mensaje,
        });
        $('#Modalnuevo').modal('hide')
        this.CargarTodas()
      }
      else {

        Swal.fire({
          icon: "error",
          title: "Ouch!",
          text: res.mensaje,
        });
      }
      
    }
  )



}
  
EditarId(id:string) {
  this.Idseleccionado = id

  let post = {
    Host: this.peticion.urlHost,
    path: "/categorias/listId",
    payload:{
      _id:id
    }
  }

  this.peticion.Post(post.Host+post.path, post.payload).then(
    (res:any) => {
      console.log(res)
      this.nombre = res.data [0]. nombre
      this.estado = res.data [0]. estado
      $('#Modalnuevo').modal('show')
    }
  )
}

Eliminar() {
  let post = {
    Host: this.peticion.urlHost,
    path: "/categorias/delete",
    payload:{
      _id:this.Idseleccionado
    }
  }

  this.peticion.Post(post.Host+post.path, post.payload).then(
    (res:any) => {
      console.log(res)
      if(res.state == true) {
        Swal.fire({
          icon: "success",
          title: "Que Bien!",
          text: res.mensaje,
        });
        $('#Modalnuevo').modal('hide')
        this.CargarTodas()
      }
      else {

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