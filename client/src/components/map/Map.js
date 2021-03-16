import React, { Component} from 'react'
let API_KEY = "AIzaSyBpNk5nvZPz-00lBJCQA83jWzsq0hlVrs4";

export default class Map extends Component {
    constructor (props){
    super (props);
    this.state = {
        latitude : null,
        longitude : null,
        userAddress: null
    };

    this.getLocation = this.getLocation.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this)
    }

        getLocation(){
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(this.getCoordinates,this.handleLocationError);
            } else{
                alert("Geolocation is not supported by this browser.")
            }
        }

        getCoordinates(position){
            this.setState({
                latitude:position.coords.latitude,
                longitude:position.coords.longitude
            })
        }

        
        handleLocationError(error){
                switch(error.code) {
                  case error.PERMISSION_DENIED:
                    alert("User denied the request for Geolocation.")
                    break;
                  case error.POSITION_UNAVAILABLE:
                    alert("Location information is unavailable.")
                    break;
                  case error.TIMEOUT:
                    alert("The request to get user location timed out.")
                    break;
                  case error.UNKNOWN_ERROR:
                    alert("An unknown error occurred.")
                    break;
                    default:
                    alert("An unknown error occurred.")
                }
              
        }
    render() {
        return (
            <div>
               <h2>HTML5 Coordinates</h2>
               <button onClick={this.getLocation}>Get Coordinates</button>
               <p>latitude{this.state.latitude}</p> 
               <p>longitude{this.state.longitude}</p>
               <h4>Google Maps Reverse Geocoding</h4>
               <p>Address:{this.state.userAddress}</p>
               
               {
                   this.state.latitude && this.state.longitude ?
                   <img src = {`src="https://maps.googleapis.com/maps/api/staticmap?center=${this.state.latitude},${this.state.longitude}&zoom=14&size=400x300&sensor=false&markers=color:red%7c${this.state.latitude},${this.state.longitude}&key=${API_KEY}`} alt=''/>
                   :
                   null
               }
            </div>
        )
    }
}
