import { Layout } from '@/components/layout/layout.component'
import { ROUTES } from './router.data'
import { NotFound } from '@/components/screens/not-found/not-found.component'

export class Router {
	#routes
	#currentRoute
	#layout = null

	constructor() {
		//listener fo rerender screen when pressed buttons in browser to back or to front
		window.addEventListener('popstate', () => {
			this.#handleRouteChange()
		})

		this.#routes = ROUTES
		this.#currentRoute = null

		//start
		this.#handleRouteChange()
		this.#handleLinks()
	}
	//get path from urlPath
	getCurrentPath() {
		return window.location.pathname
	}
	//check routes
	#handleRouteChange() {
		const path = this.getCurrentPath() || '/'
		let route = this.#routes.find(route => route.path === path)

		if (!route) {
			route = {
				component: NotFound
			}
		}

		this.#currentRoute = route
		this.render()
	}

	//links navigation
	#handleLinks() {
		document.addEventListener('click', event => {
			const target = event.target.closest('a')

			if (target) {
				event.preventDefault()
				this.navigate(target.href)
			}
		})
	}

	//navigation check path and push new layout screen
	navigate(path) {
		if (path !== this.getCurrentPath()) {
			window.history.pushState({}, '', path)
			this.#handleRouteChange()
		}
	}

	render() {
		//executing instance of class-component
		const component = new this.#currentRoute.component()

		if (!this.#layout) {
			this.#layout = new Layout({
				route: this,
				children: component.render()
			})
			document.getElementById('app').innerHTML = this.#layout.render()
		} else {
			document.querySelector('main').innerHTML = component.render()
		}
	}
}
