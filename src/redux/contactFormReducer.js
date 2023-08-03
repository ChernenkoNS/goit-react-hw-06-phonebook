
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   contacts: []
  };
  
  const contactFormSlice = createSlice({
    name: "contactForm",
    initialState: initialState,
    reducers: {

        setContact: (state, action) => {
            const { name, number, id} = action.payload;
            state.contacts.push({ name, number, id});
          },

    //   setName:  (state, action) => {
    //     state.name = action.payload
    //   },
    //   setNumber:  (state, action) => {
    //     state.number = action.payload
    //   }
    }
  })
  

  
  export const { setContact} = contactFormSlice.actions;
  export const contactFormReducer = contactFormSlice.reducer;
  
