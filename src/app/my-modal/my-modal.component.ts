import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
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
