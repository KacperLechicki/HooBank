import { quotes } from '../../assets';

import PropTypes from 'prop-types';

const FeedbackCard = ({ content, name, title, img }) => (
	<div
		className={`flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] m-3 feedback-card border-double border-4 border-slate-800`}>
		<img
			src={quotes}
			alt='double quotes'
			className='w-[42px] h-[27px] object-contain'
			loading='lazy'
		/>
		<p className=' min-h-[128px] font-poppins font-normal text-[18px] leading-[32px] text-white my-10 text-center ss:text-left'>
			{content}
		</p>

		<div className='flex ss:flex-row flex-col items-center justify-center '>
			<img
				src={img}
				alt={name}
				loading='lazy'
				className='w-[48px] h-[48px] rounded-full'
			/>

			<div className='flex flex-col ss:ml-4'>
				<h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white text-center ss:text-left'>
					{name}
				</h4>
				<p className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite text-center ss:text-left'>
					{title}
				</p>
			</div>
		</div>
	</div>
);

FeedbackCard.propTypes = {
	content: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
};

export default FeedbackCard;
