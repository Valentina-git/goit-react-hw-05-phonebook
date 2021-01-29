import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import StyledContactList from './StyledContactList';
import ContactListItem from './contactListItem/ContactListItem';

const ContactList = ({ contacts, filter, onBtnClick }) => {
  return (
    <StyledContactList>
      <TransitionGroup component="ul" className="list">
        {contacts
          .filter(item =>
            item.name.toLowerCase().includes(filter.toLowerCase()),
          )
          .map(item => (
            <CSSTransition key={item.id} timeout={250} classNames="myListItem">
              <ContactListItem item={item} onBtnClick={onBtnClick} />
            </CSSTransition>
          ))}
      </TransitionGroup>
    </StyledContactList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  onBtnClick: PropTypes.func.isRequired,
};

export default ContactList;
