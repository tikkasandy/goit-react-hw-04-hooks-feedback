import PropTypes from 'prop-types';
import s from './Statistics.module.scss';

function Statistics({ options, total, positivePercentage }) {
  return (
    <div>
      <ul className={s.Votes}>
        {Object.keys(options).map(key => (
          <li key={key} className={s.Buttons__item}>
            <p>
              {key}: {options[key]}
            </p>
          </li>
        ))}
      </ul>
      <p className={s.Statistics}>Total: {total}</p>
      <p className={s.Statistics}> Positive feedback: {positivePercentage}%</p>
    </div>
  );
}

Statistics.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
