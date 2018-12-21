import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {

  constructor() { }
  @Input() recipe;
  keys;
  names;
  ngOnInit() {
    if (this.recipe.ingridients) {
      this.keys = Object.keys(this.recipe.ingridients[0]);
      this.names = this.keys.map(item => {
        return this.recipe.ingridients[0][item];
      });
    }
  }

}
