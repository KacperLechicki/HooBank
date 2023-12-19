import React from 'react';

import { close, logo, menu } from '../../assets';
import { navLinks } from '../../constants';

const Navbar = () => {
	const [toggle, setToggle] = React.useState(false);

	return (
		<nav className='w-full flex py-6 justify-between items-center navbar'>
			<img
				src={logo}
				alt='HooBank logo'
				loading='lazy'
				className='w-[124px] h-[32px]'
			/>

			<ul className='list-none sm:flex hidden justify-end items-center flex-1'>
				{navLinks.map((navLink, index) => (
					<li
						key={index}
						className={`font-poppins font-normal cursor-pointer text-[16px] ${
							index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
						} text-white`}>
						<a href={`#${navLink.id}`}>{navLink.title}</a>
					</li>
				))}
			</ul>

			<div className='sm:hidden flex flex-1 justify-end items-center'>
				<img
					src={toggle ? close : menu}
					alt='menu image'
					className='w-[24px] h-[24px] object-contain'
					onClick={(prev) => setToggle(!prev)}
				/>
			</div>
		</nav>
	);
};

export default Navbar;
