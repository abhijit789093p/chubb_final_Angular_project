import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Userdata } from '../userdata';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewdet',
  templateUrl: './viewdet.component.html',
  styleUrls: ['./viewdet.component.css']
})
export class ViewdetComponent implements OnInit {
  registrationForm!: FormGroup;
  viewModel = new Userdata(0,'','',0,'',0,'');



  constructor( private service:SharedService, private route: Router) {
    this.registrationForm = new FormGroup({
      First_name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      Middle_name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      Last_name: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      E_mail: new FormControl('', [Validators.required,Validators.email]),
      mob_no: new FormControl('', [Validators.required,Validators.minLength(4),Validators.maxLength(10),Validators.pattern(/^[0-9]\d*$/)]),
      Password: new FormControl('',[Validators.required,Validators.maxLength(15)]),
      
   })
  }

  ngOnInit(): void {
  }
  

  postData() {
    console.log("success");
  }

}
