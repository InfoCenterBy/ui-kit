import SideNav from '../components/system/sidenav'

const UiKit = () => {
	return (
		<>
			<main>
				<div className='flex flex-row items-start gap-x-6 h-full'>
					<SideNav />
					<div className=''>ui page</div>
				</div>
			</main>
		</>
	)
}

export default UiKit
