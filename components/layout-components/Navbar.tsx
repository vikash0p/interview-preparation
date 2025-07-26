'use client';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import { useActiveLinkHook } from '@/main/hooks/useActiveLinkHook';
import { navLinks } from '@/main/data/link/navLinks';

function Navbar() {
	const { getActiveStatus } = useActiveLinkHook();




	return (
		<nav className='hidden lg:block z-50 bg-inherit  lg:px-2 xl:px-0 py-4 sticky top-0 left-0 right-0 '>
			<div className='max-w-7xl mx-auto flex justify-between items-center gap-6'>
				{/* Logo */}
				<div className='flex items-center  text-2xl font-bold'>
					<Link
						href='/'
						className='no-underline  hover:text-gray-300 flex items-center gap-2'
					>
						<Image
							src={'/favicon/interViewPraplogo.png'}
							alt='logo'
							className='w-10 xl:w-14 xl:h-14 object-contain bg-[#111827]'
							width={300}
							height={500}
						/>
						<p className='xl:text-3xl font-semibold '>InterViewPrap</p>
					</Link>
				</div>

				{/* Navigation Links */}
					{
						navLinks.map((link, index) => (
							<Link
								key={index}
								href={link.href}
								className={`${
									getActiveStatus(link.href)
										? 'text-white'
										: 'text-gray-400'
								} hover:text-white transition-colors`}
							>
								{link.label}
							</Link>
						))
					}
			</div>
		</nav>
	);
}

export default Navbar;
