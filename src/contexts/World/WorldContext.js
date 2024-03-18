import { faker } from '@faker-js/faker';

export class World {
  constructor(num) {
    this.cities = [];
    this.createCities(num);
  }

  add_city(cityName) {
    if(cityName === ''){
      for(let i = 0; i < 10; i++) {
        this.cities.push({city: faker.location.city(), citizens: this.generateCitizens()});
      }
    } else{
      this.cities.push({city: cityName, citizens: this.generateCitizens()});
    }
  }

  createCities(num) {
    for(let i = 0; i < num; i++) {
      this.cities.push({city: faker.location.city(), citizens: this.generateCitizens()});
    }
  }

  generateAge() {
    const minAge = 9;
    const maxAge = 87;
    const age = Math.floor(Math.random() *  (maxAge - minAge + 1)) + minAge;
    
    return  age;
  }

  generateCitizens() {
    let citizens = [];
    for(let i = 0; i < 50; i++) {
      const fullName = faker.person.fullName();
      const gender = faker.person.sex(); // Returns a random sex. Not Returns a random gender.
      const citizenAge = this.generateAge();
      citizens.push({fullName: fullName, gender: gender, age: citizenAge});
    }
    return citizens;
  }

  random_city() {
    if (this.cities.length === 0) return "No cities available.";
    const randomIndex = Math.floor(Math.random() * this.cities.length);
    return this.cities[randomIndex];
  }

  total_cities() {
    return this.cities.length;
  }
}

export class City extends World {
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
    this.cities.push({city: name, citizens: this.generateCitizens()});
  }

  add_citizen(name, age) {
    this.citizens.push({name: name, age: age});
  }

  all_citizen() {
    const allCitizen = this.cities.map(citizensData => citizensData.citizens);
    allCitizen.map(citizen => this.citizens.push(...citizen));
  }
}

export class Citizen extends City {
  constructor(name) {
    super(name);
    this.getInfo(name);
  }
  getInfo(name) {
    return this.cities.push({name: name, age: this.generateAge()});
  }
}


// const dhaka = new World();
// const a = dhaka.add_city('ABC');
// console.log(dhaka)