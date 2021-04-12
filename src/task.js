export default class Task {
  constructor(desc, date) {
    this.desc = desc;
    this.date = date ? date : "No date";
  }

  getDesc() {
    return this.desc
  }

  date() {
    return this.date;
  }
}