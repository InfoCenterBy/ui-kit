import { useDroppable } from '@dnd-kit/core'

const GridCell = ({ id, children, isOver, isLastRow }) => {
	const { setNodeRef } = useDroppable({
		id: `cell-${id}`,
	})

	return (
		<div
			ref={setNodeRef}
			className={`w-full h-full border border-base-300 rounded-md transition-all duration-200 ${
				isLastRow ? 'min-h-[0px]' : 'min-h-[60px]'
			} ${isOver ? 'bg-base-200 opacity-70' : ''}`}
		>
			{children}
		</div>
	)
}

export default GridCell
