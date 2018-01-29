import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'audioSearch'
})
export class AudioSearchPipe implements PipeTransform {
  	transform(items: any[], audioText: string): any[] {
	    if(!items) return [];
	    if(!audioText) return items;
		audioText = audioText.toLowerCase();
		return items.filter( it => {
			let title = it.title as string;
	    	return title.toLowerCase().includes(audioText);
	    });
	}
}
