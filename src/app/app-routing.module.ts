import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './shared/auth.guard';
import { AuthService } from './shared/auth.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddComponent } from './add/add.component';
import { ForgetpComponent } from './forgetp/forgetp.component';
// import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path: 'login',
    component:LoginComponent
  },
  
  {
    path:'register',
    component: RegisterComponent
  },
  
  {
    path:'home',
    component: HomeComponent
  },
  {
    path: 'sidebar',
    component: SidebarComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'forgetp',
    component: ForgetpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
