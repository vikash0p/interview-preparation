import React from 'react';
import Navbar from './Navbar';
import ScrollToTop from '../global-components/ScrollToTop';
import { MobileNav } from './MobileNav';
import { MobileTopBar } from "../mobile-components/MobileTopBar";

interface mainLayoutProps {
	readonly children: React.ReactNode;
}

const MainLayout: React.FC<mainLayoutProps> = ({ children }) => {
	return (
		<React.Fragment>
      <MobileTopBar />
			<Navbar />
			<MobileNav />
			<main>{children}</main>
			<ScrollToTop />
		</React.Fragment>
	);
};

export default MainLayout;
