import { Component, OnInit } from '@angular/core';
import { Userlog } from '../userlog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';


@Component({
  selector: 'app-forgetp',
  templateUrl: './forgetp.component.html',
  styleUrls: ['./forgetp.component.css']
})
export class ForgetpComponent implements OnInit {
  userForm !:FormGroup;

  userModel = new Userlog("","")

  constructor(private update: SharedService, private route: Router) {
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
    //     console.log(this.SharedService.get());
    //     if(data)
    //     window.location.href+="/home"
    //     else
    //     alert("incorret username or password")
    //   })
    // }
    // let a = true

    this.update.updatedep(this.userModel).subscribe((data) => {
      console.log('Success!')
    },
      (error: Error) => {
      
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

