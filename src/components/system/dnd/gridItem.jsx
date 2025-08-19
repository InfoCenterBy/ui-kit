import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { forwardRef } from 'react'

const GridItem = forwardRef(({ id, children, isOver, ...props }, ref) => {
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({ id })

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	}

	return (
		<div
			ref={setNodeRef}
			style={style}
			{...attributes}
			{...listeners}
			className={`bg-base-300 p-2 rounded-md w-full h-full text-base-content flex items-center justify-center cursor-move transition-all duration-200 ${
				isOver ? 'opacity-50 bg-base-200' : ''
			}`}
		>
			{children || id}
		</div>
	)
})

export default GridItem
