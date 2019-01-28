class Authorization {
  constructor(name) {
    this.events = [];
    this.name = name;
  }

  add(event) {
    this.events.push(event);
  }

  show() {
    return this.events.map(event => (event + ''));
  }

  getName() {
    return this.name;
  }
}

export default new Authorization('export auth');
