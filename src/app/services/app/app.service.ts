export class AppService {
  static getGeoCode(){
  	let latitude;
  	let longitude;
  	navigator.geolocation.getCurrentPosition((position) => {
		latitude = position.coords.latitude;
		longitude = position.coords.longitude;
		return {'location': {'latitude': latitude, 'longitude': longitude}};
    });
  }

}
