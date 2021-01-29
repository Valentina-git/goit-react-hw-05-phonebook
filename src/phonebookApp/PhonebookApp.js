import React, { useEffect, useState } from 'react';
import ContactForm from '../contactForm/ContactForm';
import ContactList from '../contactList/ContactList';
import Filter from '../filter/Filter';
import StyledPhonebookApp from './StyledPhonebook';
import { CSSTransition } from 'react-transition-group';
import Alert from '../alert/Alert';

const initialState = {
  contacts: [],
  filter: '',
};

const PhonebookApp = () => {
  const [state, setState] = useState({ ...initialState });
  const [alertMsg, setAlertMsg] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    // componentDidMount
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      setState({ contacts: JSON.parse(contacts) });
    }
  }, []);

  useEffect(() => {
    // componentDidUpdate
    localStorage.setItem('contacts', JSON.stringify(state.contacts));
    setState(prev => ({ ...prev, filter: state.filter }));
  }, [state.contacts, state.filter]);

  const showAlertMsg = message => {
    setAlertMsg(message);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);

    setTimeout(() => {
      setAlertMsg('');
    }, 3250);
  };

  const getUser = person => {
    const { contacts } = state;

    if (contacts.some(elem => elem.name === person.name)) {
      showAlertMsg(`${person.name} is already in contacts`);
      return;
    }
    if (!person.name.length) {
      showAlertMsg('Please enter a name');
      return;
    }
    if (!person.contact.length) {
      showAlertMsg(`Please enter a number`);
      return;
    }
    setState(prev => ({
      ...prev,
      contacts: [...prev.contacts, { ...person }],
    }));
  };

  const onHandleInputChange = e => {
    const { name, value } = e.target;
    setState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const onHandleDeleteContact = e => {
    const id = e.target.dataset.id;
    setState(prev => ({
      ...prev,
      contacts: [...prev.contacts.filter(item => item.id !== id)],
    }));
  };

  const { contacts, filter } = state;

  return (
    <StyledPhonebookApp>
      <CSSTransition
        in={showAlert}
        timeout={250}
        classNames="myAlert"
        unmountOnExit
      >
        <Alert message={alertMsg} />
      </CSSTransition>

      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames="myTitle"
        unmountOnExit
      >
        <h1 className="pageTitle">Phonebook</h1>
      </CSSTransition>

      <ContactForm getUser={getUser} />
      <h2 className="numberTitle">Contacts</h2>

      <CSSTransition
        in={state.contacts.length > 1}
        timeout={500}
        classNames="myFilter"
        unmountOnExit
      >
        <Filter onChange={onHandleInputChange} filter={filter} />
      </CSSTransition>

      <ContactList
        contacts={contacts}
        filter={filter}
        onBtnClick={onHandleDeleteContact}
      />
    </StyledPhonebookApp>
  );
};

export default PhonebookApp;
