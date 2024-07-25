export default class Currency {
  constructor(code, name) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = value;
    }
  }

  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('code must be a string');
    } else {
      this._name = value;
    }
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
