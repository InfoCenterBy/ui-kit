import classNames from 'classnames'
import { HashLink } from 'react-router-hash-link'

const SideNav = ({ className, listItem, changeSelectedComponent }) => {
	const isObject = typeof { listItem } === 'object'
	const LinkStyle = 'text-base-content'
	const selectedElement = (category, name) => {
		changeSelectedComponent(category, name)
	}
	return (
		<>
			<ul
				className={classNames(
					className,
					'top-12 sticky bg-base-100 text-base-content rounded-box menu z-10 border border-base-200 p-0 overflow-hidden'
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
												className={classNames(
													'bg-base-200 hover:bg-base-300',
													LinkStyle
												)}
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
												className={classNames(
													'hover:bg-base-300'
												)}
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
												className={classNames(
													'bg-base-200 hover:bg-base-300',
													LinkStyle
												)}
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
