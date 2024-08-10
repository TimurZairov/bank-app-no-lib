import { BaseScreen } from '@/components/component/base-screen/base-screen.component'

export class Home extends BaseScreen {
	constructor() {
		super({ title: 'Home' })
	}
	render() {
		return `<div>Home</div>`
	}
}
