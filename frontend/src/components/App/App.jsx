import React from "react";

import Container from "@mui/material/Container";

import PhoneNumberForm from "../PhoneNumberForm/PhoneNumberForm";
import PhoneNumberList from "../PhoneNumberList/PhoneNumberList";

const App = () => {
  return (
    <Container maxWidth="md" sx={{ mt: "48px" }}>
      <PhoneNumberForm />
      <PhoneNumberList />
    </Container>
  );
};

export default App;
