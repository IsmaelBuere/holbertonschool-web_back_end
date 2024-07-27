import Building from './5-building.js';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._validateNumber(floors, 'Floors');
    this._floors = floors;
  }

  get sqft() {
    return this._sqft;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }

  _validateNumber(value, attributeName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attributeName} must be a number`);
    }
  }
}

export default SkyHighBuilding;
