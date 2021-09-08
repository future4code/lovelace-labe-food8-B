import React from "react";
import { InputAdornment, TextField } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import styled from "styled-components";
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';

 const MainContainer = styled.div`
    width: 100vw;
    max-width: 420px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 70px;  
`


const HomePage = () => {
  return (
  
    <TextField
    variant="outlined"
    size="medium"
    // value={searchTerm}
    type="text"
    name="restaurant"
    placeholder="Procure um restaurante"
    // onChange={handleChange}
    required
    style={{ margin: '8px 0 0 0', width: '100%' }}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      )
    }}
  />
  )
};

export default HomePage;