console.log("markertest.js");
var map;
var mapOptions;
var currMapOptions;
var markers = [];
var currZoom;


function initialize() {
    var objsrc = '/Scripts/maptest/markerobj.js';

    console.log("before initizlie2");
    loadscripturl(objsrc, loadmap);
    //loadscripturl(objsrc, initialize2);
}

function loadmap() {
    loadgooglemap();
    loadmarkers();
    initialize3();

}

function loadgooglemap(callback) {
    console.log("load map start");
    //ye's sushi, 107 king street west. 
    //var mycenter = new google.maps.LatLng(43.450440, -80.491202);
    var mycenter = new google.maps.LatLng(43.45, -80.493);

    mapOptions = {
        zoom: 15,
        zoomControl: true,
        scaleControl: true,
        streetViewControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

    map.setCenter(mycenter);
    console.log("load map ends");
    console.log(map.constructor.name);

    if (callback && typeof (callback) === "function") {
        callback();
    }
}

function loadmarkers(callback) {


    var mycenter = new google.maps.LatLng(43.45, -80.493);
    var marker = new google.maps.Marker({
        position: mycenter,
        icon: 'http://maps.google.com/mapfiles/arrow.png'
    });

    var mcenter = new google.maps.LatLng(43.450440, -80.491202);
    var m = new parkingmarker(1);
    m.setLetter("A");
    m.setPosition(mcenter);
    m.setMap(map);
    marker.setMap(map);

    //populateParkingMarkers();


    if (callback && typeof (callback) === "function") {
        callback();
    }
}



function fctinorder(fct1, callback) {
    console.log("execute funciton1");
    fct1();
    console.log("finixhed function1");
    if (callback && typeof (callback) === "function") {
        console.log("execute function 2");
        callback();
        console.log("finished function 2");
    }
}



function loadScript() {


    var googlemapscript = document.createElement('script');
    googlemapscript.type = 'text/javascript';
    // callback=initialize loads the script only when the rest of the page is loaded. 
    //instead of using callback from google maps, I'll use the custom call back function. 
    googlemapscript.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' +
        '&callback=initialize' +
        '&key=AIzaSyDIpPyiWV_dzWdD2vK3yPdL5D75mO61zHU' +
        '&libraries=places';

    document.body.appendChild(googlemapscript);
    console.log("loadscripts");

}

window.onload = loadScript;


function loadscripturl(url, callback) {
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    //var body = document.body;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    //body.appendChild(script);
    head.appendChild(script);
}

function initialize3() {

    console.log("initialize3 starts");
    console.log(map.constructor.name);
    // Create the search box and link it to the UI element.
    var input = /** @type {HTMLInputElement} */(
        document.getElementById('pac-input'));
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);


    var defaultBounds;

    var searchBox = new google.maps.places.SearchBox(
      /** @type {HTMLInputElement} */(input));

    // [START region_getplaces]
    // Listen for the event fired when the user selects an item from the
    // pick list. Retrieve the matching places for that item.
    google.maps.event.addListener(searchBox, 'places_changed', function () {
        var places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        } 
        currZoom = map.getZoom();
        for (var i = 0, marker; marker = markers[i]; i++) {
            marker.setMap(null);
        }

        // For each place, get the icon, place name, and location.
        markers = [];
        var bounds = new google.maps.LatLngBounds();
        for (var i = 0, place; place = places[i]; i++) {
            var image = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            var marker = new google.maps.Marker({
                map: map,
                icon: image,
                title: place.name,
                position: place.geometry.location
            });

            markers.push(marker);

                bounds.extend(place.geometry.location);
        }
            map.fitBounds(bounds);

        //        map.setOptions(mapOptions);
    });
    // [END region_getplaces]

    // Bias the SearchBox results towards places that are within the bounds of the
    // current map's viewport.
    google.maps.event.addListener(map, 'bounds_changed', function () {
        var bounds = map.getBounds();
        searchBox.setBounds(bounds);
        console.log("set bounds and current zoom: " + currZoom);
        map.setZoom(currZoom);
    });
}


function printfct(m) {
    var prop;
    for (prop in m) {
        if (typeof m[prop] === "function") {
            document.getElementById("para").innerHTML += "<br>";
            document.getElementById("para").innerHTML += prop;
        }
    }
}