const bolide = {
    col: "grey",
    mod: "DB5",
    bra: "Aston Martin",

    logInfo: function()
    {
        console.log("Car information: " + this.col + ", " + this.mod + ", " + this.bra);
    }
};

const secret =
{
    firstName: "James",
    lastName: "bond",
    code: "007",
    age: 57,

    bolide : bolide,

    logInfo: function()
    {
        console.log("Agent information: " + this.firstName + " " + this.lastName + ", " + this.code + ", " + this.age);
        console.log(this.firstName + " " + this.lastName + "'s Car information: " + this.car.col + ", " + this.car.mod + ", " + this.car.bra);
        this.bolide.logInfo();
    }
};

secret.logInfo();