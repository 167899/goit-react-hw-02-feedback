import PropTypes from 'prop-types';
import { Notification } from './Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      {total !== 0 ? (
        <ul
          style={{
            textDecoration: 'none',
          }}
        >
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>
            PositiveFeedback:{' '}
            {isNaN(positivePercentage) ? 0 : positivePercentage}%
          </li>
        </ul>
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
