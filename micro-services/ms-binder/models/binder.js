//Contructor
function Binder(id) {
    //Binder Name
    this.name;
    //login user
    this.email;
    
    this._id;    
    //Add id if exist
    if (id) { this._id = id }
}

// class methods
Binder.prototype.mappingBody = function (body) {
    this.name = body.name;
    this.email = body.email;
};

// export the class
module.exports = Binder;