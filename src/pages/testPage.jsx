import Button from '../components/ui/group/buttons/button'
import Logo from '../components/logo'
import Test from '../components/test'
import SideNav from '../components/system/sidenav'
import { useState } from 'react'
import { DndContext } from '@dnd-kit/core'
import { Draggable } from '../components/system/draggable'
import { Droppable } from '../components/system/droppable'
import { ThemeProvider } from '../contexts/themeContext'
import ThemeSwitcher from '../components/themeSwitcher'
import ComponentWrapper from '../components/system/componentWrapper'

const TestPage = () => {
	const [isDropped, setIsDropped] = useState(false)
	const draggableMarkup = <Draggable>Drag me</Draggable>

	const handleDragEnd = (event) => {
		if (event.over && event.over.id === 'droppable') {
			setIsDropped(true)
		}
	}
	return (
		<>
			<main>
				<div className='flex flex-row flex-wrap lg:flex-nowrap items-start content-start gap-x-6 pt-2 w-full h-full'>
					<SideNav className={'lg:w-[20%] w-full'} />
					<div className='w-full lg:w-[80%]'>
						<DndContext onDragEnd={handleDragEnd}>
							{!isDropped ? draggableMarkup : null}
							<Droppable>
								{isDropped
									? draggableMarkup
									: 'Drop here'}
							</Droppable>
						</DndContext>
						<ThemeProvider>
							<ThemeSwitcher />
							{/*  */}
						</ThemeProvider>
						<ComponentWrapper>
							<Test />
						</ComponentWrapper>
					</div>
				</div>
			</main>
		</>
	)
}

export default TestPage
