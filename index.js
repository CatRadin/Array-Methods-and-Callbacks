import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/
let final2014 = fifaData.filter(function(name){
    return name["Year"] === 2014 && name["Stage"] === "Final";
})

//(a) Home Team name for 2014 world cup final
console.log(final2014);

console.log(`The home teams name was ${final2014[0]["Home Team Name"]}`);


//(b) Away Team name for 2014 world cup final
console.log(`The away teams name was ${final2014[0]["Away Team Name"]}`);

//(c) Home Team goals for 2014 world cup final
console.log(`The home team ${final2014[0]["Home Team Name"]} had ${final2014[0]["Home Team Goals"]} goals`);

//(d) Away Team goals for 2014 world cup final
console.log(`The away team ${final2014[0]["Away Team Name"]} had ${final2014[0]["Away Team Goals"]} goals.`);

//(e) Winner of 2014 world cup final */
console.log(`The winner of the ${final2014[0]["Year"]} world cup finals was ${final2014[0]["Win conditions"]}`);


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

function getFinals(finalStage) {
    return finalStage.filter((ele) => ele.Stage === "Final")
}
getFinals(fifaData);
console.log(getFinals(fifaData));






/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(fifa){
    return fifa.map((team) => team.Year);

}

getYears(getFinals(fifaData));
console.log(getYears(fifaData));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

function getWinners(fifa) {
    const winners = fifa.map((fifa) =>{
        if (fifa["Home Team Goals"] > fifa["Away Team Goals"]){
            return fifa["Home Team Name"];
        }else{
            return fifa["Away Team Name"];
        }
    })
    return winners
    
}
getWinners(getFinals(fifaData));
console.log(getWinners(fifaData));




/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

 function getWinnersByYear(fifa, functionGetYears, functionGetWinners) {

    let years = functionGetYears(fifa);
    let winners = functionGetWinners(fifa);
    let  newArray = [];

    for (let i = 0; i < fifa.length; i++){
        let answer = `In ${years[i]}, ${winners[i]} won the world cup!`;
        newArray.push(answer);
    }
    return newArray
    }

     
  




/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(data) {
    let homeAverage = data.reduce((accumulator, item) => accumulator + item["Home Team Goals"], 0)  ;
    let awayAverage = data.reduce((accumulator, item) => accumulator + item["Away Team Goals"], 0) ;
    let average = (homeAverage + awayAverage) / data.length;
    return `${Math.round(average * 100) / 100}`;
}




/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
export default{
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
