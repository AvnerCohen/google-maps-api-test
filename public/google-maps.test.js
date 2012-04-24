    function moshe()
    {
      alert('aerror')
    }


      var latlng, map = null;
      var localPoint = {lat:0,long:0};
      var geocoder = new google.maps.Geocoder();
      var  MiddleEastCountries = new Array();

      var directionsService = new google.maps.DirectionsService();
      var rendererOptions = { draggable: true  };
      var directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);

      function setMarker(position) {
    
      localPoint.long = position.coords.longitude;
      localPoint.lat = position.coords.latitude;


      latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude); 

      var myOptions = {
          zoom: 4,
          center: latlng,
          mapTypeControl: false,
          navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };


        map = new google.maps.Map(document.getElementById("map_canvas"),
            myOptions);
      directionsDisplay.setMap(map);


      }

      function reverseResult() {

      }

      function nameToLatLong(country)
      {
     
        geocoder.geocode(getGeoCodeRequest(country), function(results, status) {
              if (status == google.maps.GeocoderStatus.OK) {

                if (results[0]) {
                  marker = new google.maps.Marker({
                      position: latlng,
                      map: map
                  });
                MiddleEastCountries.push(results[0].geometry.location);
                } 
              } else {
                alert("Geocoder failed due to: " + status);
              }
            });
              
      }

function setMa3()
{

    var request = {
      origin: "Jerusalem, Israel",
      destination: "Tel-aviv, Israel",
      waypoints:[{location: "Qatane, Israel"}, {location:"Ashdod, Israel"}],
      travelMode: google.maps.DirectionsTravelMode.DRIVING
    };

    directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.ZERO_RESULTS)
      {
          alert('no results for route request');
      }
      else if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      }
    });

}



      function setMa2(){
        MiddleEastCountries.length=0;
 /*        var marker = new google.maps.Marker({
            position: latlng,
            title:"Hello World!",
           draggable:true,
             animation: google.maps.Animation.DROP       
        });     
        marker.setMap(map);  */


       nameToLatLong("Syria"),nameToLatLong("Jordan"),nameToLatLong("Israel"),nameToLatLong("Egypt"), nameToLatLong("Iran");
       nameToLatLong("Bulgaria"),  nameToLatLong("Turkey"), nameToLatLong("Tunisia");



        setTimeout(function(){
        var flightPath = new google.maps.Polyline({
          path: MiddleEastCountries,
          strokeColor: "#FF0000",
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

        flightPath.setMap(map); 
        }, 2000)

        
/*
          var flightPlanCoordinates = [
          new google.maps.LatLng(localPoint.lat, localPoint.long),
          new google.maps.LatLng(21.291982, -157.821856),
          new google.maps.LatLng(-18.142599, 178.431),
          new google.maps.LatLng(-27.46758, 153.027892)
        ];
        var flightPath = new google.maps.Polyline({
          path: flightPlanCoordinates,
          strokeColor: "#FF0000",
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

        flightPath.setMap(map);  */   

      }
      function initialize() {
        
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(setMarker, moshe);
        } else {
          error('not supported');
        }
     }      


     function getGeoCodeRequest(country){
      return       {
       address: country
      /* bounds: LatLngBounds,
       region: string*/
      }
     }
