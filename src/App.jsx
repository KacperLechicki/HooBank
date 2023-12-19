// import React from 'react';
import styles from './styles';

const App = () => (
	<div className='bg-primary w-full overflow-hidden'>
		<div className={`${styles.paddingX} ${styles.flexCenter}`}>
			<div className={`${styles.boxWidth}`}>NAVBAR</div>
		</div>

		<div className={`${styles.flexStart} bg-primary`}>
			<div className={`${styles.boxWidth}`}>HERO</div>
		</div>

		<div className={`${styles.flexStart} ${styles.paddingX} bg-primary`}>
			<div className={`${styles.boxWidth}`}>STATS</div>
		</div>
	</div>
);

export default App;
