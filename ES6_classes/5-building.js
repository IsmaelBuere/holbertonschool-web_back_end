class Building {
    constructor(sqft) {
        this._validateNumber(sqft, 'Square feet');

        this._sqft = sqft;

        if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
            throw new Error('Class extending Building must override evacuationWarningMessage');
        }
    }

    get sqft() {
        return this._sqft;
    }

    _validateNumber(value, attributeName) {
        if (typeof value !== 'number') {
            throw new TypeError(`${attributeName} must be a number`);
        }
    }
}

export default Building;
