import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
	data = input.required<Ticket>();
	detailsVisible = signal(false);
	close = output();

	onToggleDetails() {
		// usual set method
		this.detailsVisible.set(!this.detailsVisible());
		
		// this.detailsVisible.update((wasVisible) => !wasVisible);
		// this alternative method takes in the previous value 
		// and returns the new value
		// as given in the arrow function
	}

	onMarkAsClosed() {
		this.close.emit();
	}
}
