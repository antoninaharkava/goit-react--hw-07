
import { useSelector, useDispatch } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import { deleteContact } from "../../redux/contactsOps";
import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, phone }) => (
        <li key={id} className={s.item}>
          <p>{name}: {phone}</p>
          <button className={s.deleteButton} onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
