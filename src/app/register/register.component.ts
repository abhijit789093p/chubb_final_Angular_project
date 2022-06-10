import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userMode1 = new User(' ', ' ', ' ', ' ',0, ' ');


  constructor(private enrollment: SharedService, private route: Router) {

  }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.userMode1.E_mail);
    this.enrollment.addDeptlist(this.userMode1)
    .subscribe(
      data => {console.log('Success!',data);this.route.navigate(['/login'])},
      
      error => {console.error('Error!', error);alert("invalid id password");} 
     )
  }
}


