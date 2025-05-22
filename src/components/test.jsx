import { useTheme } from '../contexts/themeContext'

const Test = () => {
	// const { theme } = useTheme()
	return (
		// className={`bg-color-card-${theme}`}
		<div>
			<h1 className='font-bold text-3xl underline'>Hello world!</h1>
			<div className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
			<p className='test-class'>test-text</p>
			<button>test btn</button>
			<input type='text' placeholder='testPlaceHolder' />
		</div>
	)
}

export default Test
