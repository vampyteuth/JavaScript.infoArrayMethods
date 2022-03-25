
//6 Create an extendable calculator
// importance: 5
// Create a constructor function Calculator that creates “extendable” calculator objects.
// Common practice is to make classes with a capital first letter, 
// though there is no explicit rule for it. makes it easier to see: "Oh this function starts with a
// Capital letter? I better not forget to use the new operator!"

// The task consists of two parts.

// First, implement the method calculate(str) that takes a string like "1 + 2" in the format 
// “NUMBER operator NUMBER” (space-delimited) and returns the result. 
// Should understand plus + and minus -.

// Usage example:

let calc = new Calculator;

console.log( calc.calculate("3 + 7") ); // 10

function Calculator() {

    this.methods ={
        '+' : (a, b) => a+b,
        '-' : (a, b) => a-b
    }
    
    this.calculate = function(str){
        let splitString = str.split(' ')
            a = +splitString[0],
            op = splitString[1],
            b = +splitString[2];

    if (isNaN(a) || isNaN(b)){
        return NaN
}
    return this.methods[op](a, b);
}
    this.addMethod = function(name, func){
        this.methods[name] = func;
    }
}
// Then add the method addMethod(name, func) that teaches the calculator a new operation. 
// It takes the operator name and the two-argument function func(a,b) that implements it.

// For instance, let’s add the multiplication *, division / and power **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

 let result = powerCalc.calculate('3 * 6');
 console.log(result)
 console.log(powerCalc.methods)


let result = powerCalc.calculate("2 ** 3");
 alert( result ); // 8
// No parentheses or complex expressions in this task.
// The numbers and the operator are delimited with exactly one space.
// There may be error handling if you’d like to add it.