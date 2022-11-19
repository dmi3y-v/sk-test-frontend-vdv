import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";

import PhoneNumbersListItem from "../PhoneNumbersListItem/PhoneNumbersListItem";

const PhoneNumbersList = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ pt: "48px", color: "primary.main" }}>
        Список телефонов
      </Typography>
      <List sx={{ pt: "24px", maxWidth: "300px" }}>
        <PhoneNumbersListItem />
      </List>
    </Box>
  );
};

export default PhoneNumbersList;
