import { Age } from './../src/ageCalculator.js';

describe("Age", function(){

  let birthdate = new Age("January 25 1974");
  let bdaySeconds = birthdate.currentAge() * 1000 * 60 * 60 * 24 * 365;
  let age = birthdate.currentAge();
  let mercuryAge = birthdate.mercury();

  it("should convert a birthdate to seconds", function(){
    expect(bdaySeconds).toEqual(1387584000000);
  });

  it("should convert a birthdate to a person's age", function(){
    expect(age).toEqual(44);
  });

  it("should return a person's age in Mercury years", function(){
    expect(mercuryAge).toEqual(183);
  });





  // let years = 1000 * 60 * 60 * 24 * 365;
  // let birthdateToSeconds = Math.floor(((2018-1974) * years)/1000);
  // it ("should convert age to seconds", function(){
  // expect(birthdateToSeconds).toEqual(1387584000);
});

// });
