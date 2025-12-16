import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {
	// @Input({required:true}) image!: { src:string, alt:string };
	// @Input({required:true}) title!: string;

	// alternate approach without using input function (only available in Angular 17.1+)
	image = input.required<{ src:string, alt:string }>();
	title = input.required<string>();
}
