import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-tile',
  templateUrl: './item-tile.component.html',
  styleUrls: ['./item-tile.component.css']
})
export class ItemTileComponent implements OnInit {
	@Input('userId') userId;
	@Input('item') item;
	@Output() onItemAddedToCart: EventEmitter<any> = new EventEmitter();
	private itemCount:number = 0;
  	constructor() { }

  	ngOnInit() {
  	}

  	private addItemToCart(event: any){
  		this.itemCount++;
  		let itemObj = {'count': this.itemCount,
                      'item': this.item};
  		this.onItemAddedToCart.emit({data: itemObj});
  	}

  	private removeItemFromCart(event: any){
  		this.itemCount--;
  		let itemObj = {'count': this.itemCount,
                      'item': this.item};
  		this.onItemAddedToCart.emit({data: itemObj});
  	}

}
