import reverseString from './reverseString';

test('accept empty strings', () => {
	expect(reverseString('')).not.toBeTruthy();
});

test('reverses normal string', () => {
	expect(reverseString('stressed')).toBe('desserts');
});

test('keeps same case', () => {
	expect(reverseString('diApER')).toBe('REpAid');
});
