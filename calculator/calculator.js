const calculator = {
	add(a, b) {
		if (typeof a !== 'number' || typeof b !== 'number') {
			return 'PLEASE NUMBERS ONLY.';
		}

		return parseInt(a, 10) + parseInt(b, 10);
	},
	subtract(a, b) {
		if (typeof a !== 'number' || typeof b !== 'number') {
			return 'PLEASE NUMBERS ONLY.';
		}

		return a - b;
	},
	divide(a, b) {
		if (typeof a !== 'number' || typeof b !== 'number') {
			return 'PLEASE NUMBERS ONLY.';
		}

		return a / b;
	},
	multiply(a, b) {
		if (typeof a !== 'number' || typeof b !== 'number') {
			return 'PLEASE NUMBERS ONLY.';
		}

		return a * b;
	}
};

export default calculator;
