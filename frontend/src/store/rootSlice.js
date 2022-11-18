import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState.js";

const rootSlice = createSlice({
  name: "rootSlice",
  initialState: initialState,
  reducers: {
    setDisableSendButton(state) {
      state.enableSendButton = false;
    },
    setEnableSendButton(state) {
      state.enableSendButton = true;
    },
    changeCurrentCountry(state, action) {
      state.currentCountry = action.payload;
    },
    changeCurrentPhone(state, action) {
      state.currentPhone = action.payload;
    },
    resetPhoneForm(state, action) {
      state.currentCountry = action.payload.currentCountry;
      state.currentPhone = action.payload.currentPhone;
      state.enableSendButton = action.payload.enableSendButton;
    },
    setPhones(state, action) {
      state.phones = action.payload;
    },
  
  },
});

export const {
  setDisableSendButton,
  setEnableSendButton,
  changeCurrentCountry,
  changeCurrentPhone,
  resetPhoneForm,
  setPhones,
} = rootSlice.actions;

export default rootSlice.reducer;
