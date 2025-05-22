import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.scss'
import UiKit from './pages/uikit'
import Home from './pages/home'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</>
	)
}

export default App
