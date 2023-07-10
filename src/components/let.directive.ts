import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

interface LetContext<T> {
  ngLet: T | null;
}

@Directive({
  selector: "[ngLet]",
  standalone: true,
})
export class LetDirective<T> {
  private _context: LetContext<T> = { ngLet: null };

  constructor(
    _viewContainer: ViewContainerRef,
    _templateRef: TemplateRef<LetContext<T>>
  ) {
    _viewContainer.createEmbeddedView(_templateRef, this._context);
  }

  @Input()
  set ngLet(value: T) {
    this._context.ngLet = value;
  }
}
