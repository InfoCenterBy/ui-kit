const Modal = () => {
	return (
		<>
			{/* You can open the modal using document.getElementById('ID').showModal() method */}
			<button
				className='btn'
				onClick={() =>
					document.getElementById('my_modal_3').showModal()
				}
			>
				open modal
			</button>
			<dialog id='my_modal_3' className='modal'>
				<div className='modal-box'>
					{/* if there is a button in form, it will close the modal */}
					<form method='dialog'>
						<button className='top-2 right-2 absolute btn btn-sm btn-circle btn-ghost'>
							✕
						</button>
					</form>
					<h3 className='font-bold text-lg'>Hello!</h3>
					<p className='py-4'>
						Press ESC key or click on ✕ button to close
					</p>
				</div>
				<form method='dialog' className='modal-backdrop'>
					<button>close</button>
				</form>
			</dialog>
		</>
	)
}

export default Modal
