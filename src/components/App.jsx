import React from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { useState } from 'react';

const App = () => {
  const [counterGood, setCounterGood] = useState(0);
  const [counterNeutral, setCounterNeutral] = useState(0);
  const [counterBad, setCounterBad] = useState(0);
  const countTotalFeedback = counterBad + counterNeutral + counterGood;

  const positiveFeedbackPercentage = (
    (counterGood * 100) /
    countTotalFeedback
  ).toFixed(0);

  function onButtonClick(evt) {
    switch (evt.target.name) {
      case 'good':
        setCounterGood(counterGood + 1);
        break;
      case 'neutral':
        setCounterNeutral(counterNeutral + 1);
        break;
      case 'bad':
        setCounterBad(counterBad + 1);
        break;
      default:
        break;
    }
  }

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions onButtonAction={onButtonClick} />
      </Section>

      <Section title="Statistics">
        {!countTotalFeedback ? (
          <Notification notificationText="There is no feedback yet" />
        ) : (
          <Statistics
            good={counterGood}
            neutral={counterNeutral}
            bad={counterBad}
            total={countTotalFeedback}
            positiveFeedback={positiveFeedbackPercentage}
          />
        )}
      </Section>
    </>
  );
};

export default App;
