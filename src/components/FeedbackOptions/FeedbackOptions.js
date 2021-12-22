import PropTypes from 'prop-types';
import Button from '../Button';
import s from './FeedbackOptions.module.scss';

function Feedback({ options, onLeaveFeedback }) {
  return (
    <div>
      <ul className={s.Buttons}>
        {Object.keys(options).map(key => (
          <li key={key} className={s.Buttons__item}>
            <Button label={key} onLeaveFeedback={onLeaveFeedback} />
          </li>
        ))}
      </ul>
    </div>
  );
}

Feedback.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Feedback;
