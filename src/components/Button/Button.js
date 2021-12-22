import PropTypes from 'prop-types';
import s from './Button.module.scss';

function Button({ label, onLeaveFeedback }) {
  return (
    <button className={s.Button} onClick={() => onLeaveFeedback(label)}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Button;
