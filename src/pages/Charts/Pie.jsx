import React from 'react';

import { pieChartData } from '../../data/dummy';
import { Header, Pie as PieChart } from '../../components';

export default function Pie() {
	return (
		<div className='m-4 md:m-10 mt-24 p-10 bg-white drop-shadow  dark:shadow-md dark:shadow-neutral-200/10 dark:bg-secondary-dark-bg rounded-3xl'>
			<Header category='Pie' title='Project Cost Breakdown' />
			<div className='w-full'>
				<PieChart
					id='chart-pie'
					data={pieChartData}
					legendVisiblity
					height='full'
				/>
			</div>
		</div>
	);
}
