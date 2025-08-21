import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { forwardRef } from 'react'
import { useDroppable } from '@dnd-kit/core'
import classNames from 'classnames'

const GridItem = forwardRef(({ id, children }) => {
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({ id })

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	}

	const { isOver } = useDroppable({
		id: `droppable-${id}`,
	})

	return (
		<div
			ref={setNodeRef}
			style={style}
			{...attributes}
			{...listeners}
			className={classNames(
				'bg-base-300 p-2 rounded-md w-full h-full text-base-content flex items-center justify-center cursor-move transition-all duration-200',
				{
					// 'bg-red-500': !isOver,
				}
			)}
		>
			{children || id}
		</div>
	)
})

export default GridItem
