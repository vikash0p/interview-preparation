'use client';
import { Link } from 'next-view-transitions';
import AnimatedBackground from './AnimatedBackground';
import Image from 'next/image';
import { links } from '@/main/data/common/links';
import { useActiveLinkHook } from '@/main/hooks/useActiveLinkHook';

function Navbar() {
	const { getActiveStatus } = useActiveLinkHook();

	return (
		<div className=' hidden lg:block z-20  bg-gradient-to-b from-gray-900 to-gray-900 lg:px-2 xl:px-0  py-4 sticky top-0 left-0 right-0  border-b-2 border-gray-800 '>
			<div className=' max-w-7xl m-auto flex flex-row gap-6 justify-between items-center '>
				<div className='flex items-center text-white text-2xl font-bold'>
					<Link
						href='/'
						className='no-underline text-white hover:text-gray-300 flex items-center gap-2'
					>
						<Image
							src={'/favicon/interViewPraplogo.png'}
							alt='logo'
							className='w-10 backdrop-hue-rotate-180 xl:w-14 xl:h-14  object-contain bg-[#111827]'
							width={300}
							height={500}
						/>
						<p className='lg:2xl xl:text-3xl font-semibold text-gray-200 '>
							InterViewPrap
						</p>
					</Link>
				</div>
				<div className='space-x-4'>
					<AnimatedBackground
						className='rounded-lg bg-white transition-all'
						transition={{
							type: 'spring',
							bounce: 0.2,
							duration: 0.3,
						}}
						enableHover
					>
						{links.map((tab) => {
							return (
								<Link
									href={tab.link}
									key={tab.id}
									data-id={tab.link}
									className={`xl:px-5 lg:px-3 py-2 text-md transition-colors duration-300 no-underline ${
										getActiveStatus(tab.link)
											? 'bg-white text-black rounded-lg'
											: 'text-gray-300 hover:text-black'
									}`}
								>
									{tab.name}
								</Link>
							);
						})}
					</AnimatedBackground>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
