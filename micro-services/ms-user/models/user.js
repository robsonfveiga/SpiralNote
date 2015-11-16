//Contructor
function User(id) {
    this.name;
    //Login = email
    this.login;
    this._id;
    
    //Add id if exist
    if (id) { this._id = id }
}

// class methods
User.prototype.mappingBody = function (body) {
    this.name = body.name;
    
    //Login = email
    this.login = body.login;
};

// export the class
module.exports = User;