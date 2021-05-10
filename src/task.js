// handles everything related to tasks
export default class Task {
  constructor(desc, date) {
    this.desc = desc;
    this.isCompleted = false;
    if (date) {
      const formattedDate = date.split("-");
      this.date = `${formattedDate[1]}-${formattedDate[2]}-${formattedDate[0]}`;
    } else {
      this.date = "No date";
    }
  }

  getDesc() {
    return this.desc;
  }

  date() {
    return this.date;
  }
}
