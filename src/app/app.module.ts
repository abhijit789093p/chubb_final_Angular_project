import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SharedService} from './shared.service';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { ForgetpComponent } from './forgetp/forgetp.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewdetComponent } from './viewdet/viewdet.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    SidebarComponent,
    TopbarComponent,
    HomeComponent,
    LoginComponent,
    ForgetpComponent,
    ViewdetComponent
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
