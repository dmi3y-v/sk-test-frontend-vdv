import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import SendButton from "../SendButton/SendButton";
import PhoneNumberField from "../PhoneNumberField/PhoneNumberField";
import CountrySelect from "../CountrySelect/CountrySelect";

const PhoneNumberForm = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ pt: "48px", color: "primary.main" }}>
        Номер телефона
      </Typography>
      <Grid container spacing={1} sx={{ pt: "24px" }}>
        <Grid item xs={4}>
          <CountrySelect />
        </Grid>
        <Grid item xs={6}>
          <PhoneNumberField />
        </Grid>
        <Grid item xs={2}>
          <SendButton />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PhoneNumberForm;
