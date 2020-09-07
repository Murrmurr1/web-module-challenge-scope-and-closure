// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * The main difference is that counter2 accesses a variable at a global level rather than one at a function level
 * 2. Which of the two uses a closure? How can you tell?
 * The first one uses a closure because it accesses a variable outside of its block that's in another block, and the second one 
 * uses a variable that isn't closed in anything
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * A situation were counter1 would be preferable would be when you only need to find the total count of something,
 * and counter2 would be when you need to see the entire count structure and when you need to access it count
 * at any given point
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  let ranPts = Math.round(Math.random()*2)
//     if (ranPts === 0){
//       return ranPts = 0
//     } else if (ranPts === 1) {
//       return ranPts = 1
//     } else {
//       return ranPts = 2
//     }
// console.log(ranPts)
return ranPts
}
inning()
console.log(inning())
/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(callback, num){
let scores = 
{
  Home: 0,
  Away: 0
}
for (let i = 0; i <= num; i++) {
  scores.Home += callback()
  scores.Away += callback()
}
return scores 

}

console.log(finalScore(inning, 9))
/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `finalScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each point in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


function scoreboard(cb2, cb, num) {
  let score = 
  {
    Home: 0,
    Away: 0
  }

  for (let i = 0; i < num; i++) {
    score.Home += cb();
    score.Away += cb();

    if (i < 1) {
      console.log(i + "st inning: " + score.Away + " - " + score.Home);
    } else if (i < 2) {
      console.log(i + "nd inning: " + score.Away + " - " + score.Home);
    } else if (i < 3) {
      console.log(i + "rd inning: " + score.Away + " - " + score.Home);
    } else {
      console.log(i + "th inning: " + score.Away + " - " + score.Home);
    }
  }
  console.log("Final Score: " + score.Away + " - " + score.Home);
}

scoreboard(finalScore, inning, 9)
