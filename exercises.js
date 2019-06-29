//Create a Revealing Module Pattern that will have the following data and methods:

//data
//scores 65, 76, 100, 88, 17, 55

//methods
// 1. finds the sum of all scores
// 2. finds the avg of all scores
// 3. finds the highest score
// 4. finds the lowest score
// 5. generates a random score
// 6. finds the number of passing scores above 70
// 7. finds the first score in the list 
// 8. finds the last score in the list 
// 9. generates a new score list with a 5% increase for each score 
// 10.generates a list of scores that are odd numbered

let scoreModule = (function() {

let scores = [
  65, 76, 100, 88, 17, 55
];

/// Add
let add = function() {
  let sum = 0;
  for(i in scores) {
    sum += scores[i];
  }
  return sum;
}

/// Average
let avg = function() {
  let mean = add() / scores.length;
  return mean;
}

/// Highest
let highest = function() {
  return Math.max(...scores);
}

/// Lowest
let lowest = function() {
  return Math.min(...scores)
}

/// Random
let randomNum = function() {
  return Math.floor(Math.random() * 30);
}

/// Score of 70 or above
let pass = function() {
  let count = 0;
  for(i in scores) {
    if(scores[i] >= 70){
      count++;
    }
  }
  return count;
}

/// First Score
let first = function() {
  return scores.shift();
}

/// Last Score
let last = function() {
  return scores.pop();
}

/// Increase by 5%
let increase = function() {
  let arr = [];
  for(i in scores) {
    arr.push(scores[i] * .05 + scores[i])
  }
  return arr;
}

/// Odd scores

let odd = function() {
  let arrOdd = [];
  for(i in scores) {
    if(scores[i] % 2 === 1) {
      arrOdd.push(scores[i])
    }
  }
  return arrOdd;
}

return {
  add: add,
  avg: avg,
  highest: highest,
  lowest: lowest,
  randomNum: randomNum,
  pass: pass,
  first: first,
  last: last,
  increase: increase,
  odd: odd
}



})();

console.log(scoreModule.odd());