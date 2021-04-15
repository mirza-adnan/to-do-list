export default class Task {
  constructor(desc, date) {
    this.desc = desc;
    this.isCompleted = false;
    if (date) {
      date = date.split('-');
      this.date = `${date[1]}-${date[2]}-${date[0]}`;
    } else {
      this.date = 'No date';
    }
  }

  getDesc() {
    return this.desc;
  }

  date() {
    return this.date;
  }
}
