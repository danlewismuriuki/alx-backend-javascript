import Car from './10-car';

const cloneSymbol = Symbol('cloneCar');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  set range(value) {
    if (typeof value === 'string') {
      this._range = value;
    } else {
      throw new Error('Range must be a string');
    }
  }

  // Override cloneCar method to return a Car instance
  [cloneSymbol]() {
    // Create a new instance of Car instead of EVCar
    return new Car(this._brand, this._motor, this._color);
  }

  cloneCar() {
    // Create a new Car instance using the cloneSymbol method
    const newCar = this[cloneSymbol]();
    return newCar;
  }
}
