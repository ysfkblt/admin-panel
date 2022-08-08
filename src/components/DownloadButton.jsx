import React from 'react';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { HiOutlineDocumentDownload } from 'react-icons/hi';

export default function DownloadButton({ color, content }) {
	return (
		<TooltipComponent content={content} position='TopLeft'>
			<div
				style={{ color }}
				className={` mt-8 text-4xl  cursor-pointer `}
			>
				<HiOutlineDocumentDownload />
			</div>
		</TooltipComponent>
	);
}
