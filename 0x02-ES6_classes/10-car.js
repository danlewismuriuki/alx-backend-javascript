const cloneSymbol = Symbol('cloneCar');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(value) {
    if (typeof value === 'string') {
      this._brand = value;
    } else {
      throw new Error('Brand must be a string');
    }
  }

  get motor() {
    return this._motor;
  }

  set motor(value) {
    if (typeof value === 'string') {
      this._motor = value;
    } else {
      throw new Error('Motor must be a string');
    }
  }

  get color() {
    return this._color;
  }

  set color(value) {
    if (typeof value === 'string') {
      this._color = value;
    } else {
      throw new Error('Color must be a string');
    }
  }

  [cloneSymbol]() {
    // Create a new instance of the same class
    return new this.constructor();
  }

  cloneCar() {
    // Create a new blank instance of the class
    const newCar = this[cloneSymbol]();
    // Copy properties to the new instance
    newCar._brand = this._brand;
    newCar._motor = this._motor;
    newCar._color = this._color;
    // Return the new instance
    return newCar;
  }
}