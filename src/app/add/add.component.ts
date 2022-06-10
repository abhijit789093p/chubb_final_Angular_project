import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { Userdata } from '../userdata';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  idForm !: FormGroup;

  idModel = new Userdata(0,"","",0,"",0,"")

  constructor(private enrollmentt: SharedService) { }

  ngOnInit(): void {
  }

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

    this.enrollmentt.addDatalist(this.idModel).subscribe((data) => {
      console.log('Success!',data);
    },
      (error: Error) => {
        
        console.error('Error!', error);alert("invalid id password");
      })
  } 
  }


