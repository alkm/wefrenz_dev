import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-tile',
  templateUrl: './item-tile.component.html',
  styleUrls: ['./item-tile.component.css']
})
export class ItemTileComponent implements OnInit {
	@Input('userId') userId;
	@Input('item') item;
  @Input('cartItemArr') cartItemArr;
	@Output() onItemAddedToCart: EventEmitter<any> = new EventEmitter();
	private itemCount:number = 0;
  	constructor() { }

  	ngOnInit() {
      this.syncCheckOutItem();
  	}

    private syncCheckOutItem(){
      if(this.cartItemArr.length > 0){
        for(let i in this.cartItemArr){
          if(this.item._id === this.cartItemArr[i].item._id){
            this.itemCount = this.cartItemArr[i].count;
          }
        }
      }
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
