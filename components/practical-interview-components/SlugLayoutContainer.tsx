'use client';
import React, { useEffect } from 'react';
import { ISlugLayoutProps } from '@/main/types/practical-interview.types';
import { useSidebarStore } from '@/main/zustand/store/useSidebarStore';
import SideBarButton from "../utilsComponent/button-components/SideBarButton";
const SlugLayoutContainer: React.FC<ISlugLayoutProps> = ({ child, sideBar }) => {
	const { isSidebarOpen, isMobile,  closeSidebar, setMobile } =	useSidebarStore();

	useEffect(() => {
		const checkIfMobile = () => setMobile(window.innerWidth < 768);
		checkIfMobile();
		window.addEventListener('resize', checkIfMobile);
		return () => window.removeEventListener('resize', checkIfMobile);
	}, [setMobile]);

	useEffect(() => {
		if (isMobile) closeSidebar();
	}, [isMobile, closeSidebar]);

	return (
		<section className='min-h-screen flex w-full relative flex-1'>
			<aside
				className={`sticky top-0 h-screen border-r lg:border-r-0 overflow-y-auto transition-all duration-300 ease-in-out z-30
						${
							isSidebarOpen
								? 'w-96 max-md:fixed max-md:left-0 max-md:w-full max-md:shadow-xl'
								: 'max-md:fixed max-md:-left-full w-20 border-0'
						}
					`}
			>
				{sideBar}
			</aside>

			{/* Main Content */}
			<div className={`flex-1 transition-all duration-300 bg-gray-950/50  `}>
				<div>{isMobile && <SideBarButton />}</div>

				<main className='p-6 pt-16 max-md:pt-20'>{child}</main>
			</div>
		</section>
	);
};

export default SlugLayoutContainer;
