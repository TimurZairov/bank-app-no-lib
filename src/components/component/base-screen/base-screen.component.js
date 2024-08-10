export class BaseScreen {
	#defaultTitle = 'Bank SPA app'
	constructor({ title }) {
		document.title = title
			? `${this.#defaultTitle} | ${title}`
			: this.#defaultTitle
	}

	render() {}
}
