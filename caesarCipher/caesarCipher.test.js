import caesarCipher from './caesarCipher';

test('ciphers lowercase', () => {
	expect(caesarCipher('hello', 5)).toBe('mjqqt');
});

test('keeps same case', () => {
	expect(caesarCipher('Hello', 5)).toBe('Mjqqt');
});
test('keeps punctuation', () => {
	expect(caesarCipher('Hello!?', 5)).toBe('Mjqqt!?');
});
test('keeps numbers', () => {
	expect(caesarCipher('Hello 123', 5)).toBe('Mjqqt 123');
});
