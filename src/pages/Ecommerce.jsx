import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import {
	Stacked,
	Pie,
	Button,
	LineChart,
	SparkLine,
	DownloadButton,
} from '../components';
import {
	earningData,
	medicalproBranding,
	recentTransactions,
	weeklyStats,
	dropdownData,
	SparklineAreaData,
	ecomPieChartData,
} from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.png';

const DropDown = ({ currentMode }) => (
	<div className='w-28 border-1 border-color px-2 py-1 rounded-md'>
		<DropDownListComponent
			id='time'
			fields={{ text: 'Time', value: 'Id' }}
			style={{
				border: 'none',
				color: currentMode === 'Dark' && '#a3a3a3',
			}}
			value='1'
			dataSource={dropdownData}
			popupHeight='220px'
			popupWidth='120px'
		/>
	</div>
);

export default function Ecommerce() {
	const { currentColor, currentMode } = useStateContext();
	return (
		<div className='mt-24'>
			<div className='flex flex-wrap lg:flex-nowrap justify-center '>
				<div className='bg-neutral-100 dark:bg-neutral-600 dark:text-neutral-300 h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3  drop-shadow dark:shadow-md dark:shadow-neutral-200/10'>
					<div className='flex justify-between items-center'>
						<div>
							<p className='font-bold text-xl dark:text-neutral-400 -ml-2 text-neutral-400'>
								Earnings
							</p>
							<p className='text-2xl mt-1 dark:text-neutral-300 text-neutral-700'>
								$86,541.25
							</p>
						</div>
						<button
							type='button'
							className='text-6xl text-emerald-500 hover:drop-shadow-xl rounded-full'
						>
							<BsCurrencyDollar />
						</button>
					</div>
					<DownloadButton
						color={currentColor}
						content={'Download Data'}
					/>
				</div>
				<div className='flex m-3 flex-wrap justify-center gap-2 items-center'>
					{earningData.map((item) => (
						<div
							key={item.title}
							className='bg-white drop-shadow dark:shadow-md dark:shadow-neutral-200/10 h-44 dark:text-neutral-300 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl '
						>
							<button
								type='button'
								style={{
									color: item.iconColor,
								}}
								className='text-4xl opacity-70 hover:drop-shadow-xl'
							>
								{item.icon}
							</button>
							<p style={{ color: item.pcColor }} className='mt-3'>
								<span className='text-xl text-neutral-600 dark:text-neutral-300 font-semibold'>
									{item.amount}
								</span>
								<span className={`text-sm ml-2`}>
									{item.percentage}
								</span>
							</p>
							<p className=' text-neutral-400  mt-1'>
								{item.title}
							</p>
						</div>
					))}
				</div>
			</div>
			<div className='flex gap-10 flex-wrap justify-center'>
				<div className='bg-white drop-shadow  dark:shadow-md dark:shadow-neutral-200/10 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  '>
					<div className='flex justify-between'>
						<p className='font-semibold text-neutral-600 dark:text-neutral-400 text-3xl'>
							Revenue Updates
						</p>
						<div className='flex items-center gap-4'>
							<p className='flex items-center gap-2 text-neutral-600 dark:text-neutral-300 hover:drop-shadow-xl'>
								<span>
									<GoPrimitiveDot />
								</span>
								<span>Expense</span>
							</p>
							<p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl'>
								<span>
									<GoPrimitiveDot />
								</span>
								<span>Budget</span>
							</p>
						</div>
					</div>
					<div className='mt-10 flex gap-10 flex-wrap justify-center items-center'>
						<div className=' border-r-1 border-color m-4 pr-10'>
							<div>
								<p className='text-neutral-400 text-lg font-medium mt-1 -ml-1'>
									Budget
								</p>
								<p className='flex items-center '>
									<span className='text-3xl dark:text-neutral-300 font-semibold text-neutral-600'>
										$86,561
									</span>
									<span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs '>
										19%
									</span>
								</p>
							</div>
							<div className='mt-8'>
								<p className='text-neutral-400 text-lg font-medium mt-1 -ml-1'>
									Expense
								</p>
								<p className='text-3xl font-semibold dark:text-neutral-300 text-neutral-600'>
									$39,265
								</p>
							</div>

							<div className='mt-5'>
								<SparkLine
									currentColor={currentColor}
									id='line-sparkLine'
									type='Line'
									height='80px'
									width='250px'
									data={SparklineAreaData}
									color={currentColor}
								/>
							</div>

							<DownloadButton
								color={currentColor}
								content='Download Report'
							/>
						</div>
						<div>
							<Stacked
								currentMode={currentMode}
								width='320px'
								height='360px'
							/>
						</div>
					</div>
				</div>
				<div className='flex flex-col place-content-between'>
					<div
						className='rounded-2xl md:w-400 p-4 m-3 drop-shadow dark:shadow-md dark:shadow-neutral-200/20'
						style={{ backgroundColor: currentColor }}
					>
						<div className='flex justify-between items-center '>
							<p className='font-semibold text-neutral-100 text-3xl'>
								Earnings
							</p>

							<div>
								<p className='text-3xl text-neutral-100 font-semibold mt-8'>
									$68,515
								</p>
								<p className='text-neutral-100'>
									Monthly revenue
								</p>
							</div>
						</div>

						<div className='mt-4 ml-4'>
							<SparkLine
								currentColor={currentColor}
								id='column-sparkLine'
								height='100px'
								type='Column'
								data={SparklineAreaData}
								width='320'
								color='#f5f5f5'
							/>
						</div>
					</div>

					<div className='bg-white drop-shadow dark:shadow-md dark:shadow-neutral-200/10 h-44 dark:text-neutral-300 text-neutral-600 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10'>
						<div>
							<p className='text-3xl font-semibold '>$43,246</p>
							<p className='text-neutral-400'>Yearly sales</p>
						</div>

						<div className='w-40'>
							<Pie
								id='pie-chart'
								data={ecomPieChartData}
								legendVisiblity={false}
								height='160px'
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='flex gap-10 m-4 flex-wrap justify-center'>
				<div className='bg-white drop-shadow dark:shadow-md dark:shadow-neutral-200/10 dark:text-neutral-300 text-neutral-600 dark:bg-secondary-dark-bg p-6 rounded-2xl'>
					<div className='flex justify-between items-center gap-2'>
						<p className='text-2xl font-semibold'>
							Recent Transactions
						</p>
						<DropDown currentMode={currentMode} />
					</div>
					<div className='mt-10 w-72 md:w-400'>
						{recentTransactions.map((item) => (
							<div
								key={item.title}
								className='flex justify-between items-center mt-4'
							>
								<div className='flex gap-4'>
									<button
										type='button'
										style={{
											color: item.iconColor,
										}}
										className='text-4xlmr-2 hover:drop-shadow-xl'
									>
										{item.icon}
									</button>
									<div>
										<p className='text-lg font-semibold'>
											{item.title}
										</p>
										<p className='text-sm text-neutral-400'>
											{item.desc}
										</p>
									</div>
								</div>
								<p style={{ color: item.pcColor }}>
									{item.amount}
								</p>
							</div>
						))}
					</div>
					<div className='flex justify-between items-end mt-5 border-t-2 border-neutral-400'>
						<p className='text-neutral-400'>
							24 Recent Transactions
						</p>
						<div className='mt-3'>
							<Button
								color='#f5f5f5'
								bgColor={currentColor}
								text='Add'
								borderRadius='9999px'
								size='xl'
								weight='semibold'
								width='6.5rem'
							/>
						</div>
					</div>
				</div>
				<div className='bg-white text-neutral-600 drop-shadow dark:shadow-md dark:shadow-neutral-200/10 dark:text-neutral-300 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760'>
					<div className='flex justify-between items-center gap-2 mb-10'>
						<p className='text-2xl font-semibold'>Sales Overview</p>
						<DropDown currentMode={currentMode} />
					</div>
					<div className='md:w-full overflow-auto'>
						<LineChart />
					</div>
				</div>
			</div>
			<div className='flex flex-wrap justify-center'>
				<div className='md:w-400 bg-white dark:bg-secondary-dark-bg text-neutral-600 drop-shadow dark:shadow-md dark:shadow-neutral-200/10 dark:text-neutral-300 rounded-2xl p-6 m-3 flex flex-col justify-between '>
					<div>
						<div className='flex justify-between items-end'>
							<p className='text-2xl font-semibold'>
								Weekly Stats
							</p>
							<button
								type='button'
								className='text-xl font-semibold text-neutral-400'
							>
								<IoIosMore />
							</button>
						</div>

						{weeklyStats.map((item) => (
							<div
								key={item.title}
								className='flex justify-between items-center mt-8'
							>
								<div className='flex gap-4'>
									<button
										type='button'
										className='text-4xl text-neutral-400  mr-2 hover:drop-shadow-xl'
									>
										{item.icon}
									</button>
									<div>
										<p className='text-lg font-semibold'>
											{item.title}
										</p>
										<p className='text-sm text-neutral-400'>
											{item.desc}
										</p>
									</div>
								</div>
								<p style={{ color: item.pcColor }}>
									{item.amount}
								</p>
							</div>
						))}
					</div>
					<div className='mx-auto'>
						<SparkLine
							currentColor={currentColor}
							id='area-sparkLine'
							height='160px'
							type='Area'
							data={SparklineAreaData}
							width='320'
							color='rgba(242, 252, 253,0.5)'
						/>
					</div>
				</div>
				<div className='flex flex-col justify-between  w-400 bg-white dark:text-neutral-300 text-neutral-600 drop-shadow dark:shadow-md dark:shadow-neutral-200/10    dark:bg-secondary-dark-bg rounded-2xl p-6 m-3'>
					<div className='flex justify-between items-end'>
						<p className='text-2xl font-semibold'>
							MedicalPro Branding
						</p>
						<button
							type='button'
							className='text-xl  text-neutral-400'
						>
							<IoIosMore />
						</button>
					</div>
					<p
						style={{ backgroundColor: currentColor }}
						className='cursor-pointer hover:drop-shadow-xl whitespace-nowrap rounded-lg py-1 px-2 text-neutral-100 mt-10 w-[7.2rem] inline-flex justify-self-center'
					>
						16 APR, 2021
					</p>

					<div className='flex gap-4 border-b-2 border-neutral-400 mt-6'>
						{medicalproBranding.data.map((item) => (
							<div
								key={item.title}
								className='border-r-2 border-neutral-400 pr-4 pb-2'
							>
								<p className='text-sm text-neutral-400'>
									{item.title}
								</p>
								<p className='text-sm font-medium'>
									{item.desc}
								</p>
							</div>
						))}
					</div>
					<div className='pb-4 mt-2 border-b-2 border-neutral-400'>
						<p className='text-xl font-semibold mb-2'>Teams</p>

						<div className='flex gap-4'>
							{medicalproBranding.teams.map((item) => (
								<p
									key={item.name}
									style={{ background: item.color }}
									className='cursor-pointer hover:drop-shadow-xl text-neutral-100 py-1 px-3 rounded-lg'
								>
									{item.name}
								</p>
							))}
						</div>
					</div>
					<div className='mt-2'>
						<p className='text-xl font-semibold mb-2'>Leaders</p>
						<div className='flex justify-between'>
							{medicalproBranding.leaders.map((item, index) => (
								<img
									key={index}
									className='rounded-full w-10 h-10 mt-2'
									src={item.image}
									alt=''
								/>
							))}
						</div>
					</div>
					<div className='flex justify-between items-end border-t-2 border-neutral-400'>
						<p className='text-neutral-400'>
							19 Recent Transactions
						</p>
						<div className='mt-3'>
							<Button
								color='#f5f5f5'
								bgColor={currentColor}
								text='Add'
								borderRadius='9999px'
								size='xl'
								weight='semibold'
								width='6.5rem'
							/>
						</div>
					</div>
				</div>
				<div className='w-400 bg-white text-neutral-600 drop-shadow dark:shadow-md dark:shadow-neutral-200/10 dark:text-neutral-300 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3'>
					<div className='flex justify-between items-end'>
						<p className='text-2xl font-semibold'>
							Daily Activities
						</p>
						<button
							type='button'
							className='text-xl font-semibold text-neutral-400'
						>
							<IoIosMore />
						</button>
					</div>
					<div className='mt-10'>
						<img
							className='md:w-96 h-50 rounded-lg '
							src={product9}
							alt=''
						/>
						<div className='mt-8'>
							<p className='font-bold text-xl'>
								React 19 coming soon!
							</p>
							<p className='text-neutral-400 '>By John Doe</p>
							<p className='mt-8 text-sm font-medium text-neutral-400'>
								This will be the small description for the news
								you have shown here. There could be some great
								info.
							</p>
							<div className='mt-3 flex justify-end'>
								<Button
									color='#f5f5f5'
									bgColor={currentColor}
									text='Read More'
									borderRadius='9999px'
									size='xl'
									weight='semibold'
									width='9.5rem'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
