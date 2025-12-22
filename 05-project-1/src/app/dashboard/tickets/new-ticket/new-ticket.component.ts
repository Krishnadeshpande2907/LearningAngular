import { Component, ElementRef, output, ViewChild } from '@angular/core';
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
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  
  // Angular 17.3+
  // using signals
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  // "[viewChild.required]" is used to avoid the undefined check

  // @Output() add = new EventEmitter<{title: string; text: string}>();
  add = output<{title: string; text: string}>();

  enteredTitle = '';
  enteredText = '';

  ngOnInit() {
    console.log('On Init');
    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit() {
    console.log('After View Init');
    console.log(this.form?.nativeElement);
  }

  onSubmit() {
    this.add.emit({title: this.enteredTitle, text: this.enteredText})
    
    // this.form().nativeElement.reset();
    // this.form?.nativeElement.reset();
    this.enteredTitle = '';
    this.enteredText = '';
  }
}