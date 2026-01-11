import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  clickCount = signal(0);
  clickCount$ = toObservable(this.clickCount);
  
  interval$ = interval(1000);
  intervalSignal = toSignal(this.interval$, { initialValue: 0 });

  customInterval$ = new Observable((subscriber) => {
    let timesExecuted = 0;
    const interval = setInterval(() => {
      if (timesExecuted > 3) {
        clearInterval(interval);
        subscriber.complete();
        return;
      }
      console.log('Emitting new value');
      subscriber.next({ message: 'New value'});
    }, 2000);
  })
  private destroyRef = inject(DestroyRef);

  constructor() {
    // effect(() => {
    //   console.log(`Clicked button ${this.clickCount()} times`);
    // });
  }

  ngOnInit(): void {
    // const subscription = interval(1000).pipe(
    //   map((val) => val * 2)
    // ).subscribe({
    //   next: (val) => console.log(val),
    //   // complete: () => console.log('Completed'),  // this function is used when observable is completed
    //   // the above complete function will never be called in this case as interval never completes
    //   // error: (err) => console.log('Error: ', err) // this function is used when observable throws an error
    // });

    // this.destroyRef.onDestroy(() => {
    //   subscription.unsubscribe();
    // });
    this.customInterval$.subscribe({
      next: (val) => console.log(val),
      complete: () => console.log('Custom Interval Completed')
    });
    const subscription = this.clickCount$.subscribe({
      next: (val) => console.log(`Clicked button ${this.clickCount()} times`)
    });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  onCLick() {
    this.clickCount.update(prevCount => prevCount + 1);
  }
}
