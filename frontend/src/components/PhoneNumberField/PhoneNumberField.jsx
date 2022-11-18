import React, { useState } from "react";
import TextField from "@mui/material/TextField";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import {
  setDisableSendButton,
  setEnableSendButton,
  changeCurrentPhone,
} from "../../store/rootSlice.js";

const PhoneNumberField = () => {
  const dispatch = useDispatch();
  const numberRegex = /^\d+$/;

  const currentPhone = useSelector((state) => state.rootSlice.currentPhone);
  const enableSendButton = useSelector(
    (state) => state.rootSlice.enableSendButton
  );

  const [isError, setIsError] = useState(false);
  const [helperText, setHelperText] = useState("Введите номер телефона");

  const verifyPhone = (phone) => {
    if (!phone) {
      setIsError(true);
      setHelperText("Номер телефона не может быть пустым");
      if (enableSendButton) dispatch(setDisableSendButton());
    } else if (!numberRegex.test(phone)) {
      setIsError(true);
      setHelperText("Номер телефона должен состоять только из цифр");
      if (enableSendButton) dispatch(setDisableSendButton());
    } else if (phone.length < 3 || phone.length > 10) {
      setIsError(true);
      setHelperText("Номер телефона должен быть от 3 до 10 цифр");
      if (enableSendButton) dispatch(setDisableSendButton());
    } else {
      setIsError(false);
      setHelperText("Введите номер телефона");
      if (!enableSendButton) dispatch(setEnableSendButton());
    }
  };

  const handleChange = (event) => {
    let newPhone = event.target.value;
    dispatch(changeCurrentPhone(newPhone));
    verifyPhone(newPhone);
  };

  return (
    <TextField
      id="phone-field"
      error={isError ? true : false}
      label="Номер телефона"
      variant="outlined"
      fullWidth
      helperText={helperText}
      value={currentPhone}
      onChange={handleChange}
    />
  );
};

export default PhoneNumberField;
