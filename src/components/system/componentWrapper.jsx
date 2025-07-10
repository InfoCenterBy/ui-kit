import { useState, useRef, useEffect } from 'react'
import CopyComponent from './copyComponent'
import PreviewHtmlComponent from './previewHtmlComponent'
import HTMLReactParser from 'html-react-parser'
import classNames from 'classnames'

const ComponentWrapper = ({
	// children,
	components,
	category,
	selectedComponent,
	setSelectedComponent,
}) => {
	const [htmlCodes, setHtmlCodes] = useState({})
	const [highlightedComponent, setHighlightedComponent] = useState(null)

	const previewTabRef = useRef(null)
	const htmlTabRef = useRef(null)
	// const jsxTabRef = useRef(null)
	const componentRefs = useRef([])

	useEffect(() => {
		if (
			selectedComponent?.category === category &&
			selectedComponent?.tab === 'preview' &&
			selectedComponent?.name &&
			!selectedComponent?.triggeredByUser //* <--- if user not triggered
		) {
			setHighlightedComponent(selectedComponent.name)
			const timer = setTimeout(() => {
				setHighlightedComponent(null)
			}, 1000)
			return () => clearTimeout(timer)
		}
	}, [selectedComponent, category])

	let parsedHtml = (code) => {
		return HTMLReactParser(code)
	}

	const updateHtmlCode = (componentName, newHtml) => {
		setHtmlCodes((prev) => ({
			...prev,
			[componentName]: newHtml,
		}))
	}

	//* TabStyle
	const tabStyle =
		'[--tab-border-color:black] dark:[--tab-border-color:transparent] text-black dark:text-white dark:[--tab-bg:#191e24] [--tab-bg:transparent] after:text-black dark:after:text-white dark:hover:text-white hover:text-gray-800'

	const tabContentStyle =
		'bg-gray-100 dark:bg-base-200 px-6 py-3 border border-gray-200 dark:border-gray-700 rounded-lg tab-content'
	//* TabStyle
	return (
		<div
			className='p-2 border border-gray-600 dark:border-gray-100 rounded-lg'
			id={`${category}-component`}
		>
			<h4 className='h-4 font-semibold text-black dark:text-white'>
				{category}
			</h4>
			<div className='mt-2 tabs-border tabs'>
				{/* Preview Tab */}
				<input
					type='radio'
					name={`code_tab_${category}`}
					className={classNames(tabStyle, 'tab')}
					aria-label='preview'
					ref={previewTabRef}
					checked={
						selectedComponent?.category === category &&
						selectedComponent?.tab === 'preview'
					}
					onChange={() =>
						setSelectedComponent &&
						setSelectedComponent((prev) => ({
							...prev,
							category,
							tab: 'preview',
							triggeredByUser: true,
						}))
					}
				/>
				<div className={classNames(tabContentStyle)}>
					<div className='flex flex-wrap gap-6'>
						{components.map((el, idx) => (
							<CopyComponent
								objToCopy={
									htmlCodes[el.name]
										? parsedHtml(
												htmlCodes[el.name]
											)
										: el.component
								}
								copyName={'html'}
								key={`preview-${el.name}`}
								id={`${el.name ? category + '-' + el.name : category}`}
								name={el.name}
							>
								<div
									className={classNames(
										'rounded-lg p-2 w-fit duration-300 ease-out border', //* border always exists!
										{
											'border-black dark:border-white':
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
										? parsedHtml(
												htmlCodes[el.name]
											)
										: el.component}
								</div>
							</CopyComponent>
						))}
					</div>
				</div>

				{/* HTML Tab */}
				<input
					type='radio'
					name={`code_tab_${category}`}
					className={classNames(tabStyle, 'tab')}
					aria-label='html'
					ref={htmlTabRef}
					checked={
						selectedComponent?.category === category &&
						selectedComponent?.tab === 'html'
					}
					onChange={() =>
						setSelectedComponent &&
						setSelectedComponent((prev) => ({
							...prev,
							category,
							tab: 'html',
						}))
					}
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
				{/* <input
					type='radio'
					name={`code_tab_${category}`}
					className={`${tabStyle} tab`}
					aria-label='jsx'
					ref={jsxTabRef}
					checked={
						selectedComponent?.category === category &&
						selectedComponent?.tab === 'jsx'
					}
					onChange={() =>
						setSelectedComponent &&
						setSelectedComponent((prev) => ({
							...prev,
							category,
							tab: 'jsx',
						}))
					}
				/>
				<div className={`${tabContentStyle}`}>
					<CopyComponent objToCopy={children} copyName={'jsx'}>
						<span className='text-black dark:text-white'>
							jsx
						</span>
					</CopyComponent>
				</div> */}
			</div>
		</div>
	)
}

export default ComponentWrapper
