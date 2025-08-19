import { useDraggable } from '@dnd-kit/core'

const Draggable = (props) => {
	const { attributes, listeners, setNodeRef } = useDraggable({
		id: props.id,
	})

	return (
		<li ref={setNodeRef} {...listeners} {...attributes}>
			{props.children}
		</li>
	)
}

export default Draggable
