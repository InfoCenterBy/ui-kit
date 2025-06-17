import { Link } from 'react-router-dom'
import ThemeToggle from './themeToggle'

const NavBar = ({ setTheme }) => {
	const linkStyle =
		'hover:opacity-70 dark:text-white text-black underline-offset-2 transition duration-300'
	return (
		<>
			<div className='flex flex-row justify-between items-center mt-3.5 py-2 border dark:border-white border-black rounded-lg'>
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
				<ThemeToggle setTheme={setTheme} />
			</div>
		</>
	)
}

export default NavBar
