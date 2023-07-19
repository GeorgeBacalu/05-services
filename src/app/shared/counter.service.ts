import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CounterService {
  activeToInactiveActions: number = 0;
  inactiveToActiveActions: number = 0;

  incrementActiveToInactive(): void {
    this.activeToInactiveActions++;
    console.log("Active -> Inactive: " + this.activeToInactiveActions);
  }

  incrementInactiveToActive(): void {
    this.inactiveToActiveActions++;
    console.log("Inactive -> Active: " + this.inactiveToActiveActions);
  }
}
