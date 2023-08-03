import { configureStore } from '@reduxjs/toolkit';
import { contactFormReducer } from './contactFormReducer';
import { phoneBookReducer } from './phoneBookReducer';




export const store = configureStore({
  reducer: {
    contactForm: contactFormReducer,
    phoneBook: phoneBookReducer
  },
});
