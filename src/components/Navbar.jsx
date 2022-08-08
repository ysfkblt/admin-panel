import React from 'react';
import { HiMenuAlt4, HiOutlineChatAlt2, HiOutlineBell } from 'react-icons/hi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import avatar from '../data/avatar.jpg';
import { Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

function NavButton({ color, chandler, dotColor, icon }) {
	return (
		<button
			type='button'
			onClick={chandler}
			style={{ color }}
			className='relative text-4xl rounded-full p-3 hover:opacity-70'
		>
			<span
				style={{ background: dotColor }}
				className='absolute inline-flex rounded-full h-[8px] w-[8px] right-2 top-3'
			/>
			{icon}
		</button>
	);
}

export default function Navbar() {
	const { activeMenu, setActiveMenu, isClicked, handleClick, currentColor } =
		useStateContext();

	const handlerMenu = () => setActiveMenu(!activeMenu);

	return (
		<div className='flex justify-between p-2 md:ml-6 md:mr-6 relative'>
			<NavButton
				color={currentColor}
				chandler={handlerMenu}
				icon={<HiMenuAlt4 />}
			/>
			<div className='flex gap-3'>
				<NavButton
					dotColor='#fb923c'
					chandler={() => handleClick('chat')}
					color={currentColor}
					icon={<HiOutlineChatAlt2 />}
				/>
				<NavButton
					dotColor='#fb923c'
					chandler={() => handleClick('notification')}
					color={currentColor}
					icon={<HiOutlineBell />}
				/>

				<div
					className='flex items-center gap-2 cursor-pointer p-1 dark:hover:bg-neutral-700 hover:bg-neutral-100 rounded-lg'
					onClick={() => handleClick('userProfile')}
				>
					<img
						className='rounded-full w-10 h-10'
						src={avatar}
						alt='user-profile'
					/>
					<p>
						<span className='text-neutral-400 text-lg font-light'>
							Hi,
						</span>{' '}
						<span className='text-neutral-400 text-lg ml-1 font-medium'>
							Michael
						</span>
					</p>
					<MdKeyboardArrowDown className='text-neutral-400 text-lg' />
				</div>

				{isClicked.chat && <Chat />}
				{isClicked.notification && <Notification />}
				{isClicked.userProfile && <UserProfile />}
			</div>
		</div>
	);
}
