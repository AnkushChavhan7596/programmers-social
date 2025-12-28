import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.html',
  styleUrl: './title.css',
})
export class Title {
  @Input() title!: string;
  @Input() navBtn!: string;
  @Output() navBtnClick = new EventEmitter<void>();

  navBtnClicked(){
    this.navBtnClick.emit();
  }
}
