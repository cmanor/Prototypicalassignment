class Person
{
    constructor()
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.favoriteColor = favoriteColor;
        this.favoriteNumber = favoriteNumber;
        this.favoriteFoods = [];
        this.family = [];
    }
}

Person.prototype.fullName = function()
{
    return this.firstname + this.lastName;
}

Person.prototype.toString = function()
{
    return this.firstName + this.lastName + "Favorite Color: " + this.favoriteColor + this.favoriteNumber;
}

Person.prototype.addToFamily = function(familyMember)
{
    return this.family.push(familyMember)
}

let deez = new Person("deez", "johnson", "green", "69", ["food1", "food2", "food3"]);
let knutz = new Person("knutz", "peterson", "brown", "69", ["food4", "food5", "food6"]);