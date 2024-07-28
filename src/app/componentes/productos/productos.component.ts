import { Component, Host, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/servicios/peticion.service';

declare var $:any
declare var Swal:any

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{

  ngOnInit(): void {
    this.CargarTodas()
    this.CargarTodasCategorias()
    
  }

  constructor(private peticion:PeticionService) {}

  cod_cat: string = ""
  cod_prod: string = ""
  nombre: string = ""
  imagen: string = ""
  precio: number = 0
  descripcion: string = ""
  estado: number = 1
  datos:any[] = []
  datoscategorias:any[] = []
  Idseleccionado:string = ""

  CargarTodasCategorias(){

    let post = {
      Host: this.peticion.urlHost,
      path: "/categorias/list",
      payload:{}
    }
  
    this.peticion.Post(post.Host+post.path, post.payload).then(
      (res:any) => {
        console.log(res)
        this.datoscategorias = res.data
      }
    )
  
  
  
  }


CargarTodas(){

  let post = {
    Host: this.peticion.urlHost,
    path: "/productos/list",
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
  this.cod_cat = this.datoscategorias[0].cod_cat
  this.cod_prod = ""
  this.nombre = ""
  this.imagen = ""
  this.precio = 0
  this.descripcion = ""
  this.estado = 1
  this.Idseleccionado = ""
  $('#Modalnuevo').modal('show')
}

Guardar(){

  let post = {
    Host: this.peticion.urlHost,
    path: "/productos/save",
    payload:{
      imagen: this.imagen,
      precio: this.precio,
      cod_cat:this.cod_cat,
      cod_prod:this.cod_prod,
      nombre:this.nombre,
      estado:this.estado,
      descripcion: this.descripcion
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

EditarId(id:string) {
  this.Idseleccionado = id

  let post = {
    Host: this.peticion.urlHost,
    path: "/productos/listId",
    payload:{
      _id:id
    }
  }

  this.peticion.Post(post.Host+post.path, post.payload).then(
    (res:any) => {
      console.log(res)
      if(res.data != undefined){
        this.cod_cat = res.data [0]. cod_cat
        this.cod_prod = res.data [0]. cod_prod
        this.nombre = res.data [0]. nombre
        this.estado = res.data [0]. estado
        this.imagen = res.data [0]. imagen
        this.precio = res.data [0]. precio
        this.descripcion = res.data [0]. descripcion
        $('#Modalnuevo').modal('show')
      }
     
    }
  )
}

Eliminar() {
  let post = {
    Host: this.peticion.urlHost,
    path: "/productos/delete",
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

Actualizar(){

  let post = {
    Host: this.peticion.urlHost,
    path: "/productos/update",
    payload:{
      imagen: this.imagen,
      precio: this.precio,
      _id: this.Idseleccionado,
      cod_cat:this.cod_cat,
      nombre:this.nombre,
      estado:this.estado,
      descripcion:this.descripcion
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
