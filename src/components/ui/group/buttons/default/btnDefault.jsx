const BtnDefault = ({ children, onClick, className }) => {
	return (
		<>
			<button
				onClick={onClick}
				className={`${className ? className : ''} btn`}
			>
				{children}
			</button>
		</>
	)
}
export default BtnDefault
