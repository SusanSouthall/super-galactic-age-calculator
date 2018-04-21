class Age {
  constructor(birthdate) {
    this.birthdate = new Date(birthdate);
  
  }

  birthdateToSeconds() {
    let todaysDate = new Date();
    let seconds = Math.round(todaysDate - this.birthdate);
    return seconds;
  }
  // current age in seconds
  currentAge() {
    // const minutes = 1000 * 60;
    // const hours = minutes * 60;
    // const days = hours * 24;
    // const years = days * 365; // milliseconds in a year
    let todaysDate = new Date();
    let age = todaysDate.getFullYear() - this.birthdate.getFullYear();
    return this.age = age;
  }
}
export {Age};
