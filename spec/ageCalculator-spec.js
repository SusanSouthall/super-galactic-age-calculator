import { Age } from './../src/ageCalculator.js';

describe("Age", function(){

  let birthdate = new Age("January 25 1974");
  let bdaySeconds = birthdate.currentAge() * 1000 * 60 * 60 * 24 * 365;
  let age = birthdate.currentAge();

  // beforeEach(function() {
  //   let planetAge = birthdate.planetAge(planet);

  it("should convert a birthdate to seconds", function(){
    expect(bdaySeconds).toEqual(1387584000000);
  });

  it("should convert a birthdate to a person's age", function(){
    expect(age).toEqual(44);
  });

  it("should return a person's age in Mercury years", function(){
    // planet = "mercury";
    expect(birthdate.planetAge("mercury")).toEqual(183);
  });

  it("should return a person's age in Venusian years", function(){
    expect(birthdate.planetAge("venus")).toEqual(70);
  });

    it("should return a person's age in Mars years", function(){
      expect(birthdate.planetAge("mars")).toEqual(23);
  });

});
