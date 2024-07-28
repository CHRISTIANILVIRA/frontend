import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeticionService } from 'src/app/servicios/peticion.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  ngOnInit(): void {
    this.CargarTodas()
    this.nomCat()
    
  }
 
  productos:any=[]
  producto:any={}
  categorias:any=[]
  

  filtro:string= ""
  constructor(private route:ActivatedRoute,private peticion:PeticionService){
    this.route.params.subscribe(params => this.filtro= params["id"])
  }

  public nomCat = () => { 
    if (this.filtro == "todos"){return "Nuestros productos"}
    let cat = this.categorias.filter((categoria:any) => categoria.cod_cat == this.filtro)
    console.log(cat)
    return cat[0].nombre|| ""
  }

  CargarTodas(){
    let postproduc = {
      Host:this.peticion.urlHost,
      path:"/productos/list"
      
    }
    let postcat = {
      Host:this.peticion.urlHost,
      path:"/categorias/list"
      
    }

    this.peticion.Post(postproduc.Host+postproduc.path,{}).then(
      (res:any) => {
        this.productos=res.data
        console.log(res)
      }
    ).catch(error => console.log(error))

    this.peticion.Post(postcat.Host+postcat.path,{}).then(
      (res:any) => {
        this.categorias=res.data
        console.log(res)
      }
    ).catch(error => console.log(error))

  }

}
  




