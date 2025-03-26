let john = {
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