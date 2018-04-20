class Age {
  constructor(year, month, day) {
    this.birthdate = new Date(year, month, day);
  }

  currentAge() {
    const minutes = 1000 * 60;
    const hours = minutes * 60;
    const days = hours * 24;
    const years = days * 365;
    let age = Math.floor((Date.now() - this.birthdate.getTime())/years);
    return age;
  }
  birthdateToSeconds() {
    let seconds = Math.floor(Date.now() - this.birthdate.getTime())/1000;
    return seconds;
  }

}
export {Age};
