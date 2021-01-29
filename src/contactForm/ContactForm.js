import React, { useState } from 'react';
import StyledContactForm from './StyledContactForm';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const initialState = {
  name: '',
  contact: '',
};

const ContactForm = ({ getUser }) => {
  const [person, setPerson] = useState({ ...initialState });

  const onHandleChange = e => {
    const { name, value } = e.target;
    setPerson({ ...person, [name]: value });
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    getUser({
      ...person,
      id: uuidv4(),
      name: person.name,
      contact: person.contact,
    });
  };

  return (
    <StyledContactForm>
      <form onSubmit={onHandleSubmit}>
        <label className="formLabel">
          Name:
          <input
            className="formInput"
            type="text"
            name="name"
            value={person.name}
            onChange={onHandleChange}
          />
        </label>
        <label className="formLabel">
          Number:
          <input
            className="formInput"
            type="text"
            name="contact"
            value={person.contact}
            onChange={onHandleChange}
          />
        </label>

        <button className="formBtn">Add contact</button>
      </form>
    </StyledContactForm>
  );
};

ContactForm.propTypes = {
  getUser: PropTypes.func.isRequired,
};

export default ContactForm;
