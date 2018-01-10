import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'videoSearch'
})
export class VideoSearchPipe implements PipeTransform {
  	transform(items: any[], videoText: string): any[] {
	    if(!items) return [];
	    if(!videoText) return items;
		videoText = videoText.toLowerCase();
		return items.filter( it => {
			let title = it.title as string;
	    	return title.toLowerCase().includes(videoText);
	    });
	}
}
