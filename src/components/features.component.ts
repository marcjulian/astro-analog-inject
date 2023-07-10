import { Component } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { RxLet } from "@rx-angular/template/let";

@Component({
  selector: "app-features",
  standalone: true,
  imports: [RxLet],
  template: `
    <p>Feaures (RxLet)</p>

    <div *rxLet="count$; let count">
      {{ count }}
    </div>

    <button (click)="count$.next(count$.getValue() + 1)">+1</button>
    <button (click)="count$.next(count$.getValue() - 1)">-1</button>
  `,
})
export class FeaturesComponent {
  count$ = new BehaviorSubject(0);
}
