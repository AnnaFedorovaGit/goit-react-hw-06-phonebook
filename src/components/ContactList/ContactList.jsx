import css from './ContactList.module.css'

import { useDispatch, useSelector } from 'react-redux'


const ContactList = () => {     
	const dispatch = useDispatch();
    const contacts = useSelector((state) => state.contacts.contacts);
    const filter = useSelector((state) => state.contacts.filter);
    
    const toDeleteContact = (id) => { 
        console.log(id);
        dispatch({ type: 'contacts/deleteContact', payload: id });
    }

    return (
        <ul className={css.contactsList}>
            {(filter?.length > 0
        ? contacts.filter(item =>
            item.name.toLowerCase().includes(filter.toLowerCase())
          )
        : contacts
      ).map(item => (
        <li key={item.id}>
          <p className={css.contactName}>{item.name}: </p>
          <p className={css.contactNumber}>{item.number}</p>

          {/* <button type='button' className={css.btn} onClick={() => dispatch(deleteContact(item.id))}>Delete</button> */}
          <button type='button' className={css.btn} onClick={() => dispatch(toDeleteContact(item.id))}>Delete</button>
        </li>
      ))}
        </ul>
    )
}


export default ContactList
