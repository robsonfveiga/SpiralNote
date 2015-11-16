

//Contructor
function Marker(id) {
    
    //Marker Name
    this.name;

}

// class methods
Marker.prototype.mappingBody = function (body) {
    this.name = body.name;
};

// export the class
module.exports = Marker;