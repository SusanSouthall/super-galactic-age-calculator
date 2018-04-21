import { Age } from './../src/ageCalculator.js';

describe("Age", function(){

  let birthdate = new Age("January 25 1974");
  let bdaySeconds = birthdate.currentAge() * 1000 * 60 * 60 * 24 * 365;
  let age = birthdate.currentAge();

  it("should convert a birthdate to seconds", function(){
    expect(bdaySeconds).toEqual(1387584000000);
  });

  it("should convert a birthdate to a person's age", function(){
    expect(age).toEqual(44);
  });





  // let years = 1000 * 60 * 60 * 24 * 365;
  // let birthdateToSeconds = Math.floor(((2018-1974) * years)/1000);
  // it ("should convert age to seconds", function(){
  // expect(birthdateToSeconds).toEqual(1387584000);
});

// });
