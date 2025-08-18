const CardNoImg = () => {
	return (
		<>
			<div className='bg-base-100 shadow-sm w-96 card'>
				<div className='card-body'>
					<h2 className='card-title'>Card title!</h2>
					<p>
						A card component has a figure, a body part, and
						inside body there are title and actions parts
					</p>
					<div className='justify-start card-actions'>
						<button className='btn btn-primary'>
							Buy Now
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default CardNoImg
