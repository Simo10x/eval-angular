import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-data',
  imports: [FormsModule],
  templateUrl: './user-data.html',
  styleUrl: './user-data.css',
})
export class UserData {
  @Output() userDataEmitUpdate = new EventEmitter<any>();
  user = { name: '', age: 0 };

  updateUser() {
    this.userDataEmitUpdate.emit(this.user);
  }
}
