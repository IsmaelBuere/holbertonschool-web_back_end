import Currency from './3-currency.js';

class Pricing {
  constructor(amount, currency) {
    this._validateNumber(amount, 'Amount');
    this._validateCurrency(currency, 'Currency');

    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._validateNumber(value, 'Amount');
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._validateCurrency(value, 'Currency');
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Both amount and conversionRate must be numbers');
    }
    return amount * conversionRate;
  }

  _validateNumber(value, attributeName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attributeName} must be a number`);
    }
  }

  _validateCurrency(value, attributeName) {
    if (!(value instanceof Currency)) {
      throw new TypeError(`${attributeName} must be an instance of Currency`);
    }
  }
}

export default Pricing;
