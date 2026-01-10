import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MessagesListComponent } from './messages-list/messages-list.component';
import { NewMessageComponent } from './new-message/new-message.component';

@Component({
  selector: 'app-messages',
  standalone: true,
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
  imports: [MessagesListComponent, NewMessageComponent],
  // the below is used when we don't want changeDetection to run 
  // over this component and it's child everytime
  // it will only run when some event occured inside this tree
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesComponent {

  get debugOutput() {
    console.log('[Messages] "debugOutput" binding re-evaluated.');
    return 'Messages Component Debug Output';
  }
}
