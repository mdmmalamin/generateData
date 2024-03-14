const City = require('./City');

class Citizen extends City {
  constructor(name) {
    super(name);
    this.getInfo(name);
  }
  getInfo(name) {
    return this.cities.push({name: name, age: this.generateAge()});
  }
}

module.exports = Citizen;