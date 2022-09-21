import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[animateSpin]'
})
export class AnimateSpinDirective {

  //Recebe o valor do componente bindado no nosso html
  @Input() words: string[] = [];

  readonly spinDuration = 800;
  readonly standingWord = 2000;

  wordIndex: number = 0;

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

        yield 1000;
        continue;

      }

      this._renderer.setStyle(this._el.nativeElement, 'display', 'inline-block');
      this._renderer.setProperty(this._el.nativeElement, 'innerText', word);

      this._renderer.addClass(this._el.nativeElement, 'enter');
      yield this.spinDuration;
      this._renderer.removeClass(this._el.nativeElement, 'enter');

      yield this.standingWord;

      this._renderer.addClass(this._el.nativeElement, 'leave');
      yield this.spinDuration;
      this._renderer.removeClass(this._el.nativeElement, 'leave');

      this._renderer.setStyle(this._el.nativeElement, 'display', 'none');

      this.wordIndex = this.wordIndex + 1 >= this.words.length ? 0 : this.wordIndex + 1;

    }
  }

}
