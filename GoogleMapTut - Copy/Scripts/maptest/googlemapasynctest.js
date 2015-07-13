function initialize() {
    var mycenter = new google.maps.LatLng(-34.397, 150.644);

    var mapOptions = {
        zoom: 11,
        center: mycenter,
        zoomControl:true,
        scaleControl:true,
        streetViewControl:true,  
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    var marker = new google.maps.Marker({
        position: mycenter,
        icon: 'http://maps.google.com/mapfiles/marker1.png'
    });

    var mymarker = parkingMarker();
    //onsole.log(marker.constructor);
    //mymarker.setPosition(new google.maps.LatLng(-34.397, 150.644));
    //mymarker.setLetter('b');

    marker.setPosition(new google.maps.LatLng(-34.399, 150.641));
    marker.setMap(map);

   
}





function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    // callback=initialize loads the script only when the rest of the page is loaded. 
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' +
        '&signed_in=true&callback=initialize' +
        '&key=AIzaSyDIpPyiWV_dzWdD2vK3yPdL5D75mO61zHU';
    document.body.appendChild(script);
}

window.onload = loadScript;
