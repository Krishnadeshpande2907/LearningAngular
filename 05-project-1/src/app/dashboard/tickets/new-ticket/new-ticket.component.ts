import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  
  // Angular 17.3+
  // using signals
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  // "[viewChild.required]" is used to avoid the undefined check

  onSubmit(titleElement: HTMLInputElement, textElement: string) {
    // Handle form submission logic here
    const enteredTitle = titleElement.value;
    console.log('Submitted Title:', enteredTitle);
    console.log('Submitted Text:', textElement);
    
    // this.form?.nativeElement.reset();
    this.form().nativeElement.reset();
  }
}