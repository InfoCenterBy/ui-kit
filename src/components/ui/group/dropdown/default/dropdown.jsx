const Dropdown = () => {
	return (
		<>
			{/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
			{/* For TSX uncomment the commented types below */}
			<button
				className='btn'
				popoverTarget='popover-1'
				style={
					{
						anchorName: '--anchor-1',
					} /* as React.CSSProperties */
				}
			>
				Button
			</button>

			<ul
				className='bg-base-100 shadow-sm rounded-box w-52 dropdown menu'
				popover='auto'
				id='popover-1'
				style={
					{
						positionAnchor: '--anchor-1',
					} /* as React.CSSProperties */
				}
			>
				<li>
					<a>Item 1</a>
				</li>
				<li>
					<a>Item 2</a>
				</li>
			</ul>
		</>
	)
}

export default Dropdown
