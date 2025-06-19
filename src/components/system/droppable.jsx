import { useDroppable } from '@dnd-kit/core'

export function Droppable(props) {
	const { isOver, setNodeRef } = useDroppable({
		id: 'droppable',
	})
	const style = {
		color: isOver ? 'red' : undefined,
	}

	return (
		<div ref={setNodeRef} style={style} className={props.className}>
			{props.children}
		</div>
	)
}
