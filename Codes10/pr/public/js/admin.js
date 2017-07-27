window.addEventListener ("load", function() {
		
     messages = [];
    var socket = io.connect('http://localhost:9876');
    
    var content = document.getElementById("show");
    socket.on('adminmessage', function (data) {
        console.log("Admin Message Rec ",data);
            messages.push(data.message);
			var arr =data.message.split(",");
			 $('.map')
      .gmap3({
        center:[arr[0], arr[1]],
        zoom:15,
		mapTypeId: google.maps.MapTypeId.HYBRID
      })
      .marker([
        {position:[arr[0], arr[1]]},
        
        {address:"Brain Mentors Pvt Ltd", icon: "http://maps.google.com/mapfiles/marker_grey.png"}
      ])
      .on('click', function (marker) {
        marker.setIcon('http://maps.google.com/mapfiles/marker_green.png');
      });
				var html = '';
            for(var i=0; i<messages.length; i++) {
                html += messages[i] + '<br />';
            }
            //content.innerHTML = html;
        
    });
});
