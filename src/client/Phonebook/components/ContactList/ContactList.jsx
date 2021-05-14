import React from 'react';
import { connect } from 'react-redux';
import actions from '../../../../redux/phonebook/phonebook-actions';

import PhonebookItems from '../PhonebookItems/PhonebookItem';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, deleteContacts }) => {
    const contactElements = contacts.map(({ id, ...props }, idx) => {
        props = {
            ...props,
            onDelete: () => deleteContacts(idx),
        }
        return <PhonebookItems key={id} {...props} />
    });
        return ( <ul className={styles.contactList}>
                {contactElements}
            </ul> );
}

const getFilterContacts = ( contacts, filter ) => {
    if (!filter) {
        return contacts;
    }

    const filteredContacts = contacts.filter(({ name }) => name.includes(filter))
    return filteredContacts;
}

const mapStateToProps = state => {
    return {
        contacts: getFilterContacts(state.phonebook.contacts, state.phonebook.filter)
    }
};

const mapDispatchToProps = dispatch => ({
    deleteContacts: (idx) => dispatch(actions.deleteContacts(idx)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);