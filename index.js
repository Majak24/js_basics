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
} */

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
};