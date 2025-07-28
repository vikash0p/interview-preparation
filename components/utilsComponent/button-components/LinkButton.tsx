'use client';
import { Link } from "next-view-transitions";

interface LinkButtonProps {
	href: string;
	children: React.ReactNode;
	ariaLabel: string;
	variant?: 'primary' | 'outline';
}

export default function LinkButton({	href,	children,	ariaLabel,	variant = 'primary',}: LinkButtonProps) {
	const baseClasses =
		'px-8 py-4 text-center font-semibold rounded-lg transition-transform md:hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400';

	const variantClasses =
		variant === 'primary'
			? 'bg-indigo-600 text-white hover:bg-indigo-700'
			: 'border border-white hover:bg-indigo-700 hover:text-white';

	const combinedClasses = `${baseClasses} ${variantClasses}`;

	return (
		<Link href={href} aria-label={ariaLabel} className={combinedClasses}>
			{children}
		</Link>
	);
}
