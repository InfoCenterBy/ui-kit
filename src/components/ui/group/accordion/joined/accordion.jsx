import classNames from 'classnames'

const AccordionJoined = () => {
	const accordionClass = classNames(
		'collapse collapse-arrow border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 join-item shadow-md dark:shadow-gray-900/20 hover:shadow-lg dark:hover:shadow-gray-900/30 transition-shadow duration-200'
	)
	return (
		<div className='dark:bg-base-100 join join-vertical'>
			<div className={accordionClass}>
				<input type='radio' name='my-accordion-4' defaultChecked />
				<div className='collapse-title font-semibold text-gray-900 dark:text-white text-base'>
					How do I create an account?
				</div>
				<div className='collapse-content text-gray-700 dark:text-gray-300 text-sm leading-relaxed'>
					Click the "Sign Up" button in the top right corner and
					follow the registration process.
				</div>
			</div>
			<div className={accordionClass}>
				<input type='radio' name='my-accordion-4' />
				<div className='collapse-title font-semibold text-gray-900 dark:text-white text-base'>
					I forgot my password. What should I do?
				</div>
				<div className='collapse-content text-gray-700 dark:text-gray-300 text-sm leading-relaxed'>
					Click on "Forgot Password" on the login page and follow
					the instructions sent to your email.
				</div>
			</div>
			<div className={accordionClass}>
				<input type='radio' name='my-accordion-4' />
				<div className='collapse-title font-semibold text-gray-900 dark:text-white text-base'>
					How do I update my profile information?
				</div>
				<div className='collapse-content text-gray-700 dark:text-gray-300 text-sm leading-relaxed'>
					Go to "My Account" settings and select "Edit Profile"
					to make changes.
				</div>
			</div>
		</div>
	)
}

export default AccordionJoined
