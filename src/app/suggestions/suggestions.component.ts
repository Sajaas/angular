import { Component, OnInit } from '@angular/core';
import {endianness} from "os";

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {
  videos = [
    {name: 'video one', liked: true},
    {name: 'video two', liked: false}
  ];
  isShown: boolean = false

  showHide() {
    this.isShown =  (this.isShown ? false : true)
  }
  constructor() { }

  ngOnInit() {
  }

}
