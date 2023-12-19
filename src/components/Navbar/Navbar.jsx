import React from 'react';

import { close, logo, menu } from '../../assets';
import { navLinks } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
	const [toggle, setToggle] = React.useState(false);

	React.useEffect(() => {
		if (toggle) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}, [toggle]);

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
						className={`nav-item font-poppins font-normal cursor-pointer text-[16px] ${
							index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
						} text-white`}>
						<a href={`#${navLink.id}`}>{navLink.title}</a>
					</li>
				))}
			</ul>

			<div className='sm:hidden flex flex-1 justify-end items-center z-[5]'>
				<img
					src={toggle ? close : menu}
					alt='menu image'
					className='w-[20px] h-[20px] object-contain z-[5]'
					onClick={() => setToggle((prev) => !prev)}
				/>

				<div
					className={`fixed inset-0 bg-black opacity-50 ${
						toggle ? 'block' : 'hidden'
					}`}
				/>
				<div
					className={`${
						toggle ? 'flex' : 'hidden'
					} p-6 bg-primary border border-white absolute top-20 right-0 mx-4 my-2 min-w-[280px] rounded-xl sidebar z-[5]`}>
					<ul className='list-none flex flex-col justify-end items-center flex-1 '>
						{navLinks.map((navLink, index) => (
							<li
								onClick={() => setToggle((prev) => !prev)}
								key={index}
								className={`font-poppins font-normal cursor-pointer text-[16px] ${
									index === navLinks.length - 1 ? 'mb-0' : 'mb-4'
								} text-white`}>
								<a href={`#${navLink.id}`}>{navLink.title}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
