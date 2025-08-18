const Radio = () => {
	return (
		<div className='flex flex-wrap gap-2'>
			<input
				type='radio'
				name='radio-1'
				className='radio'
				defaultChecked
			/>
			<input type='radio' name='radio-1' className='radio' />
		</div>
	)
}

export default Radio
