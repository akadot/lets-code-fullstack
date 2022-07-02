export class LoremIpsumService {
	#database: string[] = [];
	constructor() {
		this.#database = ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "pellentesque", "ullamcorper", "nisl", "at", "mi", "mollis", "lacinia", "sed", "rhoncus", "vitae", "porttitor", "a", "efficitur", "felis", "venenatis", "quisque", "placerat", "enim", "ut", "tellus", "suscipit", "praesent", "eget", "diam", "cursus", "tempor", "nibh", "laoreet", "in", "euismod", "imperdiet", "mattis", "cras", "ultricies", "dui", "metus", "tristique", "faucibus", "lacus", "ligula", "blandit", "nunc", "et", "congue", "consequat", "leo", "nullam", "fringilla", "pharetra", "maecenas", "nulla", "pulvinar", "vel", "non", "proin", "interdum", "eros", "sodales", "quis", "ac", "justo", "bibendum", "varius", "dapibus", "condimentum", "ultrices", "rutrum", "suspendisse", "potenti", "aliquam", "vestibulum", "sem", "lobortis", "odio", "donec", "ante", "arcu", "ex", "magna", "nam", "est", "maximus", "facilisi", "scelerisque", "gravida", "mauris", "neque", "molestie", "duis", "eu", "finibus", "dignissim", "auctor"];
	}

	getLoremIpsum = (qtdPalavras: number) => {
		let randomize = this.#database.sort(() => Math.random() - 0.5);
		let words = randomize.slice(0, qtdPalavras);
		let phrase = words.join(" ") + ".";
		let firstLetter = phrase.charAt(0).toUpperCase();

		let res = firstLetter + phrase.slice(1);

		return res;
	}
}