// import { useEffect } from 'react' 
// import { useDispatch, useSelector } from 'react-redux'
// import { getContacts } from '../../redux/selectors'
// import { setContacts } from '../../redux/contactsSlice'
import { useDispatch } from 'react-redux'
import { setFilter } from '../../redux/filterSlice'

import css from './Filter.module.css'


const Filter = () => {
    const dispatch = useDispatch();
    // const contacts = useSelector(getContacts);

    // useEffect(() => {
	// 	const localData = localStorage.getItem('contacts');

	// 	if (localData && JSON.parse(localData).length > 0) {
	// 		dispatch(setContacts(JSON.parse(localData)));
	// 	} else {
	// 	}
	// }, [dispatch]);

	// useEffect(() => {
	// 	localStorage.setItem('contacts', JSON.stringify(contacts));
	// }, [contacts]);

    const filterContact = ({ target: { value } }) => { 
		dispatch(setFilter(value));
	}

    return (
        <div className={css.wrapper}>
            <p className={css.text}>Find contact by name:</p>
            <input type="text" name="filter" className={css.input} onChange={filterContact} />
        </div>
    )
}


export default Filter