import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import { selectLoading } from "../../redux/contactsSlice";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import styles from "./App.module.css";

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.appContainer}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.subtitle}>Contacts</h2>
      <SearchBox />
      {loading ? <p>Loading...</p> : <ContactList />}
    </div>
  );
};

export default App;

