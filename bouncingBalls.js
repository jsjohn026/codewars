/*
Description:
A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.

He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing)?

Three conditions must be met for a valid experiment:
Float parameter "h" in meters must be greater than 0
Float parameter "bounce" must be greater than 0 and less than 1
Float parameter "window" must be less than h.
If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

Note:
The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

Examples:
- h = 3, bounce = 0.66, window = 1.5, result is 3

- h = 3, bounce = 1, window = 1.5, result is -1 

(Condition 2) not fulfilled).
*/

function bouncingBall(h,  bounce,  window) {
  if((h > 0) && (1 > bounce) && (bounce > 0) && (window < h)){
    return numberOfVisibleBounces(h, bounce, window)
  } else {
    return -1
  }
}

function numberOfVisibleBounces(h, bounce, window) {
  let bounces = 1;
  while (h > window){
    if((h * bounce) > window){
      bounces +=2
    }
    h = bounce * h
  }
  return bounces
}

// refactor:
// h = -1.0 bounce = 0.66 window = -1.5
function bouncingBall(h,  bounce,  window) {
  var rebounds = -1;
  if (bounce > 0 && bounce < 1) while (h > window) rebounds+=2, h *= bounce;
  return rebounds;
}
// Not sure if this refactor works in all edge cases. E.g. - negative h or window value passed in?


// Tests:
/* 
const assert = require('chai').assert;

describe("Sample tests", () => {
  it ('h = 3.0, bounce = 0.66, window = 1.5', () => {
    assert.strictEqual(bouncingBall(3.0, 0.66, 1.5), 3);
  });
    
  it ('h = 30.0, bounce = 0.66, window = 1.5', () => {
    assert.strictEqual(bouncingBall(30.0, 0.66, 1.5), 15);
  });
  
  it ('h = 3.0, bounce = 1.0, window = 1.5', () => {
    assert.strictEqual(bouncingBall(3.0, 1.0, 1.5), -1);
  });
});
    
*/
