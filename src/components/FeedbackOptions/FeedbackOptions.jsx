import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onButtonAction }) => {
  return (
    <div className={css.buttonBox}>
      <button
        type="button"
        className={css.good}
        name="good"
        onClick={onButtonAction}
      >
        Good
      </button>

      <button
        type="button"
        className={css.neutral}
        name="neutral"
        onClick={onButtonAction}
      >
        Neutral
      </button>

      <button
        type="button"
        className={css.bad}
        name="bad"
        onClick={onButtonAction}
      >
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onButtonAction: PropTypes.func.isRequired,
};
