import React from 'react';
import PropTypes from 'prop-types';
import AlertBox from './StyledAlert';

const Alert = ({ message }) => {
  return (
    <AlertBox>
      <p className="alertText">{message}</p>
    </AlertBox>
  );
};

Alert.propTypes = {
  message: PropTypes.string,
};

export default Alert;
