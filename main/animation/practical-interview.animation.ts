
export const fadeInUp = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
	exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

export const fadeInLeft = {
	hidden: { opacity: 0, x: -20 },
	visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export const fadeIn = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
};

export const scaleIn = {
	hidden: { scale: 0.95, opacity: 0 },
	visible: {
		scale: 1,
		opacity: 1,
		transition: { duration: 0.3, ease: 'easeOut' },
	},
};

export const rotate = {
	animate: {
		rotate: 360,
		transition: {
			duration: 1.5,
			repeat: Infinity,
			ease: 'linear',
		},
	},
};

export const listItemVariants = {
	hidden: { opacity: 0, y: 10 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.05,
			duration: 0.4,
			ease: 'easeOut',
		},
	}),
	exit: { opacity: 0, y: 10, transition: { duration: 0.2 } },
};

export const activeIndicatorVariants = {
	hidden: { width: '0%', opacity: 0 },
	visible: {
		width: '100%',
		opacity: 1,
		transition: {
			duration: 0.4,
			ease: 'easeOut',
		},
	},
	exit: { width: '0%', opacity: 0 },
};
