import classNames from 'classnames/bind'
import { toast } from 'react-toastify'
import SystemToast from '../systemToast'

const ColorBlock = ({ colorFromParent, className, textColor }) => {
	const colorClass = classNames('rounded w-[32px] h-[32px]', colorFromParent)
	const copyColor = (colorClass) => {
		// Создаём временный div
		const tempDiv = document.createElement('div')
		tempDiv.className = colorClass + ' w-0 h-0 hidden'
		document.body.appendChild(tempDiv)
		const computedColor = getComputedStyle(tempDiv).backgroundColor
		document.body.removeChild(tempDiv)

		navigator.clipboard.writeText(computedColor)
		toast(
			<SystemToast type='success'>
				Color {colorFromParent} copied to clipboard
			</SystemToast>,
			{
				closeButton: false,
				autoClose: 1000,
				closeOnClick: true,
			}
		)
	}
	return (
		<div
			className={classNames(
				'rounded-lg p-1 border dark:border-white border-black grid items-center cursor-pointer',
				className
			)}
			onClick={() => copyColor(colorFromParent)}
		>
			<div className='tooltip'>
				<div
					className={classNames(
						'tooltip-content',
						`${colorFromParent}`,
						`after:${colorFromParent}`
					)}
				>
					<div
						className={classNames(
							'text-sm',
							textColor ? textColor : 'text-white'
						)}
					>
						{colorFromParent}
					</div>
				</div>
				<div className={colorClass}></div>
			</div>
		</div>
	)
}

export default ColorBlock
