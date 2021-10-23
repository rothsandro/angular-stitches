import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { css } from 'src/styles';
import { classNames } from 'src/utils/class-names';

@Component({
  selector: 'app-demo-two',
  template: `
    <h1 [ngClass]="cn.title$ | async | notNull">Angular + Stitches</h1>
    <p [ngClass]="cn.intro">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet.
    </p>
    <div>
      <button (click)="toggleTitleColor()">Toggle title color</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoTwoComponent {
  private titleIsPrimary = new BehaviorSubject(false);

  cn = classNames({
    title$: this.titleIsPrimary.pipe(
      map((primary) => $title({ color: primary ? 'primary' : 'text' }))
    ),
    intro: $intro,
  });

  toggleTitleColor(): void {
    this.titleIsPrimary.next(!this.titleIsPrimary.value);
  }
}

const $title = css({
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

const $intro = css({
  margin: '0 0 $2 0',
  fontSize: '$3',
});
