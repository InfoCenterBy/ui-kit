const CardLeftImg = () => {
	return (
		<>
			<div className='bg-base-100 shadow-sm card lg:card-side'>
				<figure className='max-w-[18.75rem]'>
					<img
						src='https://infocenterby.github.io/newInfoCenter/img/png/main/activity-img-cashier.png'
						alt='Cashier'
					/>
				</figure>
				<div className='card-body'>
					<h2 className='card-title'>New album is released!</h2>
					<p>Click the button to listen on Spotiwhy app.</p>
					<div className='justify-end card-actions'>
						<button className='btn btn-primary'>
							Listen
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default CardLeftImg
