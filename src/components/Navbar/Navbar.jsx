import { close, logo, menu } from '../../assets';
import { navLinks } from '../../constants';

const Navbar = () => {
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
		</nav>
	);
};

export default Navbar;
