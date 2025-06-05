'use client'
import { usePathname, useSelectedLayoutSegment } from 'next/navigation';

export const useActiveLinkHook = () => {
	const pathname = usePathname();
	const selectedSegment = useSelectedLayoutSegment();

	const getActiveStatus = (link: string) => {
		return pathname === link || selectedSegment === link.split('/')[1];
	};

	return {
		getActiveStatus,
	};
};
