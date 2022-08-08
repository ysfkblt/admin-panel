import React from 'react';

import { useStateContext } from '../contexts/ContextProvider';

const Button = ({
	icon,
	bgColor,
	color,
	bgHoverColor,
	size,
	text,
	borderRadius,
	width,
	weight,
	mTop,
}) => {
	const { setIsClicked, initialState } = useStateContext();

	return (
		<button
			type='button'
			onClick={() => setIsClicked(initialState)}
			style={{ backgroundColor: bgColor, color, borderRadius, width }}
			className={` text-${size} font-${weight} p-2 mt-${mTop}  w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
		>
			{icon} {text}
		</button>
	);
};

export default Button;
