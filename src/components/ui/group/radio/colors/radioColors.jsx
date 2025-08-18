const RadioColors = () => {
	return (
		<div className='flex flex-wrap gap-2'>
			<input
				type='radio'
				name='radio-12'
				defaultChecked
				className='bg-red-100 checked:bg-red-200 border-red-300 checked:border-red-600 checked:text-red-600 radio'
			/>
			<input
				type='radio'
				name='radio-12'
				defaultChecked
				className='bg-blue-100 checked:bg-blue-200 border-blue-300 checked:border-blue-600 checked:text-blue-600 radio'
			/>
		</div>
	)
}

export default RadioColors
