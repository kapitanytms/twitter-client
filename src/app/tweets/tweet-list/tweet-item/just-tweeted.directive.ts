import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appJustTweeted]'
})
export class JustTweetedDirective implements OnInit {

  @Input() appJustTweeted: number;

  constructor(private elem: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // Compare the tweet creation date with 'today - 24hrs'
    if (new Date(this.appJustTweeted) >= new Date(Date.now() - 864e5)) {
      this.renderer.setStyle(this.elem.nativeElement, 'color', '#1dcaff');
      setTimeout(() => {
        this.renderer.setStyle(this.elem.nativeElement, 'color', '#ffffff');
      }, 3000);
    }
  }

}
