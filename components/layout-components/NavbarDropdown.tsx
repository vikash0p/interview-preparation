'use client';
import { Link } from "next-view-transitions";
import { FaChevronRight } from 'react-icons/fa';

interface DropdownItem {
	label: string;
	href: string;
	comingSoon?: boolean;
	children?: DropdownItem[];
}

interface NavbarDropdownProps {
	items: DropdownItem[];
	onClose: () => void;
}

const NavbarDropdown = ({ items, onClose }: NavbarDropdownProps) => {
	const handleItemClick = (e: React.MouseEvent, comingSoon?: boolean) => {
		if (comingSoon) {
			e.preventDefault();
		} else {
			onClose(); // Close all dropdowns when an item is clicked
		}
	};

	return (
		<div className='absolute left-0 mt-2 w-56 bg-gray-800 rounded-md shadow-lg z-50 border border-gray-700'>
			<div className='py-1'>
				{items.map((item) => (
					<div key={item.label} className='relative group'>
						<Link
							href={item.comingSoon ? '#' : item.href}
							onClick={(e) => handleItemClick(e, item.comingSoon)}
							className={`block px-4 py-2 ${
								item.comingSoon
									? 'text-gray-500 cursor-not-allowed'
									: 'text-gray-200 hover:bg-gray-700 hover:text-white'
							}`}
						>
							<div className='flex items-center justify-between'>
								<span>{item.label}</span>
								<span className='flex items-center gap-1 ml-2'>
									{item.comingSoon && (
										<span className='h-2 w-2 rounded-full bg-red-600'></span>
									)}
									{item.children && (
										<FaChevronRight className='text-xs opacity-0 group-hover:opacity-100' />
									)}
								</span>
							</div>
						</Link>

						{item.children && (
							<div className='absolute left-full top-0 ml-1 w-56 bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-700'>
								{item.children.map((child) => (
									<Link
										key={child.label}
										href={child.comingSoon ? '#' : child.href}
										onClick={(e) => handleItemClick(e, child.comingSoon)}
										className={`block px-4 py-2 ${
											child.comingSoon
												? 'text-gray-500 cursor-not-allowed'
												: 'text-gray-200 hover:bg-gray-700 hover:text-white'
										}`}
									>
										<div className='flex items-center justify-between gap-2'>
											{child.label}

											{child.comingSoon && (
												<span className='h-2 w-2 rounded-full bg-red-600'></span>
											)}
										</div>
									</Link>
								))}
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default NavbarDropdown;
