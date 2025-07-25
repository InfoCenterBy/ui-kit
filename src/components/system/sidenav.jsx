import classNames from 'classnames'
import { HashLink } from 'react-router-hash-link'

const SideNav = ({ className, listItem, changeSelectedComponent }) => {
	const isObject = typeof { listItem } === 'object'
	const LinkStyle = 'hover:bg-base-200 bg-transparent text-base-content'
	const selectedElement = (category, name) => {
		changeSelectedComponent(category, name)
	}
	return (
		<>
			<ul
				className={classNames(
					className,
					'lg:top-2 top-0 sticky bg-base-200 text-base-content rounded-box menu z-10 border border-base-200 p-0 overflow-hidden'
				)}
			>
				{isObject && listItem
					? Object.entries(listItem).map(([category, value]) => {
							//* if element have a single option render it as uniq
							try {
								if (value[0] === undefined) {
									return (
										<li key={category}>
											<HashLink
												className={`${LinkStyle}`}
												to={`#${category}`}
												onClick={() => {
													selectedElement(
														category,
														undefined
													)
												}}
											>
												{category}
											</HashLink>
										</li>
									)
								}
								//* basic render of element list

								const valueArr = value.map((el) => {
									return (
										<li key={el}>
											<HashLink
												className={`${LinkStyle}`}
												to={`#${category + '-' + el}`}
												onClick={() => {
													selectedElement(
														category,
														el
													)
												}}
											>
												{el}
											</HashLink>
										</li>
									)
								})

								return (
									<li key={category}>
										<details>
											<summary
												className={`${LinkStyle}`}
											>
												{category}
											</summary>
											<ul className='before:bg-base-200'>
												{valueArr}
											</ul>
										</details>
									</li>
								)
							} catch (error) {
								console.log(error)
							}
						})
					: null}
			</ul>
		</>
	)
}

export default SideNav
