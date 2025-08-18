const CardSizes = () => {
	return (
		<div className='flex flex-wrap gap-2'>
			<div className='bg-base-100 shadow-sm w-96 card card-xs'>
				<div className='card-body'>
					<h2 className='card-title'>Xsmall Card</h2>
					<p>
						A card component has a figure, a body part, and
						inside body there are title and actions parts
					</p>
					<div className='justify-end card-actions'>
						<button className='btn btn-primary'>
							Buy Now
						</button>
					</div>
				</div>
			</div>

			<div className='bg-base-100 shadow-sm w-96 card card-sm'>
				<div className='card-body'>
					<h2 className='card-title'>Small Card</h2>
					<p>
						A card component has a figure, a body part, and
						inside body there are title and actions parts
					</p>
					<div className='justify-end card-actions'>
						<button className='btn btn-primary'>
							Buy Now
						</button>
					</div>
				</div>
			</div>

			<div className='bg-base-100 shadow-sm w-96 card card-md'>
				<div className='card-body'>
					<h2 className='card-title'>Medium Card</h2>
					<p>
						A card component has a figure, a body part, and
						inside body there are title and actions parts
					</p>
					<div className='justify-end card-actions'>
						<button className='btn btn-primary'>
							Buy Now
						</button>
					</div>
				</div>
			</div>

			<div className='bg-base-100 shadow-sm w-96 card card-lg'>
				<div className='card-body'>
					<h2 className='card-title'>Large Card</h2>
					<p>
						A card component has a figure, a body part, and
						inside body there are title and actions parts
					</p>
					<div className='justify-end card-actions'>
						<button className='btn btn-primary'>
							Buy Now
						</button>
					</div>
				</div>
			</div>

			<div className='bg-base-100 shadow-sm w-96 card card-xl'>
				<div className='card-body'>
					<h2 className='card-title'>Xlarge Card</h2>
					<p>
						A card component has a figure, a body part, and
						inside body there are title and actions parts
					</p>
					<div className='justify-end card-actions'>
						<button className='btn btn-primary'>
							Buy Now
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CardSizes
