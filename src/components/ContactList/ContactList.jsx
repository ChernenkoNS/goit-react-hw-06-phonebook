import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import css from '../ContactList/ContactList.module.css'

export const ContactList = () => {
  const contacts = useSelector(state =>  state.contactForm.contacts)

  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key={id} className={css.contactsItem}>
          <p>
            {name}: {number}
          </p>
          {/* <button onClick={() => onDeleteContact(id)}>Delet</button> */}
        </li>
      ))}
    </ul>
  );
};

// ContactList.propTypes = {
//   contacts:  PropTypes.array,
//   onDeleteContact:PropTypes.func.isRequired
// };
