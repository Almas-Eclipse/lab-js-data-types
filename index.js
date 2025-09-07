/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";
// Fred fed Ted bread and Ted fed Fred bread
// Concatenate the string variables into one new string
const twister = (`${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`);

// Print out the concatenated string

console.log(twister);


/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "Java";
const part2 = "Script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const final = part1.slice(0, -1) + part1.slice(-1).toUpperCase() + part2.slice(0, -1) + part2.slice(-1).toUpperCase();

// Print the cameLtaiL-formatted string

console.log(final);


/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const tipAmount = billTotal * 0.15;

// Print out the tipAmount
console.log(tipAmount);



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

let randomDecimal = Math.random();

let scaled = randomDecimal * 10;

let randomNumber = Math.floor(scaled) + 1;

// Print the generated random number


console.log(randomNumber);


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
console.log("expression1", expression1);

const expression2 = a || b;
console.log("expression2", expression2);

const expression3 = !a && b;
console.log("expression3", expression3);

const expression4 = !(a && b);
console.log("expression4", expression4);

const expression5 = !a || !b;
console.log("expression5", expression5);

const expression6 = !(a || b);
console.log("expression6", expression6);

const expression7 = a && a;
console.log("expression7", expression7);

// false
//true
//false
// true
//true
//false
//true