export class Layout {
	#route
	#children

	constructor({ router, children }) {
		this.#route = router
		this.#children = children
	}

	render() {
		const headerHtml = `
            <header>Layout header</header>
            <nav>
                <a href='/'>Home</a>
                 <a href='/about-us'>AboutUs</a>
            </nav>
        `

		return `
            ${headerHtml}
            <main>${this.#children}</main>
        `
	}
}
