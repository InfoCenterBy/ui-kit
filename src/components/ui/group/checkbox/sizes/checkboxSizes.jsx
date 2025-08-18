const CheckboxSizes = () => {
	return (
		<div className='flex flex-wrap gap-2'>
			<input
				type='checkbox'
				defaultChecked
				className='checkbox checkbox-xs'
			/>
			<input
				type='checkbox'
				defaultChecked
				className='checkbox checkbox-sm'
			/>
			<input
				type='checkbox'
				defaultChecked
				className='checkbox checkbox-md'
			/>
			<input
				type='checkbox'
				defaultChecked
				className='checkbox checkbox-lg'
			/>
			<input
				type='checkbox'
				defaultChecked
				className='checkbox checkbox-xl'
			/>
		</div>
	)
}

export default CheckboxSizes
