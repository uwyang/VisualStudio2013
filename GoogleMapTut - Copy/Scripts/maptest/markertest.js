console.log("markertest.js");
var map;


function initialize() {
    var objsrc = '/Scripts/maptest/markerobj.js';

    console.log("before initizlie2");
    loadscripturl(objsrc, initialize2);
}

function initialize2() {

    console.log("load initialize()");

    //ye's sushi, 107 king street west. 
    //var mycenter = new google.maps.LatLng(43.450440, -80.491202);
    var mycenter = new google.maps.LatLng(43.45, -80.493);

    var mapOptions = {
        zoom: 15,
        center: mycenter,
        zoomControl: true,
        scaleControl: true,
        streetViewControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    
    var marker = new google.maps.Marker({
        position: mycenter,
        icon: 'http://maps.google.com/mapfiles/arrow.png'
    });

    
        var mcenter = new google.maps.LatLng(43.450440, -80.491202);
        var m = new parkingmarker(1);
        m.setLetter("A");
        m.setPosition(mcenter);
        m.setMap(map);


    populateParkingMarkers();
}



function loadScript() {


    var googlemapscript = document.createElement('script');
    googlemapscript.type = 'text/javascript';
    // callback=initialize loads the script only when the rest of the page is loaded. 
    //instead of using callback from google maps, I'll use the custom call back function. 
    googlemapscript.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' +
        '&callback=initialize' +
        '&key=AIzaSyDIpPyiWV_dzWdD2vK3yPdL5D75mO61zHU';

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

function printfct(m) {
    var prop;
    for (prop in m) {
        if (typeof m[prop] === "function") {
            document.getElementById("para").innerHTML += "<br>";
            document.getElementById("para").innerHTML += prop;
        }
    }
}