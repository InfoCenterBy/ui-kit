import ComponentWrapper from '../components/system/componentWrapper'
import SideNav from '../components/system/sidenav'
import Test from '../components/test'
import BtnDefault from '../components/ui/group/buttons/default/btnDefault'

const UiKit = () => {
	const uiList = {
		buttons: {
			name: 'default',
			component: <BtnDefault>Click me</BtnDefault>,
		},
		test: {
			component: <BtnDefault>test</BtnDefault>,
		},
	}

	//process uiList to this {name: ['component_name'], ...} for render in sideNav
	const navList = Object.entries(uiList).reduce((acc, [key, value]) => {
		if (Array.isArray(value)) {
			acc[key] = value.map((item) => item.name)
		} else {
			acc[key] = [value.name]
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
					<div className='w-full lg:w-[80%]'>
						{/* <ComponentWrapper>
							<Test />
						</ComponentWrapper> */}
						<ComponentWrapper>
							<BtnDefault>Click me</BtnDefault>
						</ComponentWrapper>
					</div>
				</div>
			</main>
		</>
	)
}

export default UiKit
