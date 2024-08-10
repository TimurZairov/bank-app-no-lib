import ChildComponent from '../component/base-screen/child.component'

class RenderService {
	/**
	 * @param {string} html
	 * @param {Array} components
	 * @param {Object} [styles]
	 * @returns {HTMLElement}
	 */

	//htmlToElement
	htmlToElement(html, components = [], styles) {
		const template = document.createElement('template')

		template.innerHTML = html.trim()
		//get first child element
		const element = template.content.firstChild

		//
		this.#replaceComponentTags(element, components)

		return element
	}

	/**
	 * @param {HTMLElement} parentElement
	 * @param {Array} components
	 */
	//replace component Tags
	#replaceComponentTags(parentElement, components) {
		const componentTagPattern = /^component-/
		//get all tag from html element
		const allElements = parentElement.getElementsByTagName('*')
		//check tags to custom tags which is started from component-
		for (const element of allElements) {
			const elementTagName = element.tagName.toLowerCase()

			if (componentTagPattern.test(elementTagName)) {
				const componentName = element.tagName
					.toLowerCase()
					.replace(componentTagPattern, '')
					.replace(/-/g, '')

				const foundComponent = components.find(Component => {
					const instance =
						Component instanceof ChildComponent ? Component : new Component()

					return instance.constructor.name.toLowerCase() === componentName
				})
				if (!foundComponent) {
					console.error(
						`Component ${componentName} component not found in provided array`
					)
				}

				const componentContent =
					foundComponent instanceof ChildComponent
						? foundComponent.render()
						: new foundComponent.render()

				element.replaceWith(componentContent)
			}

			//
		}
	}
}

export default new RenderService()
