import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
export const FeedbackOptions = ({ handleGood, handleNeutral, handleBad }) => {
  return (
    <div className={css.buttonBox}>
      <button type="button" className={css.good} onClick={handleGood}>
        Good
      </button>
      <button type="button" className={css.neutral} onClick={handleNeutral}>
        Neutral
      </button>
      <button type="button" className={css.bad} onClick={handleBad}>
        Bad
      </button>
    </div>
  );
};
FeedbackOptions.propTypes = {
  handleGood: PropTypes.func.isRequired,
  handleNeutral: PropTypes.func.isRequired,
  handleBad: PropTypes.func.isRequired,
};
