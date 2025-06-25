'use client';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useActiveLinkHook } from '@/main/hooks/useActiveLinkHook';
import { navLinks } from '@/main/data/common/links';
import NavbarDropdown from './NavbarDropdown';
import useUserHook from '@/main/hooks/useUserHook';

function Navbar() {
	const { user } = useUserHook();
	const { getActiveStatus } = useActiveLinkHook();
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setActiveDropdown(null);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const toggleDropdown = (label: string) => {
		setActiveDropdown(activeDropdown === label ? null : label);
	};

	const handleChildClick = () => {
		setActiveDropdown(null);
	};

	return (
		<nav className='hidden lg:block z-50 bg-gradient-to-b from-gray-900 to-gray-900 lg:px-2 xl:px-0 py-4 sticky top-0 left-0 right-0 border-b-2 border-gray-800'>
			<div className='max-w-7xl mx-auto flex justify-between items-center gap-6'>
				{/* Logo */}
				<div className='flex items-center text-white text-2xl font-bold'>
					<Link
						href='/'
						className='no-underline text-white hover:text-gray-300 flex items-center gap-2'
					>
						<Image
							src={'/favicon/interViewPraplogo.png'}
							alt='logo'
							className='w-10 xl:w-14 xl:h-14 object-contain bg-[#111827]'
							width={300}
							height={500}
						/>
						<p className='xl:text-3xl font-semibold text-gray-200'>
							InterViewPrap
						</p>
					</Link>
				</div>

				{/* Navigation Links */}
				<div
					className='flex items-center gap-2 xl:gap-4 relative'
					ref={dropdownRef}
				>
					{navLinks.map((link) => (
						<div key={link.label} className='relative inline-block'>
							{link.dropdown ? (
								<div className='inline-block'>
									<button
										onClick={() => toggleDropdown(link.label)}
										className={`xl:px-5 lg:px-3 py-2 text-md transition-colors duration-300 flex items-center gap-1 ${
											getActiveStatus(link.href) ||
											activeDropdown === link.label
												? 'bg-gradient-to-r from-gray-950 to-gray-800 text-white rounded-sm'
												: 'text-gray-300 hover:bg-gradient-to-r from-gray-950 to-gray-800 hover:rounded-sm'
										}`}
									>
										{link.label}
										{activeDropdown === link.label ? (
											<FaChevronUp className='text-xs' />
										) : (
											<FaChevronDown className='text-xs' />
										)}
									</button>

									{activeDropdown === link.label && (
										<NavbarDropdown
											items={link.dropdown}
											onClose={handleChildClick}
										/>
									)}
								</div>
							) : link.href === '/login' && user ? (
								<div className='flex items-center'>
									<Link href='/profile' className='block'>
										<Image
											src={user.avatar}
											alt='User Avatar'
											className='w-10 h-10 rounded-full object-cover border border-gray-600'
											width={40}
											height={40}
										/>
									</Link>
								</div>
							) : (
								<Link
									href={link.href}
									className={`xl:px-5 lg:px-3 py-2 text-md transition-colors duration-300 no-underline flex items-center ${
										getActiveStatus(link.href)
											? 'bg-gradient-to-r from-gray-950 to-gray-800 text-white rounded-sm'
											: 'text-gray-300 hover:bg-gradient-to-r from-gray-950 to-gray-800 hover:rounded-sm'
									}`}
								>
									{link.label}
								</Link>
							)}
						</div>
					))}
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
