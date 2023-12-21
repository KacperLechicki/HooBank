import { clients } from '../../constants';
import styles from '../../styles';

const Clients = () => (
	<section className={`${styles.flexCenter} mt-10`}>
		<div className={`${styles.flexCenter} flex-wrap w-full`}>
			{clients.map((client, index) => (
				<div
					key={index}
					className={`${styles.flexCenter} p-5 flex-1 sm:min-w-[140px] min-w-[120px]`}>
					<img
						src={client.logo}
						alt='client'
						className='h-[35px] object-contain'
						loading='lazy'
					/>
				</div>
			))}
		</div>
	</section>
);

export default Clients;
