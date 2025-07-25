import CopyComponent from '../../copyComponent'
import PreviewHtmlComponent from '../../previewHtmlComponent'

const ComponentWrapperHtmlTab = ({
	components,
	htmlCodes,
	parsedHtml,
	updateHtmlCode,
}) => {
	return (
		<div className='bg-base-200 px-6 py-3 rounded-lg text-base-content tab-content'>
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
	)
}

export default ComponentWrapperHtmlTab
