'use client';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useActiveLinkHook } from '@/main/hooks/useActiveLinkHook';
import { navLinks } from '@/main/data/common/links';
import NavbarDropdown from './NavbarDropdown';

function Navbar() {
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
				<div
					className='flex items-center gap-2 xl:gap-4 relative'
					ref={dropdownRef}
				>
					{navLinks.map((link) => (
						<div key={link.label} className='relative inline-block'>
							{link.dropdown ? (
								<div className='inline-block'>
									<Link
										href={link.href}
										onClick={() => toggleDropdown(link.label)}
										className={`xl:px-5 lg:px-3 py-2 text-md transition-colors duration-300 flex items-center gap-1 rounded-sm ${
											getActiveStatus(link.href) ||
											activeDropdown === link.label
												? 'bg-main-gradient-r  text-gray-300  '
												: ' hover:bg-main-gradient-r  transition-colors duration-500 '
										}`}
									>
										{link.label}
										{activeDropdown === link.label ? (
											<FaChevronUp className='text-xs' />
										) : (
											<FaChevronDown className='text-xs' />
										)}
									</Link>

									{activeDropdown === link.label && (
										<NavbarDropdown
											items={link.dropdown}
											onClose={handleChildClick}
										/>
									)}
								</div>
							) : (
								<Link
									href={link.href}
									className={`xl:px-5 lg:px-3 py-2 text-md transition-colors duration-300 no-underline flex items-center  rounded-sm ${
										getActiveStatus(link.href)
											? 'bg-main-gradient-r  text-gray-300 '
											: ' hover:bg-main-gradient-r	transition duration-500 '
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
