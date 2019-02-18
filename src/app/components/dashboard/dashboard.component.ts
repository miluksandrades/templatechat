import { ConsumeService } from './../../service/consume.service';
import { Component, OnInit, Output, EventEmitter, Renderer } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  visible: Boolean = true;

  users: Array<any> = [];
  idSelect: any;

  constructor(private api: ConsumeService, private render: Renderer) {
    this.api.getUsers().subscribe(
      users => {
        this.users = users
      }
    )
  }

  getIdUser(uid:any){
    this.idSelect = uid;
    this.visible = !this.visible;
  }

  ngOnInit() {
  }

}
