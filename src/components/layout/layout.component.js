export class Layout {
	#route
	#children

	constructor({ route, children }) {
		this.#route = route
		this.#children = children
	}

	render() {
		const headerHtml = `
            <header>Layout header</header>
            <div>
                <a href='/'>Home</a>
            </div>
            <div>
                 <a href='/about-us'>Auth</a>
            </div>
        `

		return `
            ${headerHtml}
            <main>${this.#children}</main>
        `
	}
}
