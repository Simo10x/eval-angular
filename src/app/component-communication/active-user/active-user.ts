import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-active-user',
  imports: [],
  templateUrl: './active-user.html',
  styleUrl: './active-user.css',
})
export class ActiveUser {
  @Input() activeUser: any;
}
