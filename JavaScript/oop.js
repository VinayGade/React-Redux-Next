class Animal {

    constructor(name, weight, family) {
        this._name = name;
        this._weight = weight;
        this._family = family;
        this._canMove = true;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    get weight() {
        return this._weight;
    }

    set weight(weight) {
        this._weight = weight;
    }
}

class Dog extends Animal {
    constructor(name, weight, family) {
        super(name, weight, family);
    }

    introduce() {
        console.log('This is ' + this._name + ' !');
        console.log('Dog weight: ' + this._weight + ' !');
        console.log('Dog Family: ' + this._family + ' !');
    }

    // A static method
    static bark() {
        console.log('Woof!');
    }
}

// Parent class
class Media {
    constructor(info) {
        this.publishDate = info.publishDate;
        this.name = info.name;
    }
}

// Child class
class Song extends Media {
    constructor(songData) {
        super(songData);
        this.artist = songData.artist;
    }

    play() {
        console.log('Playing!');
    }

    stop() {
        console.log('Stopping!');
    }
}

/*
super
 A child class constructor calls the parent class constructor using the super() method.
*/

const mySong = new Song({
    artist: 'Queen',
    name: 'Bohemian Rhapsody',
    publishDate: 1975
});

console.log('song details:')
console.log(mySong.name);
console.log(mySong.artist);
mySong.play();

console.log('dog details:')
const myDog = new Dog('Buster', 20, 'Labrador');
myDog.introduce();

// Calling the static method
Dog.bark();

/*
static methods:
  Static methods are not called on individual instances of the class, 
  but are called on the class itself. Therefore, they tend to be 
  general (utility) methods.  
*/

class FruitBowl {
    constructor() {
        this._material = 'Wood';
    }
    static numFruits(bowl) {
        return bowl.length;
    }
}

const myFruitBowl = new FruitBowl();
const myBowl = ['apple', 'orange', 'banana'];
console.log('Fruit count in bowl: ' + FruitBowl.numFruits(myBowl));

class Building {
    constructor(levels, exits) {
        this._levels = levels;
        this._exits = exits;
    }
}

class Museum extends Building {
    constructor(levels, exits, artworks) {
        super(levels, exits);
        this._artworks = artworks;
    }
}

class Car {
    constructor(make, model, year) {
        this._make = make;
        this._model = model;
        this._year = year;
    }
}
class Book {
    constructor(title, author, year) {
        this._title = title;
        this._author = author;
        this._year = year;
    }
    get title() {
        return this._title;
    }
    set title(newTitle) {
        this._title = newTitle
    }
}

class FavoriteDog extends Dog {

    constructor(name, wieght, family, breed, color) {
        super(name, wieght, family);
        this._breed = breed;
        this._color = color;
    }
}

const spot = {
    name: 'Spot',
    breed: 'Beagle',
    color: 'brown'
}

const myFavDog = new FavoriteDog('Spot', 12, 'Hound', 'Beagle', 'brown');

console.log(`Dog Name: ${myFavDog._name}`);
console.log(`Breed: ${myFavDog._breed}`);
console.log(`Weight: ${myFavDog._weight}`);
console.log(`Family: ${myFavDog._family}`);
console.log(`Color: ${myFavDog._color}`);
console.log(spot);

class Employee {
    constructor(name, hourlyWage) {
        this.name = name;
        this.hourlyWage = hourlyWage;
        this.hoursWorked = 0;
    }

    logHours(hoursWorked) {
        this.hoursWorked += hoursWorked;
    }

    generatePaycheck() {
        console.log(this.hoursWorked * this.hourlyWage);
        this.hoursWorked = 0;
    }
}

const employee = new Employee('Vinay', 500);
employee.logHours(10);
employee.generatePaycheck();

class House {
    constructor(numRooms, numWindows, location) {
        this._numRooms = numRooms;
        this._numWindows = numWindows;
        this._location = location;
    }

    fixSink() {
        console.log('Try pouring drano down the drain.');
    }
}

const myHouse = new House(3, 15, 'USA');

console.log(myHouse);
myHouse.fixSink();

class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get level() {
        return this._level;
    }

    set level(level) {
        this._level = level;
    }

    get numberOfStudents() {
        return this._numberOfStudents;
    }

    set numberOfStudents(numberOfStudents) {
        if (typeof numberOfStudents === "number") {
            this._numberOfStudents = numberOfStudents;
        } else {
            console.log('Invalid input: numberOfStudents must be set to a Number.');
        }
    }

    quickFacts() {
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
    }

    static pickSubstituteTeacher(substituteTeachers) {
        const random = Math.floor(Math.random() * substituteTeachers.length);
        return substituteTeachers[random];
    }
}

class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, 'primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, 'high', numberOfStudents);
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams() {
        return this._sportsTeams;
    }
}

const primarySchool = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')

primarySchool.quickFacts();

School.pickSubstituteTeacher([
    "Smita Bhoir",
    "Shreya Solanki",
    "M Sirkar",
    "J. R. Smith",
    "Ana Hathway",
    "Smita Barne",
]);

const alSmith = new HighSchool("Al E. Smith", 415, [
    "Baseball",
    "Basketball",
    "Volleyball",
    "Track and Field",
]);

const sportsTeams = alSmith.sportsTeams;
console.log(sportsTeams);

class RentalUnit {
    constructor(address, costPerYear) {
        this._address = address;
        this._costPerYear = costPerYear;
    }

    get address() {
        return this._address;
    }

    get costPerYear() {
        return this._costPerYear;
    }

    calculateMonthly() {
        return this.costPerYear / 12;
    }
}

class Apartment extends RentalUnit {
    constructor(address, costPerYear, numberOfBedrooms) {
        super(address, costPerYear);
        this._numberOfBedrooms = numberOfBedrooms;
    }

    get numberOfBedrooms() {
        return this._numberOfBedrooms;
    }

    calculateMonthly() {
        return this.costPerYear / 12; 
    }

    static randomBorough() {
        const myBoroughs = ['Manhattan', 'Brooklyn', 'Queens', 'The Bronx', 'Staten Island'];
        return myBoroughs[Math.floor(Math.random() * 5)];
    }
}

const myApartment = new Apartment('1234 W 54th', 22000, 3);

Apartment.randomBorough();