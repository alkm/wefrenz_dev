import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'albumSearch'
})
export class AlbumSearchPipe implements PipeTransform {
  	transform(items: any[], albumText: string): any[] {
	    if(!items) return [];
	    if(!albumText) return items;
		albumText = albumText.toLowerCase();
		return items.filter( it => {
			let title = it.title as string;
	    	return title.toLowerCase().includes(albumText);
	    });
	}

}
