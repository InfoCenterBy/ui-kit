import { HashLink } from 'react-router-hash-link'

const SideNav = ({ className, listItem, changeSelectedComponent }) => {
	const isObject = typeof { listItem } === 'object'
	const LinkStyle = ' dark:hover:bg-gray-800 hover:bg-gray-200'
	const selectedElement = (category, name) => {
		changeSelectedComponent(category, name)
	}
	return (
		<>
			<ul
				className={
					className +
					' lg:top-2 top-0 sticky dark:bg-base-200 bg-transparent text-black dark:text-white rounded-box menu z-10 border dark:border-transparent border-gray-400 p-0 overflow-hidden'
				}
			>
				{isObject && listItem
					? Object.entries(listItem).map(([category, value]) => {
							//* if element have a single option render it as uniq
							try {
								if (value[0] === undefined) {
									return (
										<li key={category}>
											<HashLink
												className={`${LinkStyle} dark:hover:text-gray-400`}
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
												className={`${LinkStyle} dark:hover:text-gray-400`}
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
												className={`${LinkStyle} dark:text-gray-500`}
											>
												{category}
											</summary>
											<ul className='before:bg-gray-700 dark:before:bg-amber-50'>
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
