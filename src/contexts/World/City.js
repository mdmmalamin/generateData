/* eslint-disable no-undef */
const World = require('./World');

class City extends World {
  constructor(name) {
    super();
    this.citizens = [];
    this.name = name;
    this.add_city(name);
  }

  add_city(name) {
    if(name === undefined){
      return this.cities.push({city: this.generateAnyName(), citizens: this.generateCitizens()});
    }
    this.cities.push({city: this.name, citizens: this.generateCitizens()});
  }

  add_citizen(name, age) {
    this.citizens.push({name: name, age: age});
  }

  all_citizen() {
    const allCitizen = this.cities.map(citizensData => citizensData.citizens);
    allCitizen.map(citizen => this.citizens.push(...citizen));
  }
}

module.exports = City;