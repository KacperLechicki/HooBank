import { features } from '../../constants';
import PropTypes from 'prop-types';
import styles from '../../styles';

const FeatureCard = ({ icon, title, content, index }) => (
	<div
		className={`flex w-full flex-row py-6 px-3 rounded-[20px] border-double border-4 border-slate-800 ${
			index !== features.length - 1 ? 'mb-6' : 'mb-0'
		} feature-card`}>
		<div
			className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
			<img
				src={icon}
				alt='icon'
				className='w-[50%] h-[50%] object-contain'
				loading='lazy'
			/>
		</div>
		<div className='flex flex-1 flex-col ml-5'>
			<h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
				{title}
			</h4>
			<p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>
				{content}
			</p>
		</div>
	</div>
);

FeatureCard.propTypes = {
	icon: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
};

export default FeatureCard;
