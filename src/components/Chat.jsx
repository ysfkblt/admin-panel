import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { Button } from '.';
import { chatData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

export default function Chat() {
	const { currentColor, setIsClicked, initialState } = useStateContext();

	return (
		<div className='nav-item absolute right-5 md:right-64 top-16 drop-shadow-lg dark:shadow-md dark:shadow-neutral-200/30  bg-neutral-50 dark:bg-neutral-600 dark:text-neutral-300 text-neutral-600 p-8 rounded-lg w-[26rem] whitespace-nowrap'>
			<div className='flex justify-between items-center'>
				<div className='flex gap-3'>
					<p className='font-semibold text-3xl '>Messages</p>
				</div>
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
			<div className='mt-5 '>
				{chatData?.map((item, index) => (
					<div
						key={index}
						className='flex items-center gap-5 border-b-1 border-color p-3 leading-8 cursor-pointer'
					>
						<div className='relative'>
							<img
								className='rounded-full h-12 w-12'
								src={item.image}
								alt={item.message}
							/>
							<span
								style={{ background: item.dotColor }}
								className='absolute inline-flex rounded-full h-2 w-2 right-0 -top-1'
							/>
						</div>
						<div>
							<p className='font-semibold text-xl '>
								{item.message}
							</p>
							<p className='text-neutral-400'>{item.desc}</p>
							<p className='text-sm text-neutral-300'>
								{item.time}
							</p>
						</div>
					</div>
				))}
				<div className='mt-5'>
					<Button
						color='#f5f5f5'
						bgColor={currentColor}
						text='See all messages'
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
