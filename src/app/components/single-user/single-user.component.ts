import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  @Input() singleUser: UserModel;
  @Input() user: UserModel;

  constructor() {
  }

  ngOnInit(): void {
  }

}
