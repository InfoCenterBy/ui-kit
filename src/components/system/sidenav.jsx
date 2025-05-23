const SideNav = () => {
	return (
		<>
			<ul className='top-2 sticky bg-base-200 rounded-box w-56 h-auto menu'>
				<li>
					<details open>
						<summary>Buttons</summary>
						<ul>
							<li>
								<a>Submenu 1</a>
							</li>
							<li>
								<a>Submenu 2</a>
							</li>
							<li>
								<details open>
									<summary>Parent</summary>
									<ul>
										<li>
											<a>Submenu 1</a>
										</li>
										<li>
											<a>Submenu 2</a>
										</li>
									</ul>
								</details>
							</li>
						</ul>
					</details>
				</li>
				<li>
					<a>Item 3</a>
				</li>
			</ul>
		</>
	)
}

export default SideNav
