import { card } from '../../assets';
import styles, { layout } from '../../styles';
import Button from '../Button/Button';

const CardDeal = () => (
	<section className={`${layout.section}`}>
		<div className={`${layout.sectionInfo}`}>
			<h2 className={`${styles.heading2} text-center ss:text-left`}>
				Find a better card deal <br className='sm:block hidden' /> in few easy
				steps.
			</h2>
			<p
				className={`${styles.paragraph} ss:max-w-[470px] w-full mt-5 text-center ss:text-left`}>
				Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
				aliquet eget mauris tortor. Aliquet ultrices ac, ametau.
			</p>

			<Button styles='mt-10 ss:mr-auto s::ml-0 mx-auto ss:ml-0 ss:mr-auto' />
		</div>

		<div className={`${layout.sectionImg}`}>
			<img src={card} alt='card' className='w-[100%] h-[100%]' loading='lazy' />
		</div>
	</section>
);

export default CardDeal;
