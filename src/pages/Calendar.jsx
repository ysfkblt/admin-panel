import React from 'react';
import {
	ScheduleComponent,
	Day,
	Week,
	WorkWeek,
	Month,
	Agenda,
	Inject,
	Resize,
	DragAndDrop,
} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from '../data/dummy';
import { Header } from '../components';

export default function Scheduler() {
	return (
		<div className='m-2 drop-shadow md:m-10 mt-24 p-2 md:p-10 bg-stone-50 rounded-3xl'>
			<Header category='App' title='Calendar' />
			<ScheduleComponent
				height='650px'
				selectedDate={new Date(2021, 0, 10)}
				eventSettings={{ dataSource: scheduleData }}
			>
				<Inject
					services={[
						Day,
						Week,
						WorkWeek,
						Month,
						Agenda,
						Resize,
						DragAndDrop,
					]}
				/>
			</ScheduleComponent>
		</div>
	);
}
