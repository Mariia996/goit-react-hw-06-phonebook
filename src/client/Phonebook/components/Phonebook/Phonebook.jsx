import FormAddContacts from '../FormAddContacts/FormAddContacts';

import ContactsFilter from '../ContactsFilter/ContactsFilter';
import ContactList from '../ContactList/ContactList';

import styles from './Phonebook.module.css';

const AppPhonebook = () => {
        return (
        <>
           <h2 className={styles.title}>Phonebook</h2>
           <FormAddContacts />
           <h2 className={styles.title}>Contacts</h2>
           <ContactsFilter />
           <ContactList />
        </>
        )
}

export default AppPhonebook;