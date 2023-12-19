import styles from '../../styles';
import { stats } from '../../constants';
import './Stats.scss';

const Stats = () => (
	<section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
		{stats.map((stat, index) => (
			<div
				key={index}
				className={`flex flex-1 justify-start items-center flex-row m-3 min-w-[300px]`}>
				<h4 className='font-poppins flex-semibold xs:text-[36px] text-[26px] xs:leading-[53px] leading-[43px] text-white'>
					{stat.value}
				</h4>
				<p className='font-poppins flex-normal xs:text-[18px] text-[16px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>
					{stat.title}
				</p>
			</div>
		))}
	</section>
);

export default Stats;
