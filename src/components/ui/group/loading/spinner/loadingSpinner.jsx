const LoadingSpinner = () => {
	return (
		<div className='flex flex-col gap-2'>
			<span className='loading loading-spinner loading-xs'></span>
			<span className='loading loading-spinner loading-sm'></span>
			<span className='loading loading-spinner loading-md'></span>
			<span className='loading loading-spinner loading-lg'></span>
			<span className='loading loading-spinner loading-xl'></span>
		</div>
	)
}

export default LoadingSpinner
