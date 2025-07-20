import { useState } from 'react'
import Logo from '../components/logo'
import ComponentWrapper from '../components/system/componentWrapper'
import SideNav from '../components/system/sidenav'
import BtnDefault from '../components/ui/group/buttons/default/btnDefault'
import AccordionDefault from '../components/ui/group/accordion/default/accordion'
import AccordionJoined from '../components/ui/group/accordion/joined/accordion'
import ColorParent from '../components/system/colors/colorParent'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const UiKit = () => {
	// * if component has MULTIPLE variations use this COMP_NAME:[{name:'name_variation', component:JSX}]
	// * if component has SINGLE variation use this COMP_NAME:[{component:JSX}]
	const uiList = {
		buttons: [
			{
				name: 'default',
				component: <BtnDefault>Click me</BtnDefault>,
			},
			{
				name: 'menu',
				component: <BtnDefault>Click menu</BtnDefault>,
			},
		],
		accordion: [
			{
				name: 'default',
				component: <AccordionDefault />,
			},
			{
				name: 'joined',
				component: <AccordionJoined />,
			},
		],
		test: [
			{
				component: <Logo />,
			},
		],
	}

	//* process uiList to this {name: ['component_name'], ...} for render in sideNav
	const navList = Object.entries(uiList).reduce((acc, [key, items]) => {
		// check items is array
		if (Array.isArray(items)) {
			// filter el and create arr of names
			acc[key] = items
				.filter((item) => item?.name) // check name is exist
				.map((item) => item.name) // take name
		} else {
			// if items is not arr create empty arr
			acc[key] = []
		}
		return acc
	}, {})

	const [active, setActive] = useState({
		category: '',
		name: '',
		tab: 'preview',
	})

	return (
		<>
			<main>
				<div className='flex flex-row flex-wrap lg:flex-nowrap items-start content-start gap-x-6 pt-2 w-full h-full'>
					<SideNav
						className={'lg:w-[20%] w-full'}
						listItem={navList}
						changeSelectedComponent={(category, name) =>
							setActive({ category, name, tab: 'preview' })
						}
					/>
					<div className='w-full lg:w-[80%]'>
						<div className=''>
							<ColorParent />
						</div>
						<div className='flex flex-col gap-3 mt-4'>
							{Object.entries(uiList).map(
								([category, components]) => (
									<ComponentWrapper
										key={category}
										category={category}
										components={components}
										selectedComponent={active}
										setSelectedComponent={
											setActive
										}
									/>
								)
							)}
						</div>
					</div>
				</div>
				<ToastContainer
					position='top-right'
					hideProgressBar
					closeOnClick
					draggable
					pauseOnHover
					toastClassName={() => 'toast toast-top toast-end'}
					bodyClassName={() => 'p-0'}
					limit={5}
					autoClose={5000}
					pauseOnFocusLoss={true}
				/>
			</main>
		</>
	)
}

export default UiKit
