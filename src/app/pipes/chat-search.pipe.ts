import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chatSearch'
})

export class ChatSearchPipe implements PipeTransform {
	transform(items: any[], searchText: string): any[] {
	    if(!items) return [];
	    if(!searchText) return items;
		searchText = searchText.toLowerCase();
		return items.filter( it => {
	    	return it.fullname.toLowerCase().includes(searchText);
	    });
	}
}
