const SideNav = ({ className, listItem }) => {
	const isObject = typeof { listItem } === 'object'
	const LinkStyle =
		' dark:hover:bg-gray-800 hover:bg-gray-950 hover:text-white'
	return (
		<>
			<ul
				className={
					className +
					' lg:top-2 top-0 sticky dark:bg-base-200 bg-transparent text-black dark:text-white rounded-box menu z-10 border dark:border-transparent border-black p-0'
				}
			>
				{isObject
					? Object.entries(listItem).map(([name, value]) => {
							try {
								const valueArr = value.map((el) => {
									return (
										<li key={el}>
											<a
												className={`${LinkStyle} dark:hover:text-gray-400`}
											>
												{el}
											</a>
										</li>
									)
								})
								return (
									<li key={name}>
										<details>
											<summary
												className={`${LinkStyle} dark:text-gray-500`}
											>
												{name}
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
				{/* <li>
					<details>
						<summary className={LinkStyle}>Buttons</summary>
						<ul className='before:bg-gray-700 dark:before:bg-amber-50'>
							<li>
								<a className={LinkStyle}>Submenu 1</a>
							</li>
							<li>
								<a className={LinkStyle}>Submenu 2</a>
							</li>
						</ul>
					</details>
				</li>
				<li>
					<a className={LinkStyle}>Item 3</a>
				</li> */}
			</ul>
		</>
	)
}

export default SideNav
