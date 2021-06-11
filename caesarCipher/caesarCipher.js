/* eslint-disable prefer-const */
function getCasedCode(code = 0, shift = 5) {
	let baseCode = 0;
	if (code >= 65 && code <= 90) {
		baseCode = 65;
	} else if (code >= 97 && code <= 122) {
		baseCode = 97;
	} else {
		return code;
	}

	const shiftAmount = (code + shift - baseCode) % 26;
	const newLetter = baseCode + shiftAmount;
	return newLetter;
}

function caesarCipher(str = 'hello', shift = 0) {
	const cipheredCodes = [];
	for (let char of str.split('')) {
		const code = char.charCodeAt(0);
		cipheredCodes.push(getCasedCode(code, shift));
	}

	return String.fromCharCode(...cipheredCodes);
}

export default caesarCipher;
