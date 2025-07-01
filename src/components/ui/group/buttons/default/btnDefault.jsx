const BtnDefault = ({ children, onClick, className }) => {
	return (
		<>
			<button
				onClick={onClick}
				className={`${className ? `${className} ` : ''}btn dark:bg-gray-700 dark:text-white`}
			>
				{children}
			</button>
		</>
	)
}
export default BtnDefault
