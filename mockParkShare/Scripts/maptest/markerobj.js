console.log("load markerobj.js todya");


function parkingmarker(id) {
    console.log(id);
    this.id = id;
    this.divid = "parking" + id;
    this.iconid = "icon" + id;
    this.highlight = false;
    this.colorhighlight = "darkgreen";
    this.colordefault = "blue";
    this.letter = "Z";
    this.markerimgurl = "";
    google.maps.event.addListener(this, 'click', this.togglehighlight );

}
parkingmarker.prototype = new google.maps.Marker();



parkingmarker.prototype.togglehighlight = function () {
    
    this.divid = "parking" + this.id;
    this.iconid = "icon" + this.id;
    //document.getElementById("debugParkingList").innerHTML += ("<br>toggle: " + this.divid);
    console.log("toggle" + this.divid);

    if (this.highlight) {
        this.highlight = false;
        document.getElementById(this.divid).setAttribute("class", "default");
        this.setimgurl(this.colordefault, this.letter);
        document.getElementById(this.iconid).src = this.markerimgurl;
        this.setIcon(this.markerimgurl);
    } else {
        this.highlight = true;
        document.getElementById(this.divid).setAttribute("class", "success");
        this.setimgurl(this.colorhighlight, this.letter);
        document.getElementById(this.iconid).src = this.markerimgurl;
        this.setIcon(this.markerimgurl);
    }
};

console.log("setimgurl");

parkingmarker.prototype.setimgurl = function(color, l){
    this.markerimgurl =  '/Content/images/mapmarkers/' + color + '_marker' + l + '.png';

};

parkingmarker.prototype.setLetter = function(l) {
    this.letter = l;
    this.setimgurl(this.colordefault, this.letter);
    this.setIcon(this.markerimgurl);
};



parkingmarker.prototype.deleteFromMap = function () {
    this.setMap(null);
};

parkingmarker.prototype.newfct = function () {
    console.log("testing new prototype function ");
};

console.log("finished loading markerobj.js");




