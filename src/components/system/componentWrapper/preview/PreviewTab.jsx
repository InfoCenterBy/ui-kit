import CopyComponent from '../../copyComponent'
import classNames from 'classnames'

const ComponentWrapperPreviewTab = ({
	components,
	category,
	htmlCodes,
	parsedHtml,
	highlightedComponent,
	componentRefs,
}) => {
	return (
		<div className='bg-base-300 px-6 py-3 rounded-lg tab-content'>
			<div className='flex flex-wrap gap-6'>
				{components.map((el, idx) => (
					<CopyComponent
						objToCopy={
							htmlCodes[el.name]
								? parsedHtml(htmlCodes[el.name])
								: el.component
						}
						copyName={'html'}
						key={`preview-${el.name}`}
						id={`${el.name ? category + '-' + el.name : category}`}
						name={el.name}
					>
						<div
							className={classNames(
								'rounded-lg p-2 w-fit duration-300 ease-out border',
								{
									'border-base-content':
										highlightedComponent ===
										el.name,
									'border-transparent':
										highlightedComponent !==
										el.name,
								}
							)}
							tabIndex={-1}
							ref={
								el.name
									? (el) =>
											(componentRefs.current[
												idx
											] = el)
									: null
							}
						>
							{htmlCodes[el.name]
								? parsedHtml(htmlCodes[el.name])
								: el.component}
						</div>
					</CopyComponent>
				))}
			</div>
		</div>
	)
}

export default ComponentWrapperPreviewTab
