import capitalize from './capitalize';

test('first letter capitalized', () => {
	expect(capitalize('diego')).toBe('Diego');
});

test('works with empty strings', () => {
	expect(capitalize('')).toBeFalsy();
});

test('normalizes case', () => {
	expect(capitalize('hEllO, My NaME iS DIEGO')).toEqual('Hello, my name is diego');
});
