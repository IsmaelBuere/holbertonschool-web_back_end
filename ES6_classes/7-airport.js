class Airport {
    constructor(name, code) {
        this._validateString(name, 'Name');
        this._validateString(code, 'Code');

        this._name = name;
        this._code = code;
    }

    get name() {
        return this._name;
    }

    get code() {
        return this._code;
    }

    toString() {
        return `[object ${this._code}]`;
    }

    _validateString(value, attributeName) {
        if (typeof value !== 'string') {
            throw new TypeError(`${attributeName} must be a string`);
        }
    }
}

export default Airport;
