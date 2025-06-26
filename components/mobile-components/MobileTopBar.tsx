'use client';
import useUserHook from "@/main/hooks/useUserHook";
import { User } from 'lucide-react';
import { Link } from "next-view-transitions";
import Image from "next/image";
import React from 'react';



export const MobileTopBar = () => {
	const {user}=useUserHook();
	return (
		<div className='  border-gray-800 lg:hidden  flex justify-between items-center px-1 pt-3'>
			<Link href='/' className='flex items-center' aria-label='Home'>
				<Image
					src={'/favicon/interViewPraplogo.png'}
					alt='logo'
					className='size-10 '
					width={40}
					height={40}
				/>
				<h1 className='font-semibold text-xl ps-1'>InterViewPrap</h1>
			</Link>

			{user ? (
				<Link href='/profile' className='block'>
					<Image
						src={user.avatar}
						alt='User Avatar'
						className='w-10 h-10 rounded-full object-cover border border-gray-600'
						width={40}
						height={40}
					/>
				</Link>
			) : (
				<Link
					href={'/login'}
					className='flex items-center gap-1 px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors bg-gradient-to-r from-gray-950 to-gray-800  rounded-sm'
					aria-label='Login'
				>
					<User className='h-4 w-4' />
					<span>Login</span>
				</Link>
			)}
		</div>
	);
};
