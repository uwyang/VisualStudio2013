
function initialize() {
    var objsrc = '/Scripts/maptest/objdef.js';

    console.log("before initizlie2");
    loadScripts(objsrc, initialize2);
}

function initialize2() {

    console.log("load initialize()");

    var mycenter = new google.maps.LatLng(-34.397, 150.644);

    var mapOptions = {
        zoom: 11,
        center: mycenter,
        zoomControl: true,
        scaleControl: true,
        streetViewControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    var marker = new google.maps.Marker({
        position: mycenter,
        icon: 'http://maps.google.com/mapfiles/arrow.png'
    });

    
    var mcenter = new google.maps.LatLng(-34.390, 150.649);
    var m = new parkingmarker(3);
    //m.togglehighlight();
    console.log(m.id);
    console.log(m.divid);
    m.setLetter("M");
    console.log(m.highlight);
    m.setPosition(mcenter);
    //onsole.log(marker.constructor);
    //mymarker.setPosition(new google.maps.LatLng(-34.397, 150.644));
    //mymarker.setLetter('b');

    //marker.setPosition(mycenter);
    //marker.setMap(map);
    m.setMap(map);

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

function loadScript2() {
    var googlemapsrc = 'https://maps.googleapis.com/maps/api/js?v=3.exp' +
        //'&callback=initialize' +
        '&key=AIzaSyDIpPyiWV_dzWdD2vK3yPdL5D75mO61zHU';
    var objsrc = 'http://localhost:55722/Scripts/maptest/objdef.js';

    var loadobjfct = function () { loadScripts(objsrc, initialize); };

    console.log("before loadscript2");
    loadScripts(googlemapsrc, loadobjfct);
    //loadScripts(objsrc, initialize);
    console.log("end of loadscript2");
}

function loadScripts(url, callback) {
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