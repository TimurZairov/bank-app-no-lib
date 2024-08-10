export class BaseScreen {
	#defaultTitle = 'Bank SPA app'

	/**
	 * Create a new BaseScreen instance.
	 * @param {Object} options - The options for the BaseScreen.
	 * @param {string} options.title - The title for the screen.
	 */

	constructor({ title }) {
		document.title = title
			? `${this.#defaultTitle} | ${title}`
			: this.#defaultTitle
	}

	/**
	 * Render the child component content.
	 * @returns {HTMLElement}
	 */

	render() {
		throw new Error('Render method must be implemented in the child class')
	}
}
