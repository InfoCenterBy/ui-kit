const CheckboxColors = () => {
	return (
		<div className='flex flex-wrap gap-2'>
			<input
				type='checkbox'
				defaultChecked
				className='checkbox checkbox-primary'
			/>
			<input
				type='checkbox'
				defaultChecked
				className='checkbox checkbox-secondary'
			/>
			<input
				type='checkbox'
				defaultChecked
				className='checkbox checkbox-accent'
			/>
			<input
				type='checkbox'
				defaultChecked
				className='checkbox checkbox-neutral'
			/>

			<input
				type='checkbox'
				defaultChecked
				className='checkbox checkbox-info'
			/>
			<input
				type='checkbox'
				defaultChecked
				className='checkbox checkbox-success'
			/>
			<input
				type='checkbox'
				defaultChecked
				className='checkbox checkbox-warning'
			/>
			<input
				type='checkbox'
				defaultChecked
				className='checkbox checkbox-error'
			/>
		</div>
	)
}

export default CheckboxColors
