import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { ActivarComponent } from './componentes/activar/activar.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component'
import { InterceptorService } from './servicios/interceptor.service';
import { ActualizardatosuserComponent } from './componentes/actualizardatosuser/actualizardatosuser.component';
import { AlfajoresComponent } from './componentes/alfajores/alfajores.component';
import { BrowniesComponent } from './componentes/brownies/brownies.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FresasComponent } from './componentes/fresas/fresas.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { TortasComponent } from './componentes/tortas/tortas.component';
import { ZonaprivadaComponent } from './componentes/zonaprivada/zonaprivada.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    RegistroComponent,
    DashboardComponent,
    ProductosComponent,
    MenuComponent,
    CategoriasComponent,
    ActivarComponent,
    UsuariosComponent,
    ActualizardatosuserComponent,
    AlfajoresComponent,
    BrowniesComponent,
    CarritoComponent,
    CarruselComponent,
    ContactoComponent,
    FresasComponent,
    NosotrosComponent,
    TortasComponent,
    ZonaprivadaComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
