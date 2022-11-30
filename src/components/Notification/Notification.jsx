import PropTypes from 'prop-types';

export const Notification = ({ notificationText }) => {
  return <p>{notificationText}</p>;
};
Notification.propTypes = {
  notificationText: PropTypes.string,
};
