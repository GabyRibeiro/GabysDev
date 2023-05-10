import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import * as Parallax from 'parallax-js';

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
    // let scene = document.querySelector('.parallax') as HTMLElement;
    // let parallax = new Parallax(scene, {
    //   relativeInput: true,
    // });
  }

  animateObjects($event: any) {

    const layers = document.querySelectorAll('.parallax > .layer');

    const MAX = 25;
    const MIN = 15;

    layers.forEach((layer, index) => {
      const DEPTH = layer.getAttribute('depth');
      const scale = (Math.random() * (MAX - MIN) + MIN).toFixed(2);
      //console.log($event.clientX)

      console.dir(DEPTH);

      this.renderer.setStyle(layer, 'transform', `translate3d(${Number(scale)*Number(DEPTH)}px, ${Number(scale)*Number(DEPTH)}px, 0px)`);
      this.renderer.setStyle(layer, 'transition', 'transform 2s all')
    })

    // for (let index in layers) {
    //   const layer: any = layers[index];
    //   let depth;
    //   //FIXME: A ultima interação retorna undefined
    //   console.log(layer)

    //   // clientX: 630, clientY: 276
    //   //console.log($event.clientX, Number(depth), depth)
    //   // this.renderer.setStyle(layer, 'transform', `translate3d(25px, 60px, 0px)`);
    //   // this.renderer.setStyle(layer, 'transform', `translate3d(${($event.clientX)*(Number(depth)+Number(depth))}px, ${($event.clientX)*(Number(depth)+Number(depth))}px, 0px)`);
    // }

  }

}
