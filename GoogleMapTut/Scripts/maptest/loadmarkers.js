var parkingmarkers = [];

var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";



function showDistance(lat, lng, id) {
    var dist;
    var tolat, tolng;
    if ((!myposmarker)) {
        tolat = lastlat;
        tolng = lastlng;
    } else {
        tolat = myposmarker.getPosition().lat();
        tolng = myposmarker.getPosition().lng();
    }
    //console.log("from: " + tolat + " " + tolng);
    //console.log("to: " + lat + " " + lng);
    diststr = getDistanceStr(lat, lng, tolat, tolng);
    console.log("distance for " + id + ": " + diststr);
    var currdistdiv = document.getElementById("dist" + id);
    if (diststr) {
        currdistdiv.innerHTML = diststr;
    }
    console.log(currdistdiv.innerHTML);
    currdistdiv = null;
}

function addParkingMarker(lng, lat, id, letter, i) {
    console.log("add parking marker" + id);
    //document.getElementById("debugParkingList").innerHTML += ("at: " + lat + "," + lng);
    var currmarker = new parkingmarker(id);
    currmarker.setLetter(letter);
    currmarker.setPosition(new google.maps.LatLng(lat, lng));
    currmarker.setMap(map);
    

    var curricon = document.getElementById("icon" + id);
    curricon.src = currmarker.markerimgurl;
    //document.getElementById("debugParkingList").innerHTML += ("<br>" + currmarker.markerimgurl);
    console.log(curricon);
    console.log(curricon.src);
    curricon.addEventListener('click', (currmarker.togglehighlight).bind(currmarker));

    parkingmarkers.push(currmarker);


    currmarker = null;
    curricon = null;
}

function deleteParkingMarkers() {
    if (parkingmarkers && parkingmarkers.length > 0) {
        //elementary mistake: delete and shift array. I guess? 
        for (var i = 0; i < parkingmarkers.length; i++) {

            console.log("delete parking marker #" + i);
            parkingmarkers[i].setMap(map);
            parkingmarkers[i].setMap(null);
            //parkingmarkers[i] = null;
        }
    }
    //parkingmarkers = [];
}

function deleteMyposmarker() {
        if (myposmarker) {
        myposmarker.setMap(null);
        }
}

//functions that calcuates distance between two points. 
function rad(x) {
    return x * Math.PI / 180;
}

function getDistanceStr(lat1, lng1, lat2, lng2) {
    var d = getDistance(lat1, lng1, lat2, lng2);
    //console.log(d);
    if (d >= 1000) {
        return (Math.round(d / 100) / 10) + " KM";
    }
    return Math.round(d) + "M";
}

function getDistance(lat1, lng1, lat2, lng2) {
    var R = 6378137; // Earth’s mean radius in meter
    var dLat = rad(lat2 - lat1);
    var dLong = rad(lng2 - lng1);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(rad(lat1)) * Math.cos(rad(lat2)) *
      Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return Math.round(d); // returns the distance in meter
}

