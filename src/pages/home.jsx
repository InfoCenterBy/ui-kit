const Home = () => {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to='/'>home</Link>
					</li>
					<li>
						<Link to='/ui'>ui</Link>
					</li>
				</ul>
			</nav>
			<p className='text-red-400'>home page</p>
		</>
	)
}

export default Home
