


// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   contacts: [],
//   filter: '',
// };

// const contactFormSlice = createSlice({
//   name: 'contactForm',
//   initialState: initialState,
//   reducers: {
//     setContact: (state, action) => {
//       const { name, number, id } = action.payload;
//       state.contacts.push({ name, number, id });
//     },

//     setDeletContact: (state, action) => {
//       state.contacts = state.contacts.filter(
//         contact => contact.id !== action.payload
//       );
//     },

//     setFilter: (state, action) => {
//       state.filter = action.payload;
//     },
//   },
// });

// export const { setContact, setDeletContact, setFilter } =
//   contactFormSlice.actions;
// export const contactFormReducer = contactFormSlice.reducer;
