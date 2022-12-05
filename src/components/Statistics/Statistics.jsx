import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <ul className={css.statList}>
      <li className={css.statListItem}>Good: {good}</li>
      <li className={css.statListItem}>Neutral: {neutral}</li>
      <li className={css.statListItem}>Bad: {bad}</li>
      <li className={css.statListItem}>Total: {total}</li>
      <li className={css.statListItem}>
        Positive Feedback: {positiveFeedback}
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
