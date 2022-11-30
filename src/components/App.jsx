import React from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  addGood = () => {
    this.setState({
      good: this.state.good + 1,
    });
  };
  addNeutral = () => {
    this.setState({
      neutral: this.state.neutral + 1,
    });
  };
  addBad = () => {
    this.setState({
      bad: this.state.bad + 1,
    });
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    return ((100 * this.state.good) / this.countTotalFeedback()).toFixed(0);
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            handleGood={this.addGood}
            handleNeutral={this.addNeutral}
            handleBad={this.addBad}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positiveFeedback={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification notificationText="There is no feedback yet" />
          )}
        </Section>
      </>
    );
  }
}
export default App;
