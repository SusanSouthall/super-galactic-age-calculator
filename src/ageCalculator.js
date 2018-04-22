class Age {
  constructor(birthdate) {
    this.birthdate = new Date(birthdate);
    this.age;
    this.lifespan;

  }
  // current age in seconds
  birthdateToSeconds() {
    let todaysDate = new Date();
    let seconds = Math.round(todaysDate - this.birthdate);
    return seconds;
  }
  currentAge() {
    let todaysDate = new Date();
    let age = todaysDate.getFullYear() - this.birthdate.getFullYear();
    return age;
  }

  planetAge(planet) {
    this.age = this.currentAge();
    let earthYears;

    if (planet === "earth") {
      earthYears = Math.floor(this.age);
    }else if (planet === "mercury") {
      earthYears = Math.floor(this.age/.24);
    }else if (planet === "venus") {
      earthYears = Math.floor(this.age/.62);
    }else if (planet === "mars") {
      earthYears = Math.floor(this.age/1.88);
    }else if (planet === "jupiter") {
      earthYears = Math.floor(this.age/11.86);
    }return earthYears;
  }

  averageLifeExpectancy(planet, maxAge) {
    this.age = this.planetAge(planet);
    let lifeExpectancy;

    if (planet === "earth") {
      lifeExpectancy = Math.floor(maxAge - this.age);
    }else if (planet === "mercury") {
      lifeExpectancy = Math.floor((maxAge/.24) - this.age);
    }else if (planet === "venus") {
      lifeExpectancy = Math.floor((maxAge/.62) - this.age);
    }else if (planet === "mars") {
      lifeExpectancy = Math.floor((maxAge/1.88) - this.age);
    }else if (planet === "jupiter") {
      lifeExpectancy = Math.floor((maxAge/11.86) - this.age);
    }return lifeExpectancy;
  }

  pastLifeExpectancy(planet, age) {
    // let earth = this.currentAge();
    this.lifespan = this.averageLifeExpectancy(planet, age);
    if(this.lifespan <= 0) {
      return true;
    }else {
      return false;
    }
  }

}
export {Age};
