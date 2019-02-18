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

  //users: Array<any> = [];
  idSelect: any;

  "users": [
    {
      "uid": 4870,
      "name": "Pedro Eduardo",
      "photo": "https://www.shareicon.net/data/128x128/2016/09/01/822761_user_512x512.png"

    },
    {
      "uid": 1234,
      "name": "Clodovil da Silva",
      "photo": "https://i1.wp.com/www.progressivemedicalcenter.com/wp-content/uploads/2019/01/Female-Doctor-Avatar.png"
    },
    {
      "uid": 3455,
      "name": "Eduardo Cezar",
      "photo": "https://pngimage.net/wp-content/uploads/2018/06/gambar-user-png-2.png"
    }
  ];
  "chat": [
    {
      "id": 1234,
      "mensage": "Fala Silva beleza!!!"
    },
    {
      "id": 1234,
      "mensage": "Bora pro Villa Mix?"
    },
    {
      "id": 4870,
      "mensage": "Ei já fez o módulo? Tô esperando"
    },
    {
      "id": 3455,
      "mensage": "Depois do expediente bora no mandela?"
    }
  ]

  constructor(private api: ConsumeService, private render: Renderer) {

  }

  getIdUser(uid: any) {
    this.idSelect = uid;
    this.visible = !this.visible;
  }

  ngOnInit() {
  }

}
