/* eslint-disable react-refresh/only-export-components */
import styles from '../../styles';
import Button from '../Button/Button';

const CTA = () => (
	<section
		className={`${styles.flexCenter} mt-10 ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
		<div className='flex flex-1 flex-col'>
			<h2
				className={`font-poppins font-semibold xs:text-[48px] text-[40px] text-white w-full text-center ss:text-left leading-[56px]`}>
				Let&apos;s try our service now!
			</h2>
			<p
				className={`${styles.paragraph} ss:max-w-[470px] w-full mt-5 text-center ss:text-left`}>
				Everything you need to accept card payments and grow your business
				anywhere on the planet.
			</p>
		</div>

		<div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
			<Button styles='ss:mr-auto s::ml-0 mx-auto ss:ml-0 ss:mr-auto' />
		</div>
	</section>
);

export default CTA;
