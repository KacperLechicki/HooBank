import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ styles }) => {
	return (
		<button
			type='button'
			className={`py-4 px-6 bg-blue-gradient font-poppins font-medium rounded-[10px] text-[18px] text-primary outline-none ${styles} heartbeat`}>
			Get Started
		</button>
	);
};

Button.propTypes = {
	styles: PropTypes.string.isRequired,
};

export default Button;
