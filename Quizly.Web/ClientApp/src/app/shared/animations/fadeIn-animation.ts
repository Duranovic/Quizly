import { animate, style, transition, trigger } from "@angular/animations";

export let fadeIn =  trigger("fadeIn", [
    transition('void<=>*', [
      style({opacity: 0}),
      animate(500)
    ])
  ]) 