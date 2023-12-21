import styles from '../../styles';
import { logo } from '../../assets';
import { footerLinks, socialMedia } from '../../constants';

const Footer = () => (
	<section className={`${styles.flexCenter} pt-6 flex-col mt-20`}>
		<div
			className={`${styles.flexCenter} ss:items-start d:flex-row flex-col mb-8 w-full`}>
			<img
				src={logo}
				alt='hoobank logo'
				loading='lazy'
				className='w-[266px] h-[72px] object-contain'
			/>
			<p className={`${styles.paragraph} w-full mt-5 text-center ss:text-left`}>
				A new way to make the payments easy, reliable and secure
			</p>
		</div>

		<div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap mt-5'>
			{footerLinks.map((link, index) => (
				<div key={index} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
					<h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
						{link.title}
					</h4>
					<ul className='list-none mt-4'>
						{link.links.map((link2, index2) => (
							<li
								key={index2}
								className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
									index2 !== link.links.length - 1 ? 'mb-4' : 'mb-0'
								}`}>
								{link2.name}
							</li>
						))}
					</ul>
				</div>
			))}
		</div>

		<div className='mt-10 w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
			<p className='font-poppins font-normal text-center text-[14px] leading-[27px] text-white'>
				Copyright Ⓒ {new Date().getFullYear()} HooBank. All Rights Reserved.
			</p>

			<div className='flex flex-row md:mt-0 mt-6'>
				{socialMedia.map((social, index) => (
					<img
						key={social.id}
						src={social.icon}
						alt={social.id}
						className={`w-[21px] h-[21px] object-contain cursor-pointer ${
							index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
						}`}
						onClick={() => window.open(social.link)}
					/>
				))}
			</div>
		</div>
	</section>
);

export default Footer;
