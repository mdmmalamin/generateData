import {
  faker
} from '@faker-js/faker';

export class World {
  constructor(num) {
    this.cities = [];
    this.createCities(num);
  }

  add_city(cityName) {
    if (cityName === '') {
      for (let i = 0; i < 10; i++) {
        this.cities.push({
          city: faker.location.city(),
          citizens: this.generateCitizens()
        });
      }
    } else {
      this.cities.push({
        city: cityName,
        citizens: this.generateCitizens()
      });
    }
  }

  createCities(num) {
    for (let i = 0; i < num; i++) {
      this.cities.push({
        city: faker.location.city(),
        citizens: this.generateCitizens()
      });
    }
  }

  generateAge() {
    const minAge = 9;
    const maxAge = 87;
    const age = Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;

    return age;
  }

  generateCitizens() {
    let citizens = [];

    for (let i = 0; i < 50; i++) {
      const gender = faker.person.sexType(); // Returns a random sex. Not Returns a random gender.
      const prefix = faker.person.prefix(`${gender === 'female' ? 'female' : 'male'}`);
      const firstName = faker.person.firstName(`${gender === 'female' ? 'female' : 'male'}`);
      const lastName = faker.person.lastName(`${gender === 'female' ? 'female' : 'male'}`);
      const citizenAge = this.generateAge();
      const phone = faker.helpers.fromRegExp('+[8]{2}0-[1][3-9]{3}-[0-9]{6}');
      const src = faker.image.avatarLegacy();
      citizens.push({
        prefix: prefix,
        fullName: firstName,
        lastName: lastName,
        age: citizenAge,
        gender: gender,
        phone: phone,
        src: src
      });
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
    this.new(name);
  }

  new_city(name) {
    if (name === '') {
      return this.cities.push({
        city: faker.location.city(),
        citizens: this.generateCitizens()
      });
    }
    this.cities.push({
      city: name,
      citizens: this.generateCitizens()
    });
  }

  add_citizen(name, age) {
    this.citizens.push({
      name: name,
      age: age
    });
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
    return this.cities.push({
      name: name,
      age: this.generateAge()
    });
  }
}


// const dhaka = new World();
// const a = dhaka.add_city('ABC');
// console.log(dhaka)