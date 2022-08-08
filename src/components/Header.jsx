import React from 'react';

const Header = ({ category, title }) => (
	<div className=' mb-10 ml-2 md:ml-0 mt-2 md:mt-0'>
		<p className='text-xl font-medium -ml-1 text-neutral-400'>{category}</p>
		<p className='text-3xl font-extrabold tracking-tight dark:text-neutral-300 text-neutral-600 ml-1'>
			{title}
		</p>
	</div>
);

export default Header;
