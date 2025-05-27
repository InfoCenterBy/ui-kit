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
		'[--tab-border-color:black] dark:[--tab-border-color:transparent] text-black dark:text-white dark:[--tab-bg:#191e24] [--tab-bg:transparent] after:text-black dark:after:text-white'
	return (
		<>
			<div className='tabs tabs-lift'>
				<input
					type='radio'
					name='code_tab'
					className={`${tabStyle} tab`}
					aria-label='preview'
					defaultChecked
				/>
				<div className='bg-base-200 px-4 py-2 border-base-300 tab-content'>
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
				<div className='bg-base-200 px-4 py-2 border-base-300 tab-content'>
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
				<div className='bg-base-200 px-4 py-2 border-base-300 tab-content'>
					<CopyComponent objToCopy={children} copyName={'jsx'}>
						jsx
					</CopyComponent>
				</div>
			</div>
		</>
	)
}

export default ComponentWrapper
