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
    this.setCurrentPosition();
  }

  ngOnInit() {
    //set google maps defaults
    this.zoom = 12;
   // this.latitude = 39.8282;
   // this.longitude = -98.5795;
     //set current position
   // this.setCurrentPosition();

    //create search FormControl
    this.searchControl = new FormControl();

   

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
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

  private setCurrentPosition() {
   /* if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }*/
        if (navigator)
    {
      /*debugger;
      navigator.geolocation.getCurrentPosition( pos => {
          this.latitude = +pos.coords.longitude;
          this.longitude = +pos.coords.latitude;
        });*/

    /*  j(pos => {
          this.latitude = +pos.coords.longitude;
          this.longitude = +pos.coords.latitude;
      }, e => {
          //Your error handling here
          alert('can not retrieve your location');
          this.latitude = 39.8282;
          this.longitude = -98.5795;
      }, {
          enableHighAccuracy: false
      });*/
    }

    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(showLocation, errorHandler, {enableHighAccuracy:false, maximumAge:60000, timeout:27000});
    }
    else
    {
        alert('Votre navigateur ne prend malheureusement pas en charge la géolocalisation.');
    }

    function showLocation(position)
    {
         this.latitude = +position.coords.longitude;
          this.longitude = +position.coords.latitude;
       // document.write('Latitude : '+ position.coords.latitude +' - Longitude : '+ position.coords.latitude);
    }

    // Fonction de gestion des erreurs
    function errorHandler(error)
    {
      this.latitude = 39.8282;
          this.longitude = -98.5795;
        // On log l'erreur sans l'afficher, permet simplement de débugger.
        console.log('Geolocation error : code '+ error.code +' - '+ error.message); 

        // Affichage d'un message d'erreur plus "user friendly" pour l'utilisateur.
       // alert('Une erreur est survenue durant la géolocalisation. Veuillez réessayer plus tard ou contacter le support.');
    }
  }


  private checkIn(){
    this.mapData = 'https://maps.googleapis.com/maps/api/staticmap?center='+this.latitude+','+this.longitude+'&markers=color:red%7Clabel:C%7C'+this.latitude+','+this.longitude+'&zoom='+this.zoom+'&size=600x400&key=AIzaSyD92tk4K4diBMwwDA0l8qxsBnSWgJQIl2A';
    let data = {'postCheckIn': this.postCheckIn, 'postDesc': this.postDesc, 'mapData': this.mapData};
    this.checkInItem.emit({data: data});
    this.postCheckIn = '';
    this.postDesc = '';
    this.setCurrentPosition();
  }

  public resetCheckin(){
    //alert('reset');
  }
}
