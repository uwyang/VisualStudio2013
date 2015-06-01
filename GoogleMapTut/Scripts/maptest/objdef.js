console.log("load objdef.js");

var pmarker = function (id) {
    var proto = new google.maps.Marker();
    proto.id = id;
    proto.divid = "parking" + id;
    proto.highlight = false;
    proto.letter = "A";
    var markerimgurl;

    proto.togglehighlight = function () {
        proto.divid = "parking" + id;
        console.log(proto.divid);
        if (proto.highlight) {
            proto.highlight = false;
            document.getElementById(proto.divid).setAttribute("class", "success");
            proto.setIcon('http://maps.google.com/mapfiles/markerA.png');
        } else {
            proto.highlight = true;
            document.getElementById(proto.divid).setAttribute("class", "");
            proto.setIcon('http://maps.google.com/mapfiles/markerB.png');
        }
    }

    proto.setLetter = function (l) {
        proto.letter = l;
        proto.markerimgurl = 'http://maps.google.com/mapfiles/marker' + proto.letter + '.png';
        protp.setIcon(markerimgurl);
    }

    return proto;
}


function parkingmarker(id) {
    console.log(id);
    this.id = id;
    this.divid = "parking" + id;
    this.highlight = false;
    this.letter = "A";
    this.markerimgurl = "";

}



parkingmarker.prototype.togglehighlight = function () {
    console.log("togglehighlight");
    console.log(this.id);
    this.divid = "parking" + this.id;
    console.log(this.divid);
    if (this.highlight) {
        this.highlight = false;
        document.getElementById(this.divid).setAttribute("class", "success");
        this.setIcon('http://maps.google.com/mapfiles/markerA.png');
    } else {
        this.highlight = true;
        document.getElementById(this.divid).setAttribute("class", "");
        this.setIcon('http://maps.google.com/mapfiles/markerB.png');
    }
}

parkingmarker.prototype.setLetter = function(l) {
    this.letter = l;
    this.markerimgurl = 'http://maps.google.com/mapfiles/marker' + this.letter + '.png';
    this.setIcon(this.markerimgurl);
}

parkingmarker.prototype = new google.maps.Marker();

//google.maps.event.addListener(parkingmarker.prototype, 'click', parkingmarker.prototype.togglehighlight);
//google.maps.event.addListener(this, 'click', this.logid).bind(parkingmarker.prototype);
//parkingmarker.addListener('click', this.logid);

parkingmarker.prototype.logid = function () {
    console.log("called: logid");
    console.log(this.id);
}



