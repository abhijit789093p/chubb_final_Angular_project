import { Injectable } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  IsLoggedIn(){
    
    return true;
  }
}



