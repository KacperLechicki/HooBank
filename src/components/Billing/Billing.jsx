import { apple, bill, google } from '../../assets';
import styles, { layout } from '../../styles';

const Billing = () => (
	<section id='product' className={`${layout.sectionReverse} mt-10 relative`}>
		<div className={`${layout.sectionImgReverse}`}>
			<img
				src={bill}
				alt='billing'
				loading='lazy'
				className='w-[100%] h-[100%] relative z-[5]'
			/>
		</div>

		<div className='absolute z-[0] w-[60%] h-[30%] -left-[30%] rounded-full pink__gradient' />

		<div className={`${layout.sectionInfo}`}>
			<h2 className={`${styles.heading2} text-center ss:text-left`}>
				Easily control your <br className='sm:block hidden' /> billing &
				invoicing.
			</h2>
			<p
				className={`${styles.paragraph}  w-full mt-5 text-center ss:text-left`}>
				Elit enim sed massa etiam. Mauris eu adipiscing ultrices amatodio aenean
				neque. Fusce ipsum orci rhoncus alliporttitor integer platea placerat.
			</p>

			<div className='flex justify-center ss:justify-start flex-row flex-wrap sm:mt-10 mt-6 w-full'>
				<img
					src={apple}
					alt='apple store'
					className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'
				/>
				<img
					src={google}
					alt='google play'
					className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'
				/>
			</div>
		</div>
	</section>
);

export default Billing;
