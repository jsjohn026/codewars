/*
Description:
Write function bmi that calculates body mass index (bmi = weight / height^2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

function bmi(weight, height) {
  let bmi = weight/(height**2) 
  if( bmi <= 18.5 ) {
    return "Underweight"
  } else if (bmi <= 25.0 ) {
    return "Normal"
  } else if (bmi <= 30 ) {
    return "Overweight"
  } else {
    return "Obese"
  }
}

// refactor:
function bmi(weight, height) {
  let bmi = weight/(height**2) 
  bmi <= 18.5 ? "Underweight" :
  bmi <= 25 ? "Normal" :
  bmi <= 30 ? "Overweight" : "Obese";
}


// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(bmi(80, 1.80), "Normal");
//   });
// });