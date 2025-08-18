const RadioSizes = () => {
	return (
		<div className='flex flex-wrap gap-2'>
			<input
				type='radio'
				name='radio-2'
				className='radio radio-xs'
				defaultChecked
			/>
			<input
				type='radio'
				name='radio-2'
				className='radio radio-sm'
				defaultChecked
			/>
			<input
				type='radio'
				name='radio-2'
				className='radio radio-md'
				defaultChecked
			/>
			<input
				type='radio'
				name='radio-2'
				className='radio radio-lg'
				defaultChecked
			/>
			<input
				type='radio'
				name='radio-2'
				className='radio radio-xl'
				defaultChecked
			/>{' '}
		</div>
	)
}

export default RadioSizes
