import ComponentWrapper from '../components/system/componentWrapper'
import SideNav from '../components/system/sidenav'
import Test from '../components/test'

const UiKit = () => {
	const uiList = {
		buttons: ['default', 'disabled'],
	}
	return (
		<>
			<main>
				<div className='flex flex-row flex-wrap lg:flex-nowrap items-start content-start gap-x-6 pt-2 w-full h-full'>
					<SideNav
						className={'lg:w-[20%] w-full'}
						listItem={uiList}
					/>
					<div className='w-full lg:w-[80%]'>
						<ComponentWrapper>
							<Test />
						</ComponentWrapper>
					</div>
				</div>
			</main>
		</>
	)
}

export default UiKit
