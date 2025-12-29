import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, {
//     providers: [TaskService]
// }).catch((err) => console.error(err));

bootstrapApplication(AppComponent).catch((err) => console.error(err));