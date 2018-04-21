class Age {
  constructor(birthdate) {
    this.birthdate = new Date(birthdate);

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
    return this.age = age;
  }
}
export {Age};
