'use client';

import { Link } from 'next-view-transitions';
import Image from 'next/image';
import { useActiveLinkHook } from '@/main/hooks/useActiveLinkHook';
import { NAVIGATION_LINKS } from '@/main/data/link/navigationLinks';

function Navbar() {
	const { getActiveStatus } = useActiveLinkHook();

	return (
		<nav className='hidden lg:block bg-inherit z-50 py-4 sticky top-0 left-0 right-0'>
			<div className='max-w-7xl mx-auto flex justify-between items-center px-4'>
				{/* Logo Section */}
				<div className='flex items-center gap-10'>
					<div className='flex items-center'>
						<Link
							href='/'
							className='flex items-center gap-2 transition-transform duration-300 ease-in-out hover:scale-105'
						>
							<Image
								src='/favicon/interViewPraplogo.png'
								alt='logo'
								width={56}
								height={56}
								className='w-10 xl:w-14 xl:h-14 object-contain bg-[#111827] rounded'
							/>
						</Link>
					</div>

					{/* Navigation Links */}
					<div className='flex items-center gap-6'>
						{NAVIGATION_LINKS.map((link, index) => {
							const isActive = getActiveStatus(link.href);
							return (
								<Link
									key={index}
									href={link.href}
									className={`text-md font-medium rounded-sm transition-all duration-300 ease-in-out ${
										isActive
											? 'text-white bg-indigo-600 px-5 py-1.5 shadow-sm'
											: 'text-gray-400 hover:text-white hover:bg-indigo-600 hover:px-5 hover:py-1.5 '
									}`}
								>
									{link.label}
								</Link>
							);
						})}
					</div>
				</div>

				{/* Auth Buttons */}
				<div className='flex items-center gap-5'>
					<Link
						href='/login'
						className='text-md text-gray-400 transition-colors duration-300 ease-in-out hover:text-white'
					>
						Login
					</Link>
					<Link
						href='/register'
						className='bg-indigo-600 text-white px-4 py-2 rounded-sm text-md transition-all duration-300 ease-in-out hover:bg-black/30 hover:scale-105 active:scale-95'
					>
						Register
					</Link>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
