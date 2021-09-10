import React, { useEffect, useState } from 'react';
import { InputAdornment, TextField, Toolbar } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import styled from "styled-components";
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import axios from "axios"


// const MainContainer = styled.div`
//     width: 100vw;
//     max-width: 420px;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     margin-bottom: 70px;  
// `

const RestaurantCard = styled.div`
display: flex;  
width: 360px;
  height: 196px;
  margin: 50px 0 0;
  padding: 8px 16px 0;
`
const Rectangle = styled.div`
width: 328px;
  height: 188px;
  padding: 0 0 16px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  img {
    width: 328px;
    height: 120px;
    margin: 0 0 12px;
    object-fit: contain;
  }
`
const Restaurant = styled.div`
  width: 296px;
  height: 18px;
  margin: 12px 16px 4px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #5cb646;
`

const DeliveryTime = styled.div`
Tempo-de-entrega {
  width: 148px;
  height: 18px;
  margin: 12px 16px 4px;
  padding-left: 30px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
`

const Shipping = styled.div`
  width: 140px;
  height: 18px;
  margin: 4px 16px 0 8px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: right;
  color: #b8b8b8;
`

const HomePage = () => {

  const [restaurants, setRestaurants] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([])

  const handleFilter = (event) => {
    const searchWord = event.target.value
    const newFilter = restaurants.filter((value) => {
      return value.name.toLowerCase().includes(searchWord)
    })
    setFilteredRestaurants(newFilter)
  }

  useEffect(() => {
    getRestaurants()
  }, [])

  const getRestaurants = () => {
    // https://us-central1-missao-newton.cloudfunctions.net/{{appName}}/restaurants
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureEatsE/restaurants', {
      headers: {
        auth: localStorage.getItem("token")
      }
    }).then((res) => {
      console.log(res.data.restaurants)
      setRestaurants(res.data.restaurants)

    })
      .catch(err => { console.log(err.message) })
  }

  // { !restaurants && "Carregando..." }
  
  return (
    <div>
      <Toolbar>
        <TextField
          variant="outlined"
          size="medium"
          // value={searchTerm}
          type="text"
          name="restaurant"
          label="Procure um restaurante"
          onChange={handleFilter}
          required
          style={{ margin: '8px 0 0 0', width: '100%' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">

              </InputAdornment>
            )
          }}
        />
      </Toolbar>
      {filteredRestaurants.length != 0 && (
        <div>
        {filteredRestaurants.map((item, key) => {
          return (
            <RestaurantCard>
              <Rectangle>
                <img src={item.logoUrl} />
                <Restaurant>
                  <p> {item.name}</p>
                </Restaurant>
                <DeliveryTime>
                  <p> {item.deliveryTime} min</p>
                </DeliveryTime>
                <Shipping>
                  {item.shipping}
                </Shipping>
              </Rectangle>
            </RestaurantCard>

          )
        })}
      </div>)}

    </div>
  )
};

export default HomePage;