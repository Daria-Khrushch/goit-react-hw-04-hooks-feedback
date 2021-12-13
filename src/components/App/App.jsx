import React from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import s from './App.module.css';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = name => {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback()) {
      return ((this.state.good / this.countTotalFeedback()) * 100).toFixed();
    } else return 0;
  };

  render() {
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
    const statistics = Object.entries(this.state);
    return (
      <div>
        <div className={s.Statistics}>
          <h1 className={s.title}>Please leave feedback</h1>
          <FeedbackOptions
            handleFeedback={this.handleFeedback}
            options={options}
          />
          <Statistics
            statistics={statistics}
            valueTotal={total}
            valuePositiveFeedback={percentage}
          />
        </div>
      </div>
    );
  }
}

export default Feedback;
