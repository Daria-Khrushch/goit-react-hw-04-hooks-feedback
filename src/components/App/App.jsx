import { useState } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import s from './App.module.css';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = () => {
    return good + neutral + bad;
  };

  const percentage = () => {
    return Math.round((good / total()) * 100);
  };

  const handleFeedback = options => {
    switch (options) {
      case 'good':
        setGood(state => state + 1);
        break;

      case 'neutral':
        setNeutral(state => state + 1);
        break;

      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        return;
    }
  };

  const statistics = () => [
    ...Object.entries({ good, neutral, bad }),
    ['total', total()],
  ];

  return (
    <div>
      <div className={s.Statistics}>
        <h1 className={s.title}>Please leave feedback</h1>
        <FeedbackOptions
          handleFeedback={handleFeedback}
          options={['good', 'neutral', 'bad']}
        />
        <Statistics
          statistics={statistics()}
          valueTotal={total()}
          valuePositiveFeedback={percentage()}
        />
      </div>
    </div>
  );
}
