const LoadingRings = () => {
    return (
		<div className='flex flex-col gap-2'>
			<span className='loading-ring loading loading-xs'></span>
			<span className='loading-ring loading loading-sm'></span>
			<span className='loading-ring loading loading-md'></span>
			<span className='loading-ring loading loading-lg'></span>
			<span className='loading-ring loading loading-xl'></span>
		</div>
    )
}
 
export default LoadingRings;