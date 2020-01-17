import { Component, OnInit, ViewEncapsulation, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyModalComponent implements OnInit {

  @Input() isOpen = false;

  isHover = false;

  constructor() { }

  ngOnInit() {
  }

  divMouseleave() {
    this.isHover = false;
  }

  divMouseenter() {
    this.isHover = true;
  }

  divClick() {
    console.log('handle click');
  }

}
