/*
Description:
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/

function disemvowel(str) {
  let stringChars = str.split("")
  return stringChars.filter(isConsonant).join("")
}

function isConsonant(str) {
  if(
    str.toLowerCase() === 'a' || 
    str.toLowerCase() === 'e' || 
    str.toLowerCase() === 'i' || 
    str.toLowerCase() === 'o' || 
    str.toLowerCase() === 'u'
  ) {
    return false;
  } else {
    return true;
  }
}

// refactor:

const vowels = 'aeiou';

function disemvowel(str) {
  return str
    .split('')
    .filter(letter => !vowels.includes(letter.toLowerCase()))
    .join('');
}


// Tests:
/* 
const chai = require('chai'), { assert } = chai;
chai.config.truncateThreshold;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
    assert.strictEqual(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
    assert.strictEqual(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")
    })
  })
*/
