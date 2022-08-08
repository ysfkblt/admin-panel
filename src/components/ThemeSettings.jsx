import React from 'react';
import { HiCheck } from 'react-icons/hi';
import { themeColors } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

export default function ThemeSettings() {
	const { setThemeSettings, setColor, setMode, currentMode, currentColor } =
		useStateContext();

	return (
		<div
			onClick={() => setThemeSettings(false)}
			className='bg-half-transparent w-screen fixed nav-item top-0 right-0 text-neutral-600'
		>
			<div className='float-right h-screen dark:text-neutral-300  bg-stone-50 dark:bg-[#404040] w-400'>
				<div className='flex justify-between items-center mt-1 p-4 ml-4'>
					<p className='font-bold uppercase  text-xl -ml-2 '>
						Settings
					</p>
					<button
						type='button'
						onClick={() => setThemeSettings(false)}
						className='p-3 hover:text-red-400'
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
				<div className='flex-col flex border-t-1 border-color p-4 mx-4 text-lg font-medium'>
					<p className=' text-2xl font-semibold -ml-2 '>
						Theme Options
					</p>

					<div className='mt-2 inline-flex items-center '>
						<input
							type='radio'
							id='light'
							name='theme'
							value='Light'
							className='w-5 h-5 border-neutral-300  dark:bg-neutral-700 dark:border-neutral-600 cursor-pointer'
							onChange={setMode}
							checked={currentMode === 'Light'}
						/>
						<label htmlFor='light' className=' ml-1 font-medium'>
							Light
						</label>
					</div>
					<div className='mt-2 inline-flex items-center '>
						<input
							type='radio'
							id='dark'
							name='theme'
							value='Dark'
							className='w-5 h-5 border-neutral-300  dark:bg-neutral-700 dark:border-neutral-600 cursor-pointer'
							onChange={setMode}
							checked={currentMode === 'Dark'}
						/>
						<label htmlFor='dark' className=' ml-1 font-medium'>
							Dark
						</label>
					</div>
				</div>
				<div className='p-4 border-t-1 border-color mx-4'>
					<p className='font-semibold text-2xl -ml-2'>Theme Colors</p>
					<div className='flex gap-7 mt-4 '>
						{themeColors.map((item) => (
							<button
								key={item.name}
								type='button'
								className='h-9 w-9 rounded-full cursor-pointer'
								style={{ backgroundColor: item.color }}
								onClick={() => setColor(item.color)}
							>
								<HiCheck
									className={` m-auto text-2xl text-white ${
										item.color === currentColor
											? 'block'
											: 'hidden'
									}`}
								/>
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
