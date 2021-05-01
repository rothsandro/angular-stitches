import { Component } from '@angular/core';
import { css } from 'src/styles';

const styledTitle = css({
  margin: '0 0 $5 0',
  fontSize: '$5',
  color: '$primary',
});

const styledIntro = css({
  margin: 0,
  fontSize: '$3',
});

@Component({
  selector: 'app-demo-one',
  template: `
    <h1 [ngClass]="cn.title">Angular + Stitches</h1>
    <p [ngClass]="cn.intro">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
    </p>
  `,
})
export class DemoOneComponent {
  // Short for "class name"
  readonly cn = {
    title: styledTitle().className,
    intro: styledIntro().className,
  };
}
