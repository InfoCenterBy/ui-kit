const LoadingColors = () => {
	return (
		<div className='flex flex-row flex-wrap gap-2'>
			<span className='text-primary loading loading-spinner'></span>
			<span className='text-secondary loading loading-spinner'></span>
			<span className='text-accent loading loading-spinner'></span>
			<span className='text-neutral loading loading-spinner'></span>
			<span className='text-info loading loading-spinner'></span>
			<span className='text-success loading loading-spinner'></span>
			<span className='text-warning loading loading-spinner'></span>
			<span className='text-error loading loading-spinner'></span>
		</div>
	)
}

export default LoadingColors
