import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

declare var Swal:any

@Injectable({
  providedIn: 'root'
})
export class PeticionService {

  constructor(private http: HttpClient) { }

urlHost:string = "http://localhost:3000"


  Post(url: string, data:{}){

    let promise = new Promise((resolve, rejct) => {

      this.http.post(url,data).toPromise().then(
        (res:any) => {
          if(res.permisos == true){
            Swal.fire({
              title: "Ouchs!",
              text: res.mensaje,
              icon: "error"
            });
          }
          resolve(res)
        }
      ).catch((error) => {
        rejct(error)
      })

    })
    return promise
  }

  Put(url: string, data:{}){

    let promise = new Promise((resolve, rejct) => {

      this.http.put(url,data).toPromise().then(
        (res:any) => {
          resolve(res)
        }
      ).catch((error) => {
        rejct(error)
      })

    })
    return promise
  }

  Delete(url: string, data:{}){

    let promise = new Promise((resolve, rejct) => {

      this.http.delete(url,data).toPromise().then(
        (res:any) => {
          resolve(res)
        }
      ).catch((error) => {
        rejct(error)
      })

    })
    return promise
  }

  Get(url: string, data:{}){

    let promise = new Promise((resolve, rejct) => {

      this.http.get(url,data).toPromise().then(
        (res:any) => {
          resolve(res)
        }
      ).catch((error) => {
        rejct(error)
      })

    })
    return promise
  }

}
