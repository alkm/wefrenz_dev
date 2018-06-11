import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-tile',
  templateUrl: './cart-tile.component.html',
  styleUrls: ['./cart-tile.component.css']
})
export class CartTileComponent implements OnInit {

	@Input('userId') userId;
	@Input('obj') obj;
	@Output() subtractFromTotal: EventEmitter<any> = new EventEmitter();
	@Output() addToTotal: EventEmitter<any> = new EventEmitter();

	private itemCount: number = 0;
	private totalPrice: number = 0;
	private itemPrice: number = 0;

  	constructor() { }

  	ngOnInit() {
  		this.itemPrice = this.obj.item.price;
  		this.itemCount = this.obj.count;
  		this.totalPrice = this.itemPrice * this.itemCount;
  	}

  	private addItemCount(event: any){
  		this.itemCount++;
  		this.totalPrice = this.itemPrice * this.itemCount;
  		this.addToTotal.emit({data: this.itemPrice});
  	}
  	private removeItemCount(event: any){
  		if(this.itemCount > 0){
  			this.itemCount--;
  			this.totalPrice = this.itemPrice * this.itemCount;
  			this.subtractFromTotal.emit({data: this.itemPrice});
  		}
  	}
}
