var firstload = true;

console.log("marker search test.js");
var map;
var mapOptions;
var currMapOptions;
var markers = [];
var currZoom;
var mapmaxZoom = 18;
var mapminZoom = 5;
var setZoom = true;
var canSearch = true;
var myposmarker;

function reinitialize() {

    //var objsrc = '/Scripts/maptest/markerobj.js';

    showAllDistance();
    //loadscripturl(objsrc);

    console.log("function: re-initialize()");
    //debugger;
    deleteParkingMarkers();
    deleteMyposmarker();

    for (var i=0; i<markers.length; i++){
        markers[i].setMap(null);
    }

    loadmarkers();
    //initializeGoogleMapSearchBox();
    addMarkerListeners();
    $("#loadFromMainFrame").removeClass("disabled");

}

function initialize() {
    var objsrc = '/Scripts/maptest/markerobj.js';

    showAllDistance();
    //loadscripturl(objsrc, loadmap);

    console.log("function: initialize()");

    loadscripturl(objsrc, loadmap);


}


function loadmap() {

    loadgooglemap();

    loadmarkers();

    initializeGoogleMapSearchBox();
    addMarkerListeners();

    if (firstload) {
        console.log("first time loading. ");
        firstload = false;
        $('#getUserLocation').removeClass("disabled");
        //$('#getUserLocation').html("<big>Where Am I</big>");
    }

    $("#loadFromMainFrame").removeClass("disabled");

    if(supportGeolocation){
        $('#getUserLocation').removeClass("disabled");
        //$('#getUserLocation').html("<big>here Am I</big>");
    }

}


function loadgooglemap(callback) {

    console.log("function: load googlemap");
    //ye's sushi, 107 king street west. 
    //var mycenter = new google.maps.LatLng(43.450440, -80.491202);
    var mycenter = new google.maps.LatLng(43.45, -80.493);

    mapOptions = {
        zoom: 15,
        zoomControl: true,
        maxZoom: mapmaxZoom,
        minZoom: mapminZoom,
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
    //before loading the markers, clear them off the maps. 
    //markers = [] and only myposmarker need taken care of. 


    console.log("function: loadmarkers");
    console.log("last coordinate: " + lastlat + "," + lastlng);
    var lastcenter = new google.maps.LatLng(lastlat, lastlng);

    myposmarker = new google.maps.Marker({
        position: lastcenter,
        icon: '/Content/images/mapmarkers/arrow.png',
        draggable: true
    });

    myposmarker.setMap(map);

    populateParkingMarkers();


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

function initializeGoogleMapSearchBox() {

    console.log("initializeGoogleMapSearchBox starts");

    //debugger;
    // Create the search box and link it to the UI element.
    var input = /** @type {HTMLInputElement} */(
        document.getElementById('pac-input'));
    console.log(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);


    var defaultBounds;

    var searchBox = new google.maps.places.SearchBox(
      /** @type {HTMLInputElement} */(input));

    // [START region_getplaces]
    // Listen for the event fired when the user selects an item from the
    // pick list. Retrieve the matching places for that item.
    google.maps.event.addListener(searchBox, 'places_changed', function () {
        setZoom = true;
        var places = searchBox.getPlaces();


        console.log(places.length + " plases, zoom is: " + currZoom);

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
            marker = new google.maps.Marker({
                map: map,
                icon: image,
                title: place.name,
                position: place.geometry.location
            });


            markers.push(marker);

            bounds.extend(place.geometry.location);
        }

        if (markers.length == 1) {
            myposmarker.setPosition(markers[0].position);
        }


        fitBoundToMarkers(bounds, parkingmarkers);

        map.fitBounds(bounds);

        showAllDistance();

        console.log("place changed, current zoom: " + map.getZoom());
    });



    // [END region_getplaces]

    // Bias the SearchBox results towards places that are within the bounds of the
    // current map's viewport.
    google.maps.event.addListener(map, 'bounds_changed', function () {
        var bounds = map.getBounds();
        searchBox.setBounds(bounds);


        if (typeof currZoom != 'undefined' && setZoom) {
            console.log("set bounds and current zoom: " + currZoom);
            map.setZoom(currZoom);
            setZoom = false;
        }

    });

}

function addMarkerListeners(){
    google.maps.event.addListener(map, 'dblclick', function (e) {

        var positionDoubleclick = e.latLng;
        console.log("double clicked at: " + positionDoubleclick);
        myposmarker.setPosition(positionDoubleclick);
        // if you don't do this, the map will zoom in
        //e.stopPropagation();
        showAllDistance();
    });

    google.maps.event.addListener(myposmarker, 'dragend', function () {
        showAllDistance();
    });

}

//by all, I mean myposparker and parking markers. 
function fitBoundsToAll() {
    var bounds = new google.maps.LatLngBounds();
    if(myposmarker){
    bounds.extend(myposmarker.getPosition());
    }
    if (parkingmarkers) {
        fitBoundToMarkers(bounds, parkingmarkers);
    }
    map.fitBounds(bounds);
}

function fitBoundToMarkers(b, somemarkers) {
    for (i = 0; i < somemarkers.length; i++) {
        b.extend(somemarkers[i].getPosition());
    }
}

function updatehiddenlatlng() {
    sethiddenlatlng(myposmarker.position.lat(), myposmarker.position.lng());
    console.log("submit pos: " + myposmarker.position);
}

function sethiddenlatlng(lat, lng) {
    document.getElementById("lat").value = lat;
    document.getElementById("lng").value = lng;
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