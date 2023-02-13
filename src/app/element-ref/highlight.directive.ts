import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appHighlight]",
})
export class HighlightDirective implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.renderer.setProperty(
      this.el?.nativeElement,
      "innerText",
      "This is now highlighted by a directive!"
    );
    // this.renderer.addClass(this.el?.nativeElement, this.highlightClass);
    this.renderer.setStyle(this.el?.nativeElement, "background-color", "yellow");
  }
}
