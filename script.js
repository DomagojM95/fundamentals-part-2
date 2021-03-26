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
*/

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

