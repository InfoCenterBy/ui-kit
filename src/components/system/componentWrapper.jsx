import { useState } from 'react'
import CopyComponent from './copyComponent'
import PreviewHtmlComponent from './previewHtmlComponent'
import HTMLReactParser from 'html-react-parser'

const ComponentWrapper = ({ children, components, category }) => {
	const [htmlCodes, setHtmlCodes] = useState({})

	// console.log('category', category)

	let parsedHtml = (code) => {
		return HTMLReactParser(code)
	}

	const updateHtmlCode = (componentName, newHtml) => {
		setHtmlCodes((prev) => ({
			...prev,
			[componentName]: newHtml,
		}))
	}

	const tabStyle =
		'[--tab-border-color:black] dark:[--tab-border-color:transparent] text-black dark:text-white dark:[--tab-bg:#191e24] [--tab-bg:transparent] after:text-black dark:after:text-white dark:hover:text-white hover:text-gray-800'

	const tabContentStyle =
		'bg-gray-100 dark:bg-base-200 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg tab-content'

	return (
		<div className='p-2 border border-gray-600 dark:border-gray-100 rounded-lg'>
			<h4 className='h-4 font-semibold text-black dark:text-white'>
				{category}
			</h4>
			<div className='mt-2 tabs-border tabs'>
				{/* Preview Tab */}
				<input
					type='radio'
					name='code_tab'
					className={`${tabStyle} tab`}
					aria-label='preview'
				/>
				<div className={`${tabContentStyle}`}>
					{components.map((el) => (
						<CopyComponent
							objToCopy={
								htmlCodes[el.name]
									? parsedHtml(htmlCodes[el.name])
									: el.component
							}
							copyName={'html'}
							key={`preview-${el.name}`}
							id={`${category + '-' + el.name}`}
						>
							{htmlCodes[el.name]
								? parsedHtml(htmlCodes[el.name])
								: el.component}
						</CopyComponent>
					))}
				</div>

				{/* HTML Tab */}
				<input
					type='radio'
					name='code_tab'
					className={`${tabStyle} tab`}
					aria-label='html'
				/>
				<div className={`${tabContentStyle}`}>
					{components.map((el) => (
						<CopyComponent
							objToCopy={
								htmlCodes[el.name]
									? parsedHtml(htmlCodes[el.name])
									: el.component
							}
							copyName={'html'}
							key={`html-${el.name}`}
						>
							<PreviewHtmlComponent
								htmlCode={htmlCodes[el.name]}
								setHtmlCode={(newHtml) =>
									updateHtmlCode(el.name, newHtml)
								}
							>
								{el.component}
							</PreviewHtmlComponent>
						</CopyComponent>
					))}
				</div>

				{/* JSX Tab */}
				<input
					type='radio'
					name='code_tab'
					className={`${tabStyle} tab`}
					aria-label='jsx'
				/>
				<div className={`${tabContentStyle}`}>
					<CopyComponent objToCopy={children} copyName={'jsx'}>
						<span className='text-black dark:text-white'>
							jsx
						</span>
					</CopyComponent>
				</div>
			</div>
		</div>
	)
}

export default ComponentWrapper
