import { feedback } from '../../constants';
import styles from '../../styles';
import FeedbackCard from '../FeedbackCard/FeedbackCard';

const Feedback = () => (
	<section
		id='clients'
		className={`${styles.paddingTY} mt-10 ${styles.flexCenter} flex-col relative`}>
		<div className='absolute z-[0] w-[30%] h-[30%] -right-[50%] rounded-full blue__gradient' />
		<div className='absolute z-[0] w-[45%] h-[45%] -left-[30%] rounded-full pink__gradient' />

		<div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
			<h2 className={`${styles.heading2} text-center ss:text-left`}>
				What people are <br className='sm:block hidden' /> saying about us
			</h2>
			<div className='w-full'>
				<p
					className={`${styles.paragraph}  w-full mt-5 ss:text-left text-center`}>
					Everything you need to ccept card payments and grow your business
					anywhere on the planet.
				</p>
			</div>
		</div>

		<div className='flex flex-wrap justify-center w-full feedback-container relative z-[1]'>
			{feedback.map((card, index) => (
				<FeedbackCard key={index} {...card} />
			))}
		</div>
	</section>
);

export default Feedback;
