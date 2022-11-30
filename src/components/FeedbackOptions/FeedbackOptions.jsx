import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
export const FeedbackOptions = ({ handleGood, handleNeutral, handleBad }) => {
  return (
    <div className={css.buttonBox}>
      <div className="Feedback__controls">
        <button type="button" onClick={handleGood}>
          Good
        </button>
        <button type="button" onClick={handleNeutral}>
          Neutral
        </button>
        <button type="button" onClick={handleBad}>
          Bad
        </button>
      </div>
    </div>
  );
};
FeedbackOptions.propTypes = {
  handleGood: PropTypes.func.isRequired,
  handleNeutral: PropTypes.func.isRequired,
  handleBad: PropTypes.func.isRequired,
};
