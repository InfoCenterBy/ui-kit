const Button = ({ props, onClick, className }) => {
	return (
		<>
			<button onClick={onClick} className={className}>
				{props}
			</button>
		</>
	);
};
export default Button;
