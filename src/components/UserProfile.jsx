import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { Button } from '.';
import { userProfileData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/avatar.jpg';

export default function UserProfile() {
	const { currentColor, setIsClicked, initialState } = useStateContext();
	return (
		<div>
			<div className='nav-item absolute right-3 drop-shadow-lg dark:shadow-md dark:shadow-neutral-200/30 top-16 bg-neutral-50 dark:bg-neutral-600 dark:text-neutral-300 text-neutral-600 p-8 rounded-lg w-[26rem] '>
				<div className='flex justify-end'>
					<button
						onClick={() => setIsClicked(initialState)}
						className='hover:scale-125'
						type='button'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-9 w-9'
							fill='none'
							viewBox='0 0 24 24'
							stroke={currentColor}
							strokeWidth={3}
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M6 18L18 6M6 6l12 12'
							/>
						</svg>
					</button>
				</div>
				<div className='flex gap-5 items-center mt-6 border-color border-b-2 pb-6'>
					<img
						className={`rounded-full h-24 w-24`}
						src={avatar}
						alt='user-profile'
					/>
					<div>
						<p className='font-bold whitespace-nowrap text-3xl'>
							Michael Roberts
						</p>
						<p className='text-xl'> Administrator </p>
						<p className='text-sm'>michael@shopapp.com</p>
					</div>
				</div>
				<div>
					{userProfileData.map((item, index) => (
						<div
							key={index}
							className='flex border-b-2 border-color p-4 hover:bg-neutral-100 cursor-pointer  dark:hover:bg-neutral-700 '
						>
							<div className=''>
								<p className='font-semibold text-2xl  '>
									{item.title}
								</p>
								<p className='text-neutral-400'>{item.desc}</p>
							</div>
						</div>
					))}
				</div>
				<div className='mt-5'>
					<Button
						color='#f5f5f5'
						bgColor={currentColor}
						text='Logout'
						borderRadius='9999px'
						width='full'
						size='xl'
						weight='semibold'
					/>
				</div>
			</div>
		</div>
	);
}
