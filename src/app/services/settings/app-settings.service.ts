const port = 3000;
export class AppSettingsService {
  
  constructor() { }

	static API_ENDPOINT(environment){
		switch(environment) {
		    case "local":
		    	return "";
		        //return "https://localhost:"+port;
		        //return "https://10.20.17.49:"+port;
		        //return "https://192.168.225.177:"+port;
		    case "dev":
		        return "https://www.dev-wefrenz.com:"+port;
		    case "prod":
		        return "https://www.wefrenz.com"+port;
		}
	}

}
