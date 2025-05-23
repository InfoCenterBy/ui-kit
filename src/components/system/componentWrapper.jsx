import CopyComponent from './copyComponent'
import PreviewHtmlComponent from './previewHtmlComponent'

const ComponentWrapper = ({ children }) => {
	return (
		<>
			<div className='tabs tabs-lift'>
				<input type='radio' name='code_tab' className='tab' aria-label='preview' defaultChecked />
				<div className='bg-base-100 p-6 border-base-300 tab-content'>
					<CopyComponent objToCopy={children} copyName={'html'}>
						{children}
					</CopyComponent>
				</div>

				<input type='radio' name='code_tab' className='tab' aria-label='html' />
				<div className='bg-base-100 p-6 border-base-300 tab-content'>
					<CopyComponent objToCopy={children} copyName={'html'}>
						<PreviewHtmlComponent>{children}</PreviewHtmlComponent>
					</CopyComponent>
				</div>

				<input type='radio' name='code_tab' className='tab' aria-label='jsx' />
				<div className='bg-base-100 p-6 border-base-300 tab-content'>
					<CopyComponent objToCopy={children} copyName={'jsx'}>
						jsx
					</CopyComponent>
				</div>
			</div>
		</>
	)
}

export default ComponentWrapper
