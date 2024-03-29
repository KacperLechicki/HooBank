import styles from '../../styles';
import { arrowUp } from '../../assets';
import './GetStartedButton.scss';

const GetStartedButton = () => (
	<div
		className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer getStartedButton`}>
		<div
			className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
			<div className={`${styles.flexStart} flex-row`}>
				<p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
					<span className='text-gradient'>Get</span>
				</p>
				<img
					src={arrowUp}
					alt='arrow up'
					className='w-[23px] h-[23px] object-contain arrow-animation'
				/>
			</div>
			<p className='font-poppins font-medium text-[18px] leading-[23px]'>
				<span className='text-gradient'>Started</span>
			</p>
		</div>
	</div>
);

export default GetStartedButton;
