/*
Description:
There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.

Important
Please look at the examples and clarifications below, to ensure you understand the task correctly :)

Examples
queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12
Clarifications
There is only ONE queue serving many tills, and
The order of the queue NEVER changes, and
The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
N.B. You should assume that all the test input will be valid, as specified above.

P.S. The situation in this kata can be likened to the more-computer-science-related idea of a thread pool, with relation to running multiple processes at the same time: https://en.wikipedia.org/wiki/Thread_pool
*/

function queueTime(customers, n) {
  let queues = {}
  for(let i = 1; i <= n; i++) {
    queues[i] = 0;
  }
  for(let i = 0; i < customers.length; i++) {
    let sortedTimes = Object.values(queues).sort((a, b) => a - b)
    let shortestTime = sortedTimes[0]
    let shortestQueue = Object.keys(queues).find(key => queues[key] === shortestTime) 
    queues[shortestQueue] += customers[i]
  }
  let totalTimes = Object.values(queues).sort((a, b) => a - b)
  console.log(totalTimes)
  return totalTimes[totalTimes.length - 1]
}
// populate queues with n tills all starting at 0 seconds
// iterate through customers, adding each customer time to the till with the shortest total. 
// each customer goes to the queue with the shortest total time
// return the total time of the till with the highest time.

// refactor:

function queueTime(customers, n) {
  var w = new Array(n).fill(0);
  for (let t of customers) {
    let idx = w.indexOf(Math.min(...w));
    w[idx] += t;
  }
  return Math.max(...w);
}

// OR

function queueTime(customers, n) {
  let tills = Array(n).fill(0);
  
  customers.forEach((customer) => {
    let nextTill = tills.indexOf(Math.min(...tills))
    tills[nextTill] += customer;
  });

  return Math.max(...tills);
}


// Tests:
/* 
const { assert } = require('chai');

describe("Sample tests", function() {
  
  it("Simple tests", () => {
    assert.strictEqual(queueTime([], 1), 0);
    assert.strictEqual(queueTime([1,2,3,4], 1), 10);
    assert.strictEqual(queueTime([2,2,3,3,4,4], 2), 9);
    assert.strictEqual(queueTime([1,2,3,4,5], 100), 5);
  });

  it("Examples", () => {
    assert.strictEqual(queueTime([5,3,4],    1), 12);
    assert.strictEqual(queueTime([10,2,3,3], 2), 10);
    assert.strictEqual(queueTime([2,3,10,2], 2), 12);
  });
*/
