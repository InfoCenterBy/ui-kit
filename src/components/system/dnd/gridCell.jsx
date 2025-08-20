import { useDroppable } from '@dnd-kit/core'
import classNames from 'classnames'

const GridCell = ({ id, children, isLastRow }) => {
	const { isOver, setNodeRef } = useDroppable({
		id: `cell-${id}`,
	})

	return (
		<div
			ref={setNodeRef}
			className={classNames(
				'w-full h-full rounded-md transition-all duration-200 border-base-300',
				{
					'min-h-[0px]': isLastRow,
					'min-h-[60px]': !isLastRow,
					'bg-base-300': isOver,
					'border ': !isLastRow,
				}
			)}
		>
			{children}
		</div>
	)
}

export default GridCell
