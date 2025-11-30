import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { Investment } from '../investment.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<Investment>();
  initialInvestment = '0';
  annualInvestment = '0';
  expectedReturn = '5';
  investmentDuration = '10';

  onSubmit() {
    console.log('Form Submitted!');
    console.log('Initial Investment:', this.initialInvestment);
    console.log('Annual Investment:', this.annualInvestment);
    console.log('Expected Return:', this.expectedReturn);
    console.log('Investment Duration:', this.investmentDuration);
  }
}
