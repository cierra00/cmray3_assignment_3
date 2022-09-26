var pet = function(name) {
    var getName = function () {
        return name;
    }
    return getName;
    }

    myPet = pet('vivie');
    myPet();