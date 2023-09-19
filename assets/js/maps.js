// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var latitude="40.6700";
    var longitude="-73.9400";
    var zoom=11;
    var location = new google.maps.LatLng(latitude,longitude);
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: zoom,

        // The latitude and longitude to center the map (always required)
        center: location,
        //move maps controls to right and top
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.TOP_CENTER
        },
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER
        },
        scaleControl: true,
        streetViewControl: true,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
        },
        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    var icon={
        path:'M11.001 0.006c-5.889 0-10.663 4.775-10.663 10.663 0 1.945 0.523 3.762 1.432 5.332l9.23 15.994 9.23-15.994c0.909-1.57 1.432-3.387 1.432-5.332 0-5.888-4.774-10.663-10.662-10.663zM11.001 13.334c-1.472 0-2.666-1.193-2.666-2.665 0-1.471 1.194-2.665 2.666-2.665s2.665 1.194 2.665 2.665c0 1.472-1.193 2.665-2.665 2.665z',
        fillColor: '#d1253b',
        fillOpacity: .9,
        anchor: new google.maps.Point(0,0),
        strokeWeight: 0,
        scale: 1
    };
    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(latitude, longitude),
        map: map,
        icon: icon,
        title: 'RAVCAR'
    });

    var contentString = '<div id="content">' +'<div id="siteNotice">' +'</div>' +
        '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +'<div id="bodyContent">' +'Heritage Site.</p>' +
        '</div>' +
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
    //center marker after close info window
    google.maps.event.addListener(infowindow, 'closeclick', function () {
        map.panTo(location);
        //map.setCenter();
    });

    var mapfull = document.getElementById('mapFull');
    mapfull.addEventListener('click',function () {
        var footer = document.querySelector("footer");
        var contactBlock=document.querySelector("footer .contact-block");
        if(hasClass(footer,'activeMap')){
            footer.classList.remove('activeMap');
            refreshMap(1200);
        }else{
            footer.classList.add("activeMap");
            refreshMap(1000);
            contactBlock.classList.remove("active");
        }
        document.querySelector("footer .location-block .map-block").style.height= window.innerHeight;
    })

    function refreshMap(time){
        setTimeout(function(){
            google.maps.event.trigger(map, 'resize');
            map.panTo(location);
            }, time);
    }
    var locationBlock =document.querySelector('footer .location-block');
    var mapBlock =document.querySelector('footer .location-block .map-block');
    var locationIcon = document.querySelectorAll('footer .location-block .address-container');
    for(var i=0;i<locationIcon.length;i++){
        locationIcon[i].addEventListener('click',function () {
            if(hasClass(locationBlock,'active')){
                mapBlock.classList.remove('active');
                setTimeout(function(){
                    locationBlock.classList.remove('active');
                }, 1000);
            }else{
                locationBlock.classList.add('active');
                setTimeout(function(){
                    mapBlock.classList.add('active');
                }, 1000);
                refreshMap(2000);
            }
        },false);
    }
}

