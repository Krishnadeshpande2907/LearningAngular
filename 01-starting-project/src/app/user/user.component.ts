import { Component, computed, Input, input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // with Input decorator
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;

  // do not use this method in a lot of places
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imgPath = computed(() => {
  //   'assets/users/' + this.avatar
  // });
  // with computed, the imgPath will only be recalculated when this.avatar changes

  get imgPath() {
    return 'assets/users/' + this.avatar;
  }
  
  onSelectUser() {  }
}
