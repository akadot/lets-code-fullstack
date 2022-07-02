const splitAndOrder = (sentence) => {
	const words = sentence.split(";");
	const ordered = words.sort();
	const newArr = ordered.join(";");
	return newArr;
}

module.exports = { splitAndOrder }