import { Component } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { LetDirective } from "./let.directive";
import { AsyncPipe } from "@angular/common";

@Component({
  selector: "app-pricing",
  standalone: true,
  imports: [LetDirective, AsyncPipe],
  template: `
    <p>Pricing (Custom Let)</p>

    <div *ngLet="price$ | async as price">{{ price }}€</div>

    <button (click)="price$.next(price$.getValue() + 99)">Add +42€</button>
  `,
})
export class PricingComponent {
  price$ = new BehaviorSubject(42);
}
