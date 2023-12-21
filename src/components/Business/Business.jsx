import { features } from '../../constants';
import styles, { layout } from '../../styles';
import { Button, FeatureCard } from '../../components';

const Business = () => (
	<section id='features' className={`${layout.section}`}>
		<div className={`${layout.sectionInfo}`}>
			<h2 className={`${styles.heading2} text-center ss:text-left`}>
				You do the business, <br className='sm:block hidden' /> we&apos;ll
				handle the money.
			</h2>
			<p
				className={`${styles.paragraph} ss:max-w-[470px] w-full mt-5 text-center ss:text-left`}>
				With the right credit card, you can improve your financial life by
				building credit, earning rewards and saving money. But with hundreds of
				credit cards on the market.
			</p>
			<Button styles='mt-10 ss:mr-auto s::ml-0 mx-auto ss:ml-0 ss:mr-auto' />
		</div>

		<div className={`${layout.sectionImg} flex-col sm:py-16 py-6`}>
			{features.map((feature, index) => (
				<FeatureCard key={index} {...feature} index={index} />
			))}
		</div>
	</section>
);

export default Business;
