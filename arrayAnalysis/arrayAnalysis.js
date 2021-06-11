function arrayAnalysis(arr = []) {
	let average = 0;
	let min = arr[0];
	let max = arr[0];
	let total = 0;
	const {length} = arr;
	for (let i = 0; i < arr.length; i++) {
		if (isNaN(Number(arr[i]))) {
			return 'NUMBERS ONLY PLEASE.';
		}

		if (arr[i] > max) {
			max = Number(arr[i]);
		}

		if (arr[i] < min) {
			min = Number(arr[i]);
		}

		total += Number(arr[i]);
	}

	average = total / length;
	return {average, min, max, length};
}

export default arrayAnalysis;
