import { Age } from './../src/ageCalculator.js';

describe("Age", function(){

  let birthdate = new Age("January 25 1974");
  let bdaySeconds = birthdate.currentAge() * 60 * 60 * 24 * 365;
  let age = birthdate.currentAge();

  // beforeEach(function() {
  //   let planetAge = birthdate.planetAge(planet);

  it("should convert a birthdate to seconds", function(){
    expect(bdaySeconds).toEqual(1387584000);
  });

  it("should convert a birthdate to a person's age", function(){
    expect(age).toEqual(44);
  });

  it("should return a person's age in Mercury years", function(){
    // planet = "mercury";
    expect(birthdate.planetAge("mercury")).toEqual(183);
  });

  it("should return a person's age in Venus years", function(){
    expect(birthdate.planetAge("venus")).toEqual(70);
  });

    it("should return a person's age in Mars years", function(){
      expect(birthdate.planetAge("mars")).toEqual(23);
  });
    it("should return a person's age in Jupiter years", function(){
      expect(birthdate.planetAge("jupiter")).toEqual(3);
  });

    it("should return a person's life expectancy for Mercury", function() {
      expect(birthdate.averageLifeExpectancy("mercury", 80)).toEqual(150);
  });

    it("should return a person's life expectancy for Venus", function() {
    expect(birthdate.averageLifeExpectancy("venus", 80)).toEqual(59);
  });

    it("should return a person's life expectancy for Mars", function() {
    expect(birthdate.averageLifeExpectancy("mars", 80)).toEqual(19);
  });

    it("should return a person's life expectancy for Jupiter", function() {
    expect(birthdate.averageLifeExpectancy("jupiter", 80)).toEqual(3);
  });

    it("should return the number of years past life expectancy", function() {
      expect(birthdate.pastLifeExpectancy()).toEqual();
    });



});
