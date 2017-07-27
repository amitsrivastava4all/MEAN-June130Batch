
var x ;

var messages = [];var socket;
window.addEventListener("load",()=>{
x= document.getElementById("show");
 socket = io.connect('http://localhost:9876');

});
function getLocation() {
    if (navigator.geolocation) {
        //navigator.geolocation.getCurrentPosition(showPosition,showError);
		navigator.geolocation.watchPosition(showPosition,showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }

}
function showPosition(position) {
	
	var longi = position.coords.longitude;
	var lati = position.coords.latitude;
    x.innerHTML = "Current Latitude: " + lati + 
    "<br>Longitude: " + longi; 
	var latlon = lati + "," + longi;
	console.log("Watching Pos ",latlon);
			
	socket.emit('send', { message: latlon,userid:'Amit' });
	
    $('.map')
      .gmap3({
        center:[lati, longi],
        zoom:15,
		mapTypeId: google.maps.MapTypeId.HYBRID
      })
      .marker([
        {position:[lati, longi]},
        
        {address:"Brain Mentors Pvt Ltd", icon: "http://maps.google.com/mapfiles/marker_grey.png"}
      ])
      .on('click', function (marker) {
        marker.setIcon('http://maps.google.com/mapfiles/marker_green.png');
      });
  
    
}


function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}