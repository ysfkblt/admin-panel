import React from 'react';

import { Header, Stacked as StackedChart } from '../../components';

export default function Stacked() {
	return (
		<div className='m-4 md:m-10 mt-24 p-10 bg-white drop-shadow  dark:shadow-md dark:shadow-neutral-200/10 dark:bg-secondary-dark-bg rounded-3xl'>
			<Header category='Stacked' title='Revenue Breakdown' />
			<div className='w-full'>
				<StackedChart />
			</div>
		</div>
	);
}
