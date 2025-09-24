/*let john = {
    fulName: 'John Doe',
    mass:175, //This is in kg 
    height:1.80, //this is in feet
    calcBMI: function() {
        this.bmi =this.mass / (this.height * this.height)
    }
}
let mark = {
    fulName: 'Mark Ochieng',
    mass:85, //This is in kg 
    height:1.90, //this is in feet
    calcBMI: function() {
        this.bmi =this.mass / (this.height * this.height)
    }
}
john.calcBMI();
mark.calcBMI();
console.log(mark,john);

if (john.bmi > mark.bmi) {
    console.log(john.fulName + ' has a greater BMI of '+ john.bmi)
}else if (mark.bmi > john.bmi) {
    console.log(mark.fulName + ' has a greater BMI of '+ mark.bmi)
}else {
    console.log('They have similar BMI\'S')
}
*/


//THE TERNARY OPERATOR

/*let age = 23 , firstName = 'John';
(age >= 18) ? console.log(firstName + '' + ' is old enough give that man a beer') :
console.log(firstName + '' + ' is still a small boy take him home!!');
*/

//THE SWITCH OPERATOR
/*
let job = 'pmjvvgv', firstName = 'Kumanyoko';
switch(job) {
case 'teacher':
console.log(firstName +' teaches kids code');
break;
case 'hooper':
console.log(firstName +' plays ball and puts belt to ass');
break;
case 'plumber':
console.log(firstName + ' is a certified crashout but does a good job');
break;
default:
console.log(firstName+ ' might not be working in this department!!!');
}
*/

//Assigning a value to a variable using the TERNARY OPERATOR
/*let age = 11;
let drink = age >= 18 ? 'drinks beer' : 'drinks jyyuus';
console.log(drink);
*/

//THE SWITCH STATEMENT
/*
let job = 'hooper';
switch (job) {
    case 'teacher': 'teaches kids how to code';
    break;
    case 'hooper': console.log('is an elite basketball player');
    break;
    default: 'said person might not be working here'
}
//console.log(job);
*/

//FIRST CODING CHALLENGE
/*
let johnMass = 105, markMass = 75, markBMI, johnBMI , markHeight = 165 , johnHeight = 185;
markBMI =markMass/(markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);
markHigherBMI = markBMI > johnBMI;
console.log("Is mark\'s BMI higher than John\'S? " + markHigherBMI)
/*
if (johnBMI > markBMI) {
    console.log('Mark has a lower BMI than John')
} else if (markBMI > johnBMI) {
    console.log('John has a lower BMI than Mark SURPRISINGLY!!!')
} else {
    console.log('both have similar BMI\'s ')
} 

let Mike,John, mikeAverageScore, johnAverageScore, highestAverageScore, maryAverageScore;
mikeAverageScore = (116 + 94 + 123)/3;
johnAverageScore = (189 + 120 + 103)/3;
maryAverageScore = (97 + 134 + 105)/3;
console.log( 'These are the average team scores respectively: '+ 'Mike\'s score: '+ mikeAverageScore + ', John\'s score: ' + johnAverageScore + ', Mary\'s score: ' + maryAverageScore); 
if (mikeAverageScore > johnAverageScore && mikeAverageScore > maryAverageScore) {
    console.log('Mike\'s team has the highest average score of ' + mikeAverageScore)
}else if (johnAverageScore > mikeAverageScore && johnAverageScore > maryAverageScore) {
    console.log('John\'s team has the highest average score of ' + johnAverageScore)
}else if (maryAverageScore > mikeAverageScore && maryAverageScore > johnAverageScore) {
    console.log('Mary\'s team has the highest average score of ' + maryAverageScore)
}
else {
    console.log('Both teams have similar average scores')
}; */


// PRACTICING FUNCTIONS
/*
function calculateAge (birthYear) {
    return 2025 - birthYear;
}

console.log(calculateAge(1999));
*/

// ARRAYS CODING CHALLENGE

// Define a variable to store the first name
/*
var firstName = 'john';

// Function to calculate the tip based on the bill amount
function tipCalculator(bill) {
    let percentage; // Variable to store the calculated tip

    // If the bill is less than 50, tip is 20% of the bill
    if (bill < 50) {
        percentage = 0.2 * bill;
    // If the bill is between 50 and 200 (exclusive), tip is 15% of the bill
    } else if (bill > 50 && bill < 200) {
        percentage = 0.15 * bill;
    // If the bill is 200 or more, tip is 10% of the bill
    } else  {
        percentage = 0.1 * bill;
    };
    // Return the calculated tip
    return percentage;
}

// Example usage: Calculate the tip for a bill of 300 and log it
console.log(tipCalculator(300));

// Array of bill amounts for which tips need to be calculated
let tips = [48, 124, 268];

// Calculate the tips for each bill using the tipCalculator function
let billedTips = [
    tipCalculator(tips[0]), // Tip for the first bill (48)
    tipCalculator(tips[1]), // Tip for the second bill (124)
    tipCalculator(tips[2])  // Tip for the third bill (268)
];

// Calculate the final values (bill + tip) for each bill
let finalValues = [
    tips[0] + billedTips[0], // Total for first bill
    tips[1] + billedTips[1], // Total for second bill
    tips[2] + billedTips[2]  // Total for third bill
];

// Log the array of final values (total amounts to be paid)
console.log(finalValues);
*/


// CODING CHALLENGE

let mark = {
    fullName : 'Mark Ochieng',
    mass: 85, // in kg
    height: 1.90, // in meters  
    calBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;    
    }
}
let john = {
    fullName : 'John Oduor',
    mass: 95, // in kg
    height: 1.88, // in meters
    calBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;    
    }
}
if (mark.calBMI() > john.calBMI()) {
    console.log(mark.fullName + ' has a higher F\'N BMI of ' + mark.bmi);
} else if (john.calBMI() > mark.calBMI()) {
    console.log(john.fullName + ' has a higher F\'N BMI of ' + john.bmi);
} else {
    console.log('Both have similar BMI\'s');
}

