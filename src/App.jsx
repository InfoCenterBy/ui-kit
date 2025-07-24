import { Routes, Route } from 'react-router-dom'
import './App.scss'
import UiKit from './pages/uikit'
import Home from './pages/home'
import TestPage from './pages/testPage'
import NavBar from './components/system/navbar'

function App() {
	return (
		<>
			<div className='px-1 min-h-screen'>
				<NavBar />
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
