import calculator from './calculator';

test('addition works', () => {
	expect(calculator.add(4, 3)).toBe(7);
});
test('multiplication works', () => {
	expect(calculator.multiply(2, 2)).toBe(4);
});
test('division works', () => {
	expect(calculator.divide(6, 3)).toBe(2);
});
test('subtraction works', () => {
	expect(calculator.subtract(10, 4)).toBe(6);
});
test('error string when not a number', () => {
	expect(calculator.subtract('A', 4)).toBe('PLEASE NUMBERS ONLY.');
});
