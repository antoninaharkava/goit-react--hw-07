import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps'; 
import s from './ContactForm.module.css'

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && phone) {
      dispatch(addContact({ name, phone }));
      setName('');
      setPhone('');
    }
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label} >
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label >
      <label className={s.label}>
        Phone:
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </label>
      <button className={s.btnAddC} type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
