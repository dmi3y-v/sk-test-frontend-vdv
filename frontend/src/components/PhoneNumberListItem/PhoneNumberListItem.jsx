import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import { fetchPhones, deletePhoneFromDB } from "../../API/index.js";

import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const PhoneNumberListItem = () => {
  const phones = useSelector((state) => state.rootSlice.phones);
  const [isLoading, setLoading] = useState(true);

  const deletePhone = (id) => {
    deletePhoneFromDB(id);
  };

  useEffect(() => {
    setLoading(true);
    fetchPhones();
    setLoading(false);
  }, []);

  if (isLoading) {
    return (
      <Box sx={{ textAlign: "center" }}>
        <CircularProgress />
      </Box>
    );
  } else if (phones.length === 0)
    return (
      <Typography
        variant="caption"
        sx={{
          color: "rgba(0, 0, 0, 0.6)",
          fontStyle: "italic",
        }}
      >
        Пока пусто :(
      </Typography>
    );
  else {
    const items = phones.map((item) => {
      return (
        <ListItem
          key={item.id}
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              color: "primary.main",
              fontSize: "24px",
              letterSpacing: "1px",
            }}
          >
            {item.country_phone}
            {item.phone_number}
          </Typography>
          <IconButton color="primary" onClick={() => deletePhone(item.id)}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      );
    });
    return items;
  }
};

export default PhoneNumberListItem;
