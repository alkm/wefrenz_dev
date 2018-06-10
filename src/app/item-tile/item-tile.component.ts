import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-tile',
  templateUrl: './item-tile.component.html',
  styleUrls: ['./item-tile.component.css']
})
export class ItemTileComponent implements OnInit {
	@Input('userId') userId;
	@Input('item') item;
  	constructor() { }

  	ngOnInit() {
  	}

}
