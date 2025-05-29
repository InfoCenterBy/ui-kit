import { useState } from 'react'
import CopyComponent from './copyComponent'
import PreviewHtmlComponent from './previewHtmlComponent'
import HTMLReactParser from 'html-react-parser'

const ComponentWrapper = ({ children }) => {
	const [htmlCode, setHtmlCode] = useState()

	let parsedHtml = (code) => {
		return HTMLReactParser(code)
	}

	const tabStyle =
		'[--tab-border-color:black] dark:[--tab-border-color:transparent] text-black dark:text-white dark:[--tab-bg:#191e24] [--tab-bg:transparent] after:text-black dark:after:text-white dark:hover:text-white hover:text-gray-800'

	const tabContentStyle =
		'bg-gray-100 dark:bg-base-200 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg tab-content'

	return (
		<>
			<div className='tabs-border tabs'>
				<input
					type='radio'
					name='code_tab'
					className={`${tabStyle} tab`}
					aria-label='preview'
					defaultChecked
				/>
				<div className={`${tabContentStyle}`}>
					<CopyComponent
						objToCopy={
							htmlCode ? parsedHtml(htmlCode) : children
						}
						copyName={'html'}
					>
						{htmlCode ? parsedHtml(htmlCode) : children}
					</CopyComponent>
				</div>

				<input
					type='radio'
					name='code_tab'
					className={`${tabStyle} tab`}
					aria-label='html'
				/>
				<div className={`${tabContentStyle}`}>
					<CopyComponent objToCopy={children} copyName={'html'}>
						<PreviewHtmlComponent
							htmlCode={htmlCode}
							setHtmlCode={setHtmlCode}
						>
							{children}
						</PreviewHtmlComponent>
					</CopyComponent>
				</div>

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
		</>
	)
}

export default ComponentWrapper
