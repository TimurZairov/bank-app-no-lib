import { BaseScreen } from '@/core/component/base-screen/base-screen.component'
import renderServices from '@/core/services/render.services'
import template from './home.template.html'
export class Home extends BaseScreen {
	constructor() {
		super({ title: 'Home' })
	}
	render() {
		const element = renderServices.htmlToElement(template)

		console.log(element)
		return `<div>Home</div>`
	}
}
