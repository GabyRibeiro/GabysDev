import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'parallax-effect',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent implements OnInit, AfterViewInit{

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

  animateObjects($event: any) {

    const layers = document.querySelectorAll('.parallax > .layer');

    for (let index in layers) {
      const layer: any = layers[index];
      let depth;
      //FIXME: A ultima interação retorna undefined
      console.log(layer.dataset.depth)
      try {
        depth =  .5;
      } catch {}

      // clientX: 630, clientY: 276
      console.log($event.clientX, Number(depth), depth)
      // this.renderer.setStyle(layer, 'transform', `translate3d(25px, 60px, 0px)`);
      // this.renderer.setStyle(layer, 'transform', `translate3d(${($event.clientX)*(Number(depth)+Number(depth))}px, ${($event.clientX)*(Number(depth)+Number(depth))}px, 0px)`);
    }

  }

}
