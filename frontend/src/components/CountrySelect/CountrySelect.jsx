import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { changeCurrentCountry } from "../../store/rootSlice.js";

import config from "../../config.js";

const CountrySelect = () => {
  const dispatch = useDispatch();

  const currentCountry = useSelector((state) => state.rootSlice.currentCountry);

  const handleChange = (event, newValue) => {
    dispatch(changeCurrentCountry(newValue));
  };

  return (
    <Autocomplete
      options={config.countries}
      getOptionLabel={(option) => `${option.labelRu} ${option.phone}`}
      isOptionEqualToValue={(option, value) => option.phone === value.phone}
      renderOption={(props, option) => (
        <MenuItem
          key={option.code}
          value={option.code}
          sx={{
            "& > img": { mr: "8px" },
          }}
          {...props}
        >
          <img src={require(`../../source/flags/${option.code}.png`)} alt="" />
          {option.labelRu} {option.phone}
        </MenuItem>
      )}
      renderInput={(params) => <TextField {...params} label="Страна" />}
      value={currentCountry}
      onChange={handleChange}
      noOptionsText={"Выберите страну из списка"}
      disableClearable
    />
  );
};

export default CountrySelect;
