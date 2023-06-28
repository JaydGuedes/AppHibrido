import { ProfileComponent } from './users/profile/profile.component';
import { E404Component } from './pages/e404/e404.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path: 'home',
    title: 'Página inicial',
    component: HomeComponent
  },
  {
    path:'contacts',
    title:'Faça contato',
    component:ContactsComponent
  },
  {
    path:'about',
    title:'Sobre',
    component:AboutComponent
  },
  {
    path:'e404',
    title:'Erro 404',
    component:E404Component
  },
  {
    path:'profile',
    title:'Perfil do usuário',
    component:ProfileComponent
  },
  {
    path:'**',
    redirectTo:'e404',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
