'use strict';
/*
let hasDriversLicences = false;
const passTest = true;

if (passTest) hasDriversLicences = true;
if (hasDriversLicences) console.log('i can drive');

//const interface = 'audio';
//const private = 543;


function logger() {
    console.log('my name is jonas ');
}
// calling / running /invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `jucie with ${apples} apples and ${oranges} and oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


function describeCountry(country, population, capitalCitiy) {
    return `${country} has ${population} million people and its capital city is ${capitalCitiy}`;
}

const finalDescribe = describeCountry('Finland', 6, 'Helsinki');
console.log(finalDescribe);

const croDescribe = describeCountry('Hrvatska', 4, 'Zagreb');
console.log(croDescribe);


function calAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calAge1(1991);
console.log(age1);

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);



function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}
const chinaPopilaton = percentageOfWorld1(1441);
console.log(chinaPopilaton);

const k1 = percentageOfWorld1(2300);
const k2 = percentageOfWorld1(1000);
const k3 = percentageOfWorld1(3000);
console.log(k1, k2, k3);

const precentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
};
const p1 = precentageOfWorld2(2300);
const p2 = percentageOfWorld2(1000);
const p3 = percentageOfWorld2(3000);
console.log(p1, p2, p3);




// arrow function

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);


const yearsRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirementAge = 65 - age;
    // return retirementAge;
    return `${firstName} retires in ${retirementAge} years`
}

console.log(yearsRetirement(1991, 'jonas'));
console.log(yearsRetirement(1980, 'bob'));


const precentageOfWorld = population => (population / 7900) * 100;

const percentageChina = precentageOfWorld(1441);
console.log(percentageChina);



function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `jucie with ${applePieces} pieces of apples and ${orangePieces} and pieces of  oranges`;
    return juice;
}
console.log(fruitProcessor(2, 3));


const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
    //return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'josnas'));
console.log(yearsUntilRetirement(1950, 'moike'));


function calcAge(birthYear, firstName) {
    const age = 2037 - birthYear;
    console.log(`${firstName} is ${age} years old`);
    return age;
}

const age = calcAge(1991, 'Jonas');


const calcAverage = (a, b, c) => (a + b + c) / 3;
const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);
console.log(avgDolphins, avgKoalas);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`dolphins  wins ${avgDolphins} vs ${avgKoalas}`)
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`koalas wind ${avgKoalas} vs ${avgDolphins}`);
    } else {
        console.log('no team wins');
    }

}

checkWinner(avgDolphins, avgKoalas);



const friend1 = 'michael';
const friend2 = 'steven';
const friend3 = 'peter';

const friends = ['michael', 'steven', 'peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'jay';
console.log(friends);

const firstName = 'jonas'
const jonas = [firstName, 'schmedman', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length)

//excersise

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

console.log(ages);

const precentageOfWorld = population => (population / 7900) * 100;

const population = [10, 1441, 332, 83];

if (population.length === 4) {
    console.log('array has 4 values');
} else {
    'doesent have 4 valuse'
};
const precentages = [
    precentageOfWorld(population[0]),
    precentageOfWorld(population[1]),
    precentageOfWorld(population[2]),
    precentageOfWorld(population[3]),

];
console.log(precentages);


const friends = ['michael', 'steven', 'peter'];
// ad elements
const newLength = friends.push('jay');
console.log(friends);
console.log(newLength);

friends.unshift('jihn');
console.log(friends);

//remove elements
friends.pop(); // remove lst elemen of array
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift();// remove first
console.log(friends);

console.log(friends.indexOf('steven'));
console.log(friends.indexOf('bob'));

friends.push(23);
console.log(friends.includes('steven'));
console.log(friends.includes(23));

if (friends.includes('steven')) {
    console.log('youhave friend called steven');

}



// probao sam ne valja
const calcTip = function (bill) {
    const tip1 = bill * 0.15;
    const tip2 = bill * 0.2;
    if (bill >= 50 || bill <= 300) {
        console.log(`tip is ${tip1} kn`);
    } else {
        `tip is ${tip2} kn`
    }

}


const bills = [125, 555, 44]
const tips = [
    calcTip(bills[0]),
    calcTip(bills[1]),
    calcTip(bills[2]),
]
console.log(tips);

//riješenje


const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 :
        bill * 0.2;
}

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill *0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);


const jonasArray = [
    'jonas',
    'schmedman',
    2037 - 1991,
    'teacher',
    ['michael', 'peter', 'steven']
];

const jonas = {
    firstName: 'jonas',
    lastName: 'schmedman',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['michael', 'peter', 'steven']
};


/// ZADATAK
const neighbours = ['bih', 'slovenija', 'srbija'];
const nivaDužina = neighbours.push('utopia');
console.log(neighbours);
neighbours.unshift('hrvatska');
console.log(neighbours);
const izbacivanje = neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('germany')) {
    console.log('probably not central europe country');
}

neighbours[neighbours.indexOf('slovenija')] = 'madarska';
console.log(neighbours);



const jonas = {
    firstName: 'jonas',
    lastName: 'schmedman',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['michael', 'peter', 'steven']
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('what do you want to know about jonas? choose betwene firstName, lastName, age, job, and friends');
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('wrong request! choose betwene firstName, lastName, age, job, and friends ');
}

jonas.loacation = 'portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

//chalenge
// 'jonas has 3 friends and his best friend is called michael'

console.log(`${jonas.firstName} has ${jonas.friends.length}   friends, and his best friend is called ${jonas.friends[0]}`);



const myCountry = {
    countryName: 'Finland',
    capitalName: 'Helsinki',
    language: 'finish',
    population: 6,
    neighbor: 3,
}
myCountry.population = 8;
myCountry['population'] = 6;
console.log(`${myCountry.countryName} has ${myCountry.population} million ${myCountry.language}-speaking people ${myCountry.neighbor} neigbourng countries and capital called ${myCountry.capitalName}. `)



////////////////////////////////// Object Metods/////////////////

const jonas = {
    firstName: 'jonas',
    lastName: 'schmedman',
    birthYear: 1991,
    job: 'teacher',
    friends: ['michael', 'peter', 'steven'],
    hasDriversLicence: false,

    //calcAge: function (bir thYear) {
    //  return 2037 - birthYear;
    //}


    //calcAge: function () {
    //console.log(this); //// za uzemanje podataka iz objekta bez ponavljanja (this)
    //return 2037 - this.birthYear;
    //}

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}- yearold ${this.job}, and he has ${this.hasDriversLicence ? 'a' : 'no'} drivers licences.`
    }
};

console.log(jonas.calcAge()); //////  ispis sa dot


console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

//console.log(jonas['calcAge'](1991)); ////// ispis sa  bracket notation



////////  chalenge   /////////
// 'Jonas is a 46- yearold teacher, and he has a drivers licence'

console.log(jonas.getSummary());


///////////////// zadatak /////////////////

const myCountry = {
    countryName: 'Finland',
    capitalName: 'Helsinki',
    language: 'finish',
    population: 6,
    neighbor: ['norway', 'sweden', 'russia'],

    describe: function () {
        console.log(
            `${this.countryName} has ${this.population} million ${this.language}-speaking people, ${this.neighbor.length} neghbourning countries and a capital called ${this.capitalName}.`
        );
    },

    checkIsland: function () {
        this.isIsland = this.neighbor.lenght === 0 ? true : false;
    }
}
myCountry.describe()
myCountry.checkIsland()



//////////////////////////////////coding challenge//////////////////////

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    hight: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / (this.hight * this.hight)
        return this.bmi;

    }
}


const john = {
    fullName: 'John Smith',
    mass: 92,
    hight: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / (this.hight * this.hight)
        return this.bmi;

    }
}
mark.calcBMI();
john.calcBMI();

console.log(mark.bmi);
console.log(john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName} BMI (${mark.bmi}) is higher than ${john.fullName} BMI (${john.bmi}).`);
} else {
    console.log(`${john.fullName} BMI (${john.bmi}) is higher than ${mark.fullName} BMI (${mark.bmi}).`)
};


////////////////////////////FOR LOOP////////////////////////////

/// controle struction



//console.log('lifting weights repetition 1');
//console.log('lifting weights repetition 2');
//console.log('lifting weights repetition 3');
//console.log('lifting weights repetition 4');
//console.log('lifting weights repetition 5');
//console.log('lifting weights repetition 6');
//console.log('lifting weights repetition 7');
//console.log('lifting weights repetition 8');
//console.log('lifting weights repetition 9');
//console.log('lifting weights repetition 10');


// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
    console.log(`lifting weights repetition ${rep}`);
};


///////////////////zadatak////////////////////////////////////
for (let vot = 1; vot <= 50; vot++) {
    console.log(`Voter number ${vot} is curently voting.`);
};


*/
