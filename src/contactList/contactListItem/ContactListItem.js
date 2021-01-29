import React from 'react';
import ContactLi from './StyledContactListItem';
import PropTypes from 'prop-types';

const ContactListItem = ({ item, onBtnClick }) => {
  return (
    <ContactLi key={item.id}>
      <span className="contactName">{item.name}:</span>
      <span className="contactNumber">{item.contact}</span>
      <button
        className="contactBtn"
        type="button"
        onClick={onBtnClick}
        data-id={item.id}
      >
        Delete contact
      </button>
    </ContactLi>
  );
};

ContactListItem.propTypes = {
  item: PropTypes.object.isRequired,
  onBtnClick: PropTypes.func.isRequired,
};

export default ContactListItem;
