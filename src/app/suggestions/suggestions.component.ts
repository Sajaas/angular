import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

}
