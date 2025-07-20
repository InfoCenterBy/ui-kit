import classNames from 'classnames/bind'

const ColorBlock = ({ colorFromParent }) => {
	const colorClass = classNames('rounded w-[32px] h-[32px]', colorFromParent)
	return (
		<div>
			<div className={colorClass}></div>
		</div>
	)
}

export default ColorBlock
