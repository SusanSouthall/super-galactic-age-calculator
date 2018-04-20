import { Age } from './../src/ageCalculator.js';

describe("Age", function(){

  let years = 1000 * 60 * 60 * 24 * 365;
  let birthdateToSeconds = Math.floor(((2018-1974) * years)/1000);

  it ("should convert age to seconds", function(){
  expect(birthdateToSeconds).toEqual(1387584000);
  });
});


// 1387584000000
