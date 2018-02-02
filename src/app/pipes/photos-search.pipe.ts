import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'photosSearch'
})
export class PhotosSearchPipe implements PipeTransform {

  transform(items: any[], photosText: string): any[] {
	    if(!items) return [];
	    if(!photosText) return items;
		photosText = photosText.toLowerCase();
		return items.filter( it => {
			let title = it.title as string;
	    	return title.toLowerCase().includes(photosText);
	    });
	}
}

