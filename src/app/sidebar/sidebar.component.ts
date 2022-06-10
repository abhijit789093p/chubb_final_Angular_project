import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private service:SharedService) { }

  DepartmentList:any=[];

  ngOnInit(): void {
    this.refreshDepList() 
  }

  refreshDepList(){
    this.service.getDataList().subscribe(data=>{
      this.DepartmentList = data;
    });
  }

}
