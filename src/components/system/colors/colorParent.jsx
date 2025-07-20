import ColorBlock from './colorBlock'

const ColorParent = () => {
	return (
		<div>
			<h1>Color Parent</h1>
			<ColorBlock colorFromParent='bg-red-500' />
		</div>
	)
}

export default ColorParent
