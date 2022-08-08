import React from 'react';
import {
	AccumulationChartComponent,
	AccumulationSeriesCollectionDirective,
	AccumulationSeriesDirective,
	Inject,
	AccumulationLegend,
	AccumulationDataLabel,
	AccumulationTooltip,
	PyramidSeries,
	AccumulationSelection,
} from '@syncfusion/ej2-react-charts';

import { PyramidData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { Header } from '../../components';

export default function Pyramid() {
	const { currentMode } = useStateContext();

	return (
		<div className='m-4 md:m-10 mt-24  p-10 bg-white  drop-shadow  dark:shadow-md dark:shadow-neutral-200/10 dark:bg-secondary-dark-bg rounded-3xl'>
			<Header category='Pyramid' title='Food Comparison Chart' />
			<div className='w-full'>
				<AccumulationChartComponent
					id='pyramid-chart'
					legendSettings={{ background: 'white' }}
					tooltip={{ enable: true }}
					background={currentMode === 'Dark' ? '#404040' : '#fff'}
				>
					<Inject
						services={[
							AccumulationDataLabel,
							AccumulationTooltip,
							PyramidSeries,
							AccumulationLegend,
							AccumulationSelection,
						]}
					/>
					<AccumulationSeriesCollectionDirective>
						<AccumulationSeriesDirective
							name='Food'
							dataSource={PyramidData}
							xName='x'
							yName='y'
							type='Pyramid'
							width='45%'
							height='80%'
							neckWidth='15%'
							gapRatio={0.03}
							explode
							emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
							dataLabel={{
								visible: true,
								position: 'Inside',
								name: 'text',
							}}
						/>
					</AccumulationSeriesCollectionDirective>
				</AccumulationChartComponent>
			</div>
		</div>
	);
}
