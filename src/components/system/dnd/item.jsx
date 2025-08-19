import { forwardRef } from 'react'

export const Item = forwardRef(({ id, children, ...props }, ref) => {
	return (
		<div
			{...props}
			ref={ref}
			className='bg-base-300 p-2 rounded-md w-[100px] h-[100px] text-base-content'
		>
			{children || id}
		</div>
	)
})
