console.log("load markerobj.js");


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

parkingmarker.prototype.test = function () {
    document.getElementById("para").innerHTML += "<br>test prototype function of id = " + this.divid;
}


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

parkingmarker.prototype.setimgurl = function(color, l){
    this.markerimgurl =  '/Content/images/mapmarkers/' + color + '_marker' + l + '.png';

};

parkingmarker.prototype.setLetter = function(l) {
    this.letter = l;
    this.setimgurl(this.colordefault, this.letter);
    this.setIcon(this.markerimgurl);
};


//google.maps.event.addListener(this, 'click', this.logid).bind(parkingmarker.prototype);
//parkingmarker.addListener('click', this.logid);

parkingmarker.prototype.logid = function () {
    this.test();
}





