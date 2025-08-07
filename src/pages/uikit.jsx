import { useState } from 'react'
import Logo from '../components/logo'
import ComponentWrapper from '../components/system/componentWrapper'
import SideNav from '../components/system/sidenav'
import BtnDefault from '../components/ui/group/buttons/default/btnDefault'
import AccordionDefault from '../components/ui/group/accordion/default/accordion'
import AccordionJoined from '../components/ui/group/accordion/joined/accordion'
import ColorParent from '../components/system/colors/colorParent'
import { ToastContainer } from 'react-toastify'
import Alert from '../components/ui/group/alert/default/alert'
import Badge from '../components/ui/group/badge/default/badge'
import BadgeSizes from '../components/ui/group/badge/sizes/badgeSizes'
import Breadcrumbs from '../components/ui/group/breadcrumbs/default/breadcrumbs'
import BreadcrumbsWithIcons from '../components/ui/group/breadcrumbs/withIcons/breadcrumbsWithIcons'
import ResponsiveBtn from '../components/ui/group/buttons/responsive/responsive'
import SizesBtn from '../components/ui/group/buttons/sizes/sizes'
import BtnRounded from '../components/ui/group/buttons/rounded/btnRounded'
import BtnCross from '../components/ui/group/buttons/cross/btnCross'

const UiKit = () => {
	// * if component has MULTIPLE variations use this COMP_NAME:[{name:'name_variation', component:JSX}]
	// * if component has SINGLE variation use this COMP_NAME:[{component:JSX}]
	const uiList = {
		button: [
			{
				name: 'default',
				component: <BtnDefault>Click me</BtnDefault>,
			},
			{
				name: 'responsive',
				component: <ResponsiveBtn />,
			},
			{
				name: 'sizes',
				component: <SizesBtn />,
			},
			{
				name: 'rounded',
				component: <BtnRounded />,
			},
			{
				name: 'close',
				component: <BtnCross />,
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
		alert: [
			{
				name: 'default',
				component: <Alert />,
			},
		],
		badge: [
			{
				name: 'default',
				component: <Badge />,
			},
			{
				name: 'sizes',
				component: <BadgeSizes />,
			},
		],
		breadcrumbs: [
			{
				name: 'default',
				component: <Breadcrumbs />,
			},
			{
				name: 'withIcons',
				component: <BreadcrumbsWithIcons />,
			},
		],
		// test: [
		// 	{
		// 		component: <Logo />,
		// 	},
		// ],
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
					<div className='pb-20 w-full lg:w-[80%] overflow-x-hidden'>
						<div className='w-full'>
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
