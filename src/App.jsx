import React from 'react';
import styles from './styles';

import {
	Navbar,
	Hero,
	Stats,
	Business,
	Billing,
	CardDeal,
	Feedback,
	Clients,
	CTA,
	Footer,
} from './components';

const App = () => {
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		const loadApp = async () => {
			window.scrollTo(0, 0);

			setTimeout(() => {
				setIsLoading(false);
			}, 2000);
		};

		document.body.style.overflow = isLoading ? 'hidden' : 'auto';

		loadApp();
	}, [isLoading]);

	return (
		<>
			<div
				className={`fixed inset-0 flex items-center justify-center transition-opacity duration-500  ${
					isLoading ? 'block' : 'hidden'
				}`}>
				<div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 loading-border'></div>
			</div>

			<div
				className={`bg-primary w-full overflow-x-hidden ${
					!isLoading ? 'opacity-100' : 'opacity-0'
				} transition-opacity duration-500`}>
				<div className={`${styles.paddingX} ${styles.flexCenter}`}>
					<div className={`${styles.boxWidth}`}>
						<Navbar />
					</div>
				</div>

				<div className='mt-20'>
					<div className={`${styles.flexStart} bg-primary`}>
						<div className={`${styles.boxWidth}`}>
							<Hero />
						</div>
					</div>

					<div
						className={`${styles.flexStart} ${styles.paddingX} bg-primary mb-20`}>
						<div className={`${styles.boxWidth}`}>
							<Stats />
							<Business />
							<Billing />
							<CardDeal />
							<Feedback />
							<Clients />
							<CTA />
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
