// import { createSlice, nanoid } from "@reduxjs/toolkit";


const initState = {
    contacts: [
				{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
				{id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
				{id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
				{id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    // contacts: [],
    // filter: ""
};

export const contactsReducer = (state = initState, action) => { 
    switch (action.type) { 
        case 'contacts/setContacts': { 
            return {
                ...state,
                contacts: action.payload,
            }
        }
        case 'contacts/addContact': { 
            return {
                ...state,
                contacts: [ ...state.contacts, action.payload],
            }
        }
        case 'contacts/deleteContact': { 
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload),
            }
        }
        // case 'filter/setFilter': { 
        //     return {
        //         ...state,
        //         filter: action.payload,
        //     }
        // }
        default:
            return state;
    }
}

// const contactsSlice = createSlice({
//   name: "contacts",
//   initialState: contactsInitialState,
//   reducers: {
//     addContact: {
//       reducer(state, action) {
//         state.push(action.payload);
//       },
//         prepare(text) {
//           return {
//           payload: {
//             text,
//             id: nanoid(),
//             // completed: false,
//           },
//         };
//       },
//     },
//     deleteContact(state, action) {
//       const index = state.findIndex(contact => contact.id === action.payload);
//       state.splice(index, 1);
//     },
//   },
// });

// export const { addContact, deleteContact } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;