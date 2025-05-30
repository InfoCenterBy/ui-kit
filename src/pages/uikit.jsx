import Logo from '../components/logo'
import ComponentWrapper from '../components/system/componentWrapper'
import SideNav from '../components/system/sidenav'
import Test from '../components/test'
import BtnDefault from '../components/ui/group/buttons/default/btnDefault'

const UiKit = () => {
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
				component: <Logo />,
			},
		],
	}

	//process uiList to this {name: ['component_name'], ...} for render in sideNav
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

	return (
		<>
			<main>
				<div className='flex flex-row flex-wrap lg:flex-nowrap items-start content-start gap-x-6 pt-2 w-full h-full'>
					<SideNav
						className={'lg:w-[20%] w-full'}
						listItem={navList}
					/>
					<div className='flex flex-col w-full lg:w-[80%]'>
						{Object.entries(uiList).map(
							([category, components]) => (
								<ComponentWrapper
									key={category}
									category={category}
									components={components}
								/>
							)
						)}
					</div>
				</div>
			</main>
		</>
	)
}

export default UiKit
