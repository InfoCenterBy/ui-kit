import { Routes, Route } from 'react-router-dom'
import './App.scss'
import UiKit from './pages/uikit'
import Home from './pages/home'
import TestPage from './pages/testPage'
import NavBar from './components/system/navbar'
import { useState } from 'react'

function App() {
	const [theme, setTheme] = useState('')
	return (
		<>
			<div
				className={`${theme ? 'dark' : ''} bg-white dark:bg-black px-1`}
			>
				<NavBar setTheme={setTheme} />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/ui' element={<UiKit />} />
					<Route path='/test' element={<TestPage />} />
				</Routes>
			</div>
		</>
	)
}

export default App
