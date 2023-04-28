import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostsComponent } from './components/add-posts/add-posts.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PanelComponent } from './components/panel/panel.component';
import { AddEventsComponent } from './components/add-events/add-events.component';
import { ViewPostsComponent } from './components/panel/view-posts/view-posts.component';
import { PermisosRutasService } from './core/permisosRutas/permisos-rutas.service';
import { ContenidoComponent } from './layout/privado/contenido/contenido.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { SelectInterestComponent } from './components/edit-profile/select-interest/select-interest.component';
import { RecommendedPostComponent } from './components/recommended-post/recommended-post.component';

import { SesionComponent } from './layout/publico/sesion/sesion.component';


const routes: Routes = [
  { path: 'add-posts',    component: AddPostsComponent, canActivate: [PermisosRutasService]}, //canActivate: [PermisosRutasService]
  { path: 'add-events', component: AddEventsComponent, canActivate: [PermisosRutasService]}, //canActivate: [PermisosRutasService]
  { path: 'inicio',       component:  InicioComponent }, //canActivate: [PermisosRutasService]
  { path:"recomm-posts", component: RecommendedPostComponent },
  { path: 'panel',        component: PanelComponent, canActivate: [PermisosRutasService]}, //, canActivate: [PermisosRutasService]: ESTE CÓDIGO COMENTADO SIRVE PARA USAR RUTA SOLO SI ESTÁ LOGEADO

  //EJEMPLO DE USO:
  // { path: 'panel', component: PanelComponent, canActivate: [PermisosRutasService]},

  { path: 'view-posts', component: ViewPostsComponent, canActivate: [PermisosRutasService]}, //canActivate: [PermisosRutasService]
  {
    path:'edit-profile',component:EditProfileComponent, canActivate: [PermisosRutasService]
  }, //canActivate: [PermisosRutasService]
  {
    path:'select-interest/:name',component:SelectInterestComponent, canActivate: [PermisosRutasService]
  }, //canActivate: [PermisosRutasService]
  {
    path:'sinsesion',component:SesionComponent,loadChildren:()=>import('./modules/login/login.module').then(m=>m.loginModule)
  }, //canActivate: [PermisosRutasService]
  {
    path:'sesion',component:ContenidoComponent,canActivate:[PermisosRutasService],loadChildren:()=>import('./modules/principal/principal.module').then(m=>m.principalModule)
  }, //canActivate: [PermisosRutasService]
  {
    path:"**",redirectTo:'sinsesion/login'
  },


];
 // { path: '', redirectTo: '/inicio', pathMatch: 'full' },


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
