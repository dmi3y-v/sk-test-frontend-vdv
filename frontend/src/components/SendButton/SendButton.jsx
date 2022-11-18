import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";

import { addPhoneIntoDB } from "../../API";
import initialState from "../../store/initialState";
import { resetPhoneForm } from "../../store/rootSlice";

const SendButton = () => {
  const dispatch = useDispatch();

  const enable = useSelector((state) => state.rootSlice.enableSendButton);
  const { currentCountry, currentPhone } = useSelector(
    (state) => state.rootSlice
  );

  const [isLoading, setIsLoading] = useState(false);

  const sendPhone = () => {
    setIsLoading(true);

    const phone = {
      countryCode: currentCountry.code,
      countryPhone: currentCountry.phone,
      phoneNumber: currentPhone,
    };

    addPhoneIntoDB(phone);

    dispatch(resetPhoneForm(initialState));

    setIsLoading(false);
  };

  return (
    <LoadingButton
      id="send-button"
      loading={isLoading}
      loadingPosition="end"
      disabled={!enable}
      variant="outlined"
      endIcon={<SendIcon />}
      fullWidth
      sx={{ height: "56px", textTransform: "none" }}
      onClick={() => sendPhone()}
    >
      Send
    </LoadingButton>
  );
};

export default SendButton;
