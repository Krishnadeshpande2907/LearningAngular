import { Component, computed, EventEmitter, Input, input, Output } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";
// import { DUMMY_USERS } from '../dummy-users';

// Object type definition
// type User = {
//   id: string;
//   name: string;
//   avatar: string;
// }

// interface definition
// interface User {
//   id: string;
//   name: string;
//   avatar: string;
// }

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // with Input decorator
  @Input ({ required: true}) user!: User;
  @Input ({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter();

  // many do not use this method in a lot of places
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imgPath = computed(() => {
  //   'assets/users/' + this.avatar
  // });
  // with computed, the imgPath will only be recalculated when this.avatar changes

  get imgPath() {
    return 'assets/users/' + this.user.avatar;
  }
  
  onSelectUser() { 
    this.select.emit(this.user.id);
  }
}
