import { Component, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/servicios/peticion.service';

declare var $:any

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit{

  ngOnInit(): void {
    this.CargarTodas()
  }

  constructor(private peticion:PeticionService) {}

  datos:any[] = []

  AbrirModal(){
    $('#Modalnuevo').modal('show')
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

  pedir() {
    const url = 'https://wa.me/+573167184658?text= Hola, estoy interesad@ en este producto'; 
    window.open(url, '_blank'); 
  }

}
