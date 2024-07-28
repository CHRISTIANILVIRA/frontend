import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeticionService } from 'src/app/servicios/peticion.service';

declare var Swal: any

@Component({
  selector: 'app-activar',
  templateUrl: './activar.component.html',
  styleUrls: ['./activar.component.css']
})
export class ActivarComponent implements OnInit{

  email:string = ""
  codigo:string = ""

  constructor(private actroute: ActivatedRoute, private peticion: PeticionService, private router: Router) {}

  ngOnInit(): void {
    this.email = this.actroute.snapshot.params["correo"]
    this.codigo = this.actroute.snapshot.params["codigo"]
  }

  Activar() {

    let post = {
      Host: this.peticion.urlHost,
      path: "/usuarios/activar",
      payload:{
        email: this.email,
        codigoact: this.codigo

      }
    }
  
    this.peticion.Post(post.Host+post.path, post.payload).then((res:any) => {
      console.log(res)
      if(res.state == true){
        Swal.fire({
          title: "Su cuenta se activo correctamente",
          text: res.mensaje,
          icon: "success"
        });
        this.router.navigate(["login"])
      }
      else{
        Swal.fire({
          title: "Sus credenciales de acceso son invalidas",
          text: res.mensaje,
          icon: "error"
        });

      }
        


      })

  }

}
