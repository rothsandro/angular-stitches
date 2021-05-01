import { Component, OnInit } from '@angular/core';
import { css } from 'src/styles';

const styledTitle = css({
  margin: '0 0 $5 0',
  fontSize: '$5',

  variants: {
    color: {
      text: {
        color: '$text',
      },
      primary: {
        color: '$primary',
      },
    },
  },
});

const styledIntro = css({
  margin: '0 0 $2 0',
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
    <div>
      <button (click)="toggleTitleColor()">Toggle title color</button>
    </div>
  `,
})
export class DemoOneComponent implements OnInit {
  // Short for "class name"
  cn = {
    title: '',
    intro: '',
  };

  private titleIsPrimary = false;

  ngOnInit(): void {
    this.buildStyles();
  }

  toggleTitleColor(): void {
    this.titleIsPrimary = !this.titleIsPrimary;
    this.buildStyles();
  }

  private buildStyles(): void {
    this.cn = {
      title: styledTitle({ color: this.titleIsPrimary ? 'primary' : 'text' })
        .className,
      intro: styledIntro().className,
    };
  }
}
