import arrayAnalysis from './arrayAnalysis';

test('returns the highest number', () => {
	const analysis = arrayAnalysis([25, 29, 25, 100, 26]);
	expect(analysis.max).toBe(100);
});

test('returns the lowest number', () => {
	const analysis = arrayAnalysis([250, 29, 2, 10, 26]);
	expect(analysis.min).toBe(2);
});

test('returns the total average', () => {
	const analysis = arrayAnalysis([10, 5, 6]);
	expect(analysis.average).toBe(7);
});

test('returns the total length', () => {
	const analysis = arrayAnalysis([10, 5, 6, 2, 4, 2]);
	expect(analysis.length).toBe(6);
});

test('error string on nan elements', () => {
	const analysis = arrayAnalysis([10, 'NOT A NUMBER', 5, 6, 2, 4, 2]);
	expect(analysis).toBe('NUMBERS ONLY PLEASE.');
});
