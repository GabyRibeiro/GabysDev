import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[textRotator]'
})
export class TextRotatorDirective implements OnInit {

  //Recebe o valor do componente
  @Input() words!: string[];

  counter = 0;

  constructor(private el: ElementRef) {}

  ngOnInit() {

    // A cada 3 segundos, altera a palavra sendo exibida
    setInterval(() => {
      this.counter += 1;
      if(this.counter >= this.words.length) { this.counter = 0; }
      this.el.nativeElement.innerText = this.words[this.counter]
    }, 3000)
  }

}
