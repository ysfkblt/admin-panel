import React from 'react';
import {
	KanbanComponent,
	ColumnsDirective,
	ColumnDirective,
} from '@syncfusion/ej2-react-kanban';
import { kanbanData, kanbanGrid } from '../data/dummy';
import { Header } from '../components';

export default function Kanban() {
	return (
		<div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-stone-50 drop-shadow rounded-3xl'>
			<Header category='App' title='Kanban' />
			<KanbanComponent
				keyField='Status'
				id='kanban'
				cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
				dataSource={kanbanData}
			>
				<ColumnsDirective>
					{kanbanGrid.map((item, index) => (
						<ColumnDirective key={index} {...item} />
					))}
				</ColumnsDirective>
			</KanbanComponent>
		</div>
	);
}
