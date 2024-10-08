'use strict'; 
//Functions challenge
/* CHALLENGE #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!



Your tasks:

Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

Ignore draws this time. Instead, log No team wins... to the console if there is no winner.



TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.

 */

//Test 1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
   
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

function checkWinner(avgDolphins, avgKoalas) {
    if (scoreDolphins >= (scoreKoalas * 2)){
        console.log(`Dolphins win with ${scoreDolphins} points vs. ${scoreKoalas} points scored by Koalas`);
    } else if (scoreKoalas >= (scoreDolphins * 2)){
        console.log(`Dolphins win with ${scoreKoalas} points vs. ${scoreDolphins} points scored by Dolphins`);
    } else{
        console.log('No team wins');
     }
}
checkWinner(scoreDolphins, scoreKoalas);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log (scoreDolphins, scoreKoalas);

checkWinner(scoreDolphins, scoreKoalas);

//Array challenge
/* Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44. */

function calcTip(bill){
     if(bill >= 50 && bill <= 300){
        const tip = (bill * 15) / 100;
        console.log(`Since your bill is ${bill}, you have to pay a tip of 15%`);
        return tip;
     } else {
        const tip2 = (bill * 20) / 100;
        console.log(`Since your bill is ${bill}, you have to pay a tip of 20%`);
        return tip2
     }
}

function totalToPay(bill){
    const totalPayed = bill + calcTip(bill);
    return totalPayed;
}

const bills = [];
const tips = [];
const total = [];

//bill1 / total1/ tips1 operations
const bill1 = 100;
console.log(bill1);

const tip1 = calcTip(100);
console.log(tip1);

const total1 = totalToPay(100);
console.log(total1);

bills.push(bill1);
console.log('bills array:', bills);

tips.push(tip1);
console.log('tips array:', tips);

total.push(total1);
console.log('total array:', total1);

const bill2 = 555;
console.log(bill2);

const tip2 = calcTip(555);
console.log(tip1);

const total2 = totalToPay(555);
console.log(total2);

bills.push(bill2);
console.log('bills array:', bills);

tips.push(tip2);
console.log('tips array:', tips);

total.push(total2);
console.log('total array:', total);

const bill3 = 44;
console.log(bill3);

const tip3 = calcTip(44);
console.log(tip3);

const total3 = totalToPay(44);
console.log(total3);

bills.push(bill3);
console.log('bills array:', bills);

tips.push(tip3);
console.log('tips array:', tips);

total.push(total3);
console.log('total array:', total);


console.log(bills);
console.log(tips);
console.log(total);


