import { Link } from 'react-router-dom'
import ThemeToggle from './themeToggle'

const NavBar = () => {
	const linkStyle =
		'hover:opacity-70 underline-offset-2 transition duration-300 text-base-content'
	return (
		<>
			<div className='flex flex-row justify-between items-center mt-3.5 py-2 border border-base-content rounded-lg'>
				<nav className='w-full'>
					<ul className='flex flex-row justify-center gap-x-2'>
						<li>
							<Link to='/' className={linkStyle}>
								home
							</Link>
						</li>
						<li>
							<Link to='/ui' className={linkStyle}>
								ui
							</Link>
						</li>
						<li>
							<Link to='/test' className={linkStyle}>
								test page
							</Link>
						</li>
					</ul>
				</nav>
				<ThemeToggle />
			</div>
		</>
	)
}

export default NavBar
