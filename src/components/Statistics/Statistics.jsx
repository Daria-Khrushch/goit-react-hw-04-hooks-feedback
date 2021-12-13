import React from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import s from './Statistics.module.css';

const Statistics = ({ statistics, valueTotal, valuePositiveFeedback }) => {
  return (
    <div>
      {valueTotal > 0 && (
        <section>
          <h1 className={s.title}>Statistics</h1>
          <ul className={s.statisticValues}>
            {statistics.map(([name, value]) => {
              return (
                <li key={name} className={s.value}>
                  {name}: {value}
                </li>
              );
            })}
            <li className={s.value}>
              Positive Feedback: {valuePositiveFeedback} %
            </li>
          </ul>
        </section>
      )}

      {!valueTotal && <Notification message="There is no feedback" />}
    </div>
  );
};

Statistics.propTypes = {
  statistics: PropTypes.array.isRequired,
  valueTotal: PropTypes.number.isRequired,
};

export default Statistics;
