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
				<div className='flex flex-row items-start gap-x-6 w-full h-full'>
					<SideNav />
					<div className='w-full'>
						<Logo />
						<h1 className='font-bold text-red-700 text-4xl underline'>Hello world!</h1>
						<div className='mt-[1.375rem]'>
							<Button props={'test'} className='btn-outline btn' />
						</div>
						<h1 className=''>Vite + React</h1>
						<p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
						<DndContext onDragEnd={handleDragEnd}>
							{!isDropped ? draggableMarkup : null}
							<Droppable>{isDropped ? draggableMarkup : 'Drop here'}</Droppable>
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
