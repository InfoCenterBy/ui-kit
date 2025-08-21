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
												<svg
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													strokeWidth='1.5'
													stroke='currentColor'
													className='w-4 h-4'
												>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														d='M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z'
													/>
												</svg>
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
