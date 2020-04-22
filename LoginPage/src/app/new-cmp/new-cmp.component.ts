import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {
  username:string;
  password:string;

  constructor() { }

  ngOnInit(): void {
  }

  LoginUser()
  {
    if(this.username == "XYZ" && this.password =="xyz123")
    {
      console.log("Welcome");
    }
  }
}
