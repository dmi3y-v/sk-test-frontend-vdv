import React from "react";

import Container from "@mui/material/Container";

import PhoneNumberForm from "../PhoneNumberForm/PhoneNumberForm";
import PhoneNumbersList from "../PhoneNumbersList/PhoneNumbersList";

const App = () => {
  return (
    <Container maxWidth="md" sx={{ mt: "48px" }}>
      <PhoneNumberForm />
      <PhoneNumbersList />
    </Container>
  );
};

export default App;
