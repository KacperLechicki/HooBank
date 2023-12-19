// import React from 'react';
import styles from './styles';

import { Navbar, Hero, Stats } from './components';

const App = () => (
	<div className='bg-primary w-full overflow-x-hidden'>
		<div className={`${styles.paddingX} ${styles.flexCenter}`}>
			<div className={`${styles.boxWidth}`}>
				<Navbar />
			</div>
		</div>

		<div className={`${styles.flexStart} bg-primary`}>
			<div className={`${styles.boxWidth}`}>
				<Hero />
			</div>
		</div>

		<div className={`${styles.flexStart} ${styles.paddingX} bg-primary`}>
			<div className={`${styles.boxWidth}`}>
				<Stats />
			</div>
		</div>
	</div>
);

export default App;
