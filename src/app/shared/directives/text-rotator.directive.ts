import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[textRotator]'
})
export class TextRotatorDirective implements OnInit {

  //Recebe o valor do componente bindado no nosso html
  @Input() words: string[] = [];

  readonly charInterval = 100;
  readonly standingCursor = 2000;

  wordIndex: number = 0;
  charIndex: number = 0;
  writing: boolean = true;

  animation = this.animate();

  constructor(private _el: ElementRef, private _renderer:Renderer2) {}

  ngOnInit() {
    this.scheduleAnimate();
  }

  scheduleAnimate() {
    let x = this.animation.next();

    setTimeout(() => this.scheduleAnimate(), x.value);
  }

  *animate(): Generator<number> {

    let word: string | undefined

    while(true) {

      word = this.words[this.wordIndex];

      if(!word) {

        this.wordIndex = 0;
        this.charIndex = 0;

        yield 1000;
        continue;

      }

      if (this.writing && this.charIndex > word.length) {

        this._renderer.addClass(this._el.nativeElement, 'animateCursor');
        this.writing = false;

        yield this.standingCursor;
        this._renderer.removeClass(this._el.nativeElement, 'animateCursor');
        continue;

      }

      if (!this.writing && this.charIndex <= 0) {

        this.wordIndex = this.wordIndex + 1 >= this.words.length ? 0 : this.wordIndex + 1;
        this.writing = true;

        yield this.charInterval;
        continue;

      }

      let text: string = word.slice(0, this.charIndex);
      this._renderer.setProperty(this._el.nativeElement, 'innerText', text);

      yield this.charInterval;
      this.charIndex += this.writing ? 1 : -1;

    }

  }
}
