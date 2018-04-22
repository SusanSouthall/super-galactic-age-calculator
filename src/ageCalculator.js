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

  mercury() {
    this.age = this.currentAge();
    let mercuryAge = Math.floor(this.age/.24);
    return mercuryAge;
  }
  
}
export {Age};
