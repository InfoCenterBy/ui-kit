const InputWithLabel = () => {
	return (
		<>
			<label className='input'>
				Path
				<input
					type='text'
					className='grow'
					placeholder='src/app/'
				/>
				<span className='badge badge-neutral badge-xs'>
					Optional
				</span>
			</label>
		</>
	)
}

export default InputWithLabel
