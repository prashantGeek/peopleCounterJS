// document.getElementById("count").innerHTML = "5";

// let myAge = 21;

// console.log(myAge); 

// let myAge=21;
// let humanDogRatio=7;

// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);

// let bonusPoints=50;
// bonusPoints = bonusPoints+50;
// bonusPoints = bonusPoints -75;
// bonusPoints = bonusPoints +45;

// console.log(bonusPoints);

let count =0;

let saveEl = document.getElementById("save-el");

function increment() {
  count = count +1;
  document.getElementById("count").innerText=count;
}

function save(){
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  count=0;
  document.getElementById("count").innerText=0;
}

// let message = "You have three new notifications";
// console.log(message);

// let username= "Prashant";
// let messageToUser = message + ", " + username + "!";
// console.log(messageToUser);

// let name= "Prashant";
// let greeting = "Hi, my name is ";

// let myGreeting = greeting + name;

// console.log(myGreeting);

