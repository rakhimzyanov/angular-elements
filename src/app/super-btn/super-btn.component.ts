import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-btn',
  templateUrl: './super-btn.component.html',
  styleUrls: ['./super-btn.component.scss']
})
export class SuperBtnComponent implements OnInit {

  @Input() text = 'test';

  constructor() { }

  ngOnInit() {
  }

}
