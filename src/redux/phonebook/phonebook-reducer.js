import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions from './phonebook-actions';

const contactsReducer = createReducer([], {
    [actions.addContact]: (state, { payload }) => {

        const result = state.find(state => {
            return (state.name === payload.name || state.number === payload.number);
        });
        if (result) {
            alert(`${payload.name} is already in contacts`);
            return [...state];

        }

        return [...state, payload];
    },
    [actions.deleteContacts]: (state, { payload }) => {
        const newContactsList = [...state];
        newContactsList.splice(payload, 1);
        return newContactsList;

    },
});

const filterReducer = createReducer('', {
    [actions.handleFilter]: (_, { payload }) => payload,
});

export default combineReducers({
    contacts: contactsReducer,
    filter: filterReducer
});


