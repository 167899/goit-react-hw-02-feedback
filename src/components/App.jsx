import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Section } from './Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increment = option => {
    return this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    Math.round(
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
        100
    );

  render() {
    return (
      <div
        style={{
          height: '100vh',
          textAlign: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.increment}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}
