import { Component, OnInit } from '@angular/core';
import { Userlog } from '../userlog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  userForm:FormGroup;

  userModel = new Userlog("","")

  constructor(private enrollment: SharedService, private route: Router, private auth: AuthService) {
    this.userForm = new FormGroup({
      'email': new FormControl('',[Validators.email,Validators.required,Validators.minLength(4)]),
      'password': new FormControl('',[Validators.required,Validators.minLength(5)])
      
   })
  }
  ngOnInit(): void {}

  onSubmit(){
    // if(this.userForm.valid){
    //   console.log(this.userModel);
    //   //this.SharedService.enroll(this.userForm.value).subscribe((data) =>{
    //     console.log("all data from validation user")
    //     console.log(this.SharedService.get());y
    //     if(data)
    //     window.location.href+="/home"
    //     else
    //     alert("incorret username or password")
    //   })
    // }
    // let a = true

    this.enrollment.enroll(this.userModel).subscribe((data) => {
      {console.log('Success!',data);this.route.navigate(['/home'])}
      this.auth.IsLoggedIn();
     
    },
      (error: Error) => {
        this.auth.IsLoggedIn();
        console.error('Error!', error);alert("invalid id password");
      })
  } 
  }



    // this.enrollment.enroll(this.userModel)
    // .subscribe(
    //   data => {console.log('Success!',data);this.route.navigate(['/home'])},
      
    //   error => {console.error('Error!', error);alert("invalid id password");} 
    // )
    //localStorage.setItem(a, this.data.value);
  // } 
// }
