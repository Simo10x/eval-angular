import { Component } from '@angular/core';
import { ActiveUser } from './active-user/active-user';
import { UserData } from './user-data/user-data';

@Component({
  selector: 'app-component-communication',
  imports: [ActiveUser, UserData],
  templateUrl: './component-communication.html',
  styleUrl: './component-communication.css',
})
export class ComponentCommunication {
  oneUser = { name: 'AZERTYUIOP', age: 45 };

  updateUser(event: any) {
    this.oneUser = event;
  }
}
