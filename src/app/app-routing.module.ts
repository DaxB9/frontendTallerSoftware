import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostsComponent } from './components/add-posts/add-posts.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PanelComponent } from './components/panel/panel.component';
const routes: Routes = [
  { path: 'add-posts',    component: AddPostsComponent},

  { path: 'inicio',       component:  InicioComponent },
  { path: 'panel',        component: PanelComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
