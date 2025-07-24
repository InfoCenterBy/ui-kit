const BtnDefault = ({ children, onClick, className }) => {
	return (
		<>
			<button
				onClick={onClick}
				className={`${className ? `${className} ` : ''}btn btn-primary`}
			>
				{children}
			</button>
		</>
	)
}
export default BtnDefault
