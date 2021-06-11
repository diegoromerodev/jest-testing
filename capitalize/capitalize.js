function capitalize(str) {
	if (!str) {
		return '';
	}

	const normalized = str.toLowerCase();
	return normalized[0].toUpperCase() + normalized.slice(1);
}

export default capitalize;
