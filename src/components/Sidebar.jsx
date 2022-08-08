import React, { useEffect } from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import { Link, NavLink } from 'react-router-dom';
import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

export default function Sidebar() {
	const {
		activeMenu,
		setActiveMenu,
		screenSize,
		setScreenSize,
		currentColor,
	} = useStateContext();

	const activeLink =
		'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-lg m-2';
	const normalLink =
		'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-lg text-neutral-600 dark:text-neutral-300 dark:hover:text-black hover:bg-light-gray m-2';

	const closeBar = () => {
		if (activeMenu && screenSize <= 900) {
			setActiveMenu(false);
		}
	};

	useEffect(() => {
		const handleResize = () =>
			window.addEventListener('rsz', setScreenSize(window.innerWidth));

		handleResize();

		return () => window.removeEventListener('rsz', handleResize);
	}, [setScreenSize]);

	useEffect(() => {
		screenSize <= 900 ? setActiveMenu(false) : setActiveMenu(true);
	}, [screenSize, setActiveMenu]);

	return (
		<div className='ml-3 h-screen  overflow-auto md:overflow-hidden md:hover:overflow-auto pb-10'>
			{activeMenu && (
				<>
					<div className='flex items-center justify-between mt-2'>
						<Link
							onClick={closeBar}
							to='/'
							className='items-center gap-3 ml-3 flex text-3xl font-bold tracking-tight dark:text-neutral-300 text-neutral-800'
						>
							<BiShoppingBag className='w-8 h-8' />
							<span className='mt-[5px] -ml-[9px]'>Shop App</span>
						</Link>
						<button
							onClick={() => setActiveMenu(!activeMenu)}
							className={`p-3 dark:text-neutral-300 dark:hover:text-red-400 pt-4 md:hidden`}
							type='button'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-7 w-7'
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
					<div className='mt-10'>
						{links.map((l) => (
							<div key={l.title}>
								<p className='uppercase font-semibold text-neutral-400 text-xl dark:text-neutral-400 mt-4 m-3'>
									{l.title}
								</p>
								{l.links.map((link) => (
									<NavLink
										to={`/${link.name}`}
										key={link.name}
										onClick={closeBar}
										style={({ isActive }) => ({
											color: isActive ? currentColor : '',
										})}
										className={({ isActive }) =>
											isActive ? activeLink : normalLink
										}
									>
										{link.icon}
										<span className='capitalize text-xl '>
											{link.name}
										</span>
									</NavLink>
								))}
							</div>
						))}
					</div>
				</>
			)}
		</div>
	);
}
