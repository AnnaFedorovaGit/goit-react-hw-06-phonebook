// import { useState, useEffect } from 'react' 
import { useEffect } from 'react' 
import { nanoid } from 'nanoid'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import Filter from './components/Filter/Filter'

import { useDispatch, useSelector } from 'react-redux'

import css from './App.module.css'


const App = () => {

	const contacts = useSelector((state) => state.contacts.contacts);
	// const filter = useSelector((state) => state.contacts.filter);
	// const [contacts, setContacts] = useState([]);
	// const [filter, setFilter] = useState('');

	const dispatch = useDispatch();
	
	useEffect(() => {
		const localData = localStorage.getItem('contacts');

		if (localData && JSON.parse(localData).length > 0) {
			dispatch({ type: 'contacts/setContacts', payload: JSON.parse(localData) });
			// setContacts(JSON.parse(localData));
		} else {
		// 	dispatch({ type: 'contacts/setContacts', payload: {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'} });
		// 	// setContacts([
		// 	// 	{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
		// 	// 	{id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
		// 	// 	{id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
		// 	// 	{id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
		// 	// ]);
		}
	}, [dispatch]);

	useEffect(() => {
		localStorage.setItem('contacts', JSON.stringify(contacts));
	}, [contacts]);

	const createContact = (name, number) => {
		const newContact = {
			name: name,
			number: number,
			id: nanoid(),
		}

		const isDuplicated = contacts.find((el) => el.name === name && el.number === number)
		if (isDuplicated) {
			return alert(`${name} is already in contacts.`)
		}
			
		dispatch({ type: 'contacts/addContact', payload: newContact });
		// setContacts((prev) => ([ ...prev, newContact ]));
	}

	const filterContact = (value) => { 
		dispatch({ type: 'filter/setFilter', payload: value });
		// setFilter(value);
	}

	return (
		<div className={css.wrapper}>
			<h1>Phonebook</h1>
			<ContactForm createContact={createContact} />

			<h2>Contacts</h2>
			<Filter filterContact={filterContact} contacts={contacts} />
			<ContactList />
			{/* <ContactList contacts={contacts} filter={filter} /> */}
		</div>
	)
}


export default App