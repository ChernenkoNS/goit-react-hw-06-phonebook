import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setDeletContact } from 'redux/contactFormReducer';
import css from '../ContactList/ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(state => state.contactForm.contacts);
  const filterValue = useSelector(state => state.contactForm.filter);

  const dispatch = useDispatch();

  const deleteContact = contactId => {
    dispatch(setDeletContact(contactId));
  };

  const validFilterValue = filterValue.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(validFilterValue)
  );

  return (
    <ul>
      {visibleContacts.map(({ name, number, id }) => (
        <li key={id} className={css.contactsItem}>
          <p>
            {name}: {number}
          </p>
          <button onClick={() => deleteContact(id)}>Delet</button>
        </li>
      ))}
    </ul>
  );
};

// ContactList.propTypes = {
//   contacts:  PropTypes.array,
//   onDeleteContact:PropTypes.func.isRequired
// };
