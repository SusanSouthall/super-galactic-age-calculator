class Age {
  constructor(birthdate) {
    this.birthdate = new Date(birthdate);
    this.age;

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
    // let planetAge = Math.floor(this.age/earthYears);

    if (planet === "mercury") {
      earthYears = Math.floor(this.age/.24);
    }else if (planet === "venus") {
      earthYears = Math.floor(this.age/.62);
    }else if (planet === "mars") {
      earthYears = Math.floor(this.age/1.88);
    }return earthYears;
    // }else if (planet === "jupiter") {
    //   earthYears = Math.floor(this.age/11.86);
  }

    // if (planet === "mercury") {
    //   earthYears = .24;
    // }else if (planet === "venus") {
    //   earthYears = .62;
    // }else if (planet === "mars") {
    //   earthYears = 1.88;
    // }else if (planet === "jupiter") {
    //   earthYears = 11.86;
     // }


}
export {Age};
