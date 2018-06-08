import { Component, ElementRef, NgZone, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import * as html2canvas from 'html2canvas';


@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})

export class CheckinComponent implements OnInit {
 // public latitude: number = 12.955157999999999;
 // public longitude: number = 77.6597592;
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  private mapData: any;
  private postCheckIn: string;
  private postDesc: string;

  @Output() checkInItem: EventEmitter<any> = new EventEmitter();
  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) { 
    //this.setCurrentPosition();
  }

  ngOnInit() {
    //set google maps defaults
    this.zoom = 12;
   // this.latitude = 39.8282;
   // this.longitude = -98.5795;
     //set current position
    this.setCurrentPosition();

    //create search FormControl
    this.searchControl = new FormControl();

   

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: []
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  private setCurrentPosition(){
    navigator.geolocation.getCurrentPosition((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    });
  }


  private checkIn(){
    this.mapData = 'https://maps.googleapis.com/maps/api/staticmap?center='+this.latitude+','+this.longitude+'&markers=color:red%7Clabel:C%7C'+this.latitude+','+this.longitude+'&zoom='+this.zoom+'&size=600x400&key=AIzaSyD92tk4K4diBMwwDA0l8qxsBnSWgJQIl2A';
    let data = {'postCheckIn': this.postCheckIn, 'postDesc': this.postDesc, 'mapData': this.mapData};
    this.checkInItem.emit({data: data});
    this.postCheckIn = '';
    this.postDesc = '';
    this.latitude = null;
    this.longitude = null;
    this.setCurrentPosition();
  }

  public resetCheckin(){
    //alert('reset');
  }
}
