//JS Functions exercise 5
//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
var age = prompt("What is your age?");

if (Number(age) < 18) {
  alert("Sorry, you are too young to drive this car. Powering off");
} else if (Number(age) > 18) {
  alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
  alert("Congratulations on your first year of driving. Enjoy the ride!");
}

checkDriverAge();

// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?

//2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.

var checkDriverAge2 = function () {
  var age = prompt("What is your age?");

  if (Number(age)<18){
    alert('Sorry you are too young to drive.Power off');
  }else if (Number(age) > 80){
    alert('You are too old to drive. Take a bus! It is free ');
  }else if(Number(age)>18){
    alert('You are over 18! Powering on, enjoy the ride!');
  }else if (Number(age)==18){
    alert('Congratulations on your first year of driving. Enjoy the ride!');
}}

//call funciton
checkDriverAge2();

//BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter:
// checkDriverAge(92);
// it returns "Powering On. Enjoy the ride!"

function checkDriverAge3(age){
  // console.log('How old are you?')
  // console.log(age);
  
  if (Number(age)<18){
    alert('Sorry you are too young to drive.Power off');
  }else if (Number(age) > 80){
    alert('You are too old to drive. Take a bus! It is free ');
  }else if(Number(age)>18){
    alert('You are over 18! Powering on, enjoy the ride!');
  }else if (Number(age)==18){
    alert('Congratulations on your first year of driving. Enjoy the ride!');
}}
// console.log(checkDriverAge3(18));
// console.log(checkDriverAge3(89));
console.log(checkDriverAge3(17));