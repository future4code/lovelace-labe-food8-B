import React from "react";
import styled from "styled-components";
import axios from "axios"
import { useState, useEffect } from "react";
import { baseUrl } from "../constants/constants";
import { appName } from "../constants/constants";
import { useHistory } from "react-router";
import Card from '@material-ui/core/Card';
import EditIcon from '@material-ui/icons/Edit';
import { goToEditProfile, goToAdressPage } from "../routes/coordinator";
import useProtectedPage from "../hooks/useProtectedPage";

const Conteiner = styled.div`
      width: 100vw;
    max-width: 420px;
    height: 100vh;
    border: solid black 1px;
  box-sizing: border-box;
  margin-right: auto;
  margin-left: auto;
  display:flex;
  flex-direction: column;
  font-family: Roboto;
  letter-spacing: -0.39px;
`
const TitleConteiner = styled(Card)`
  height: 64px;
  margin: 0 0 16px;
  border: black 1px solid;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 v;
  background-color: #fff;
`
const Title = styled.div`
  font-size: 19px;
  text-align: center;
  margin-top: 20px;
  font-weight: bolder;
`

const Rectangle = styled.div`
    margin: 16px 0;
    padding: 16px;
    background-color: #eee;
  `


const Historico = styled.span`  
    margin: 16px 16px 8px;
    font-size: 19px;
    text-align: center;
    font-weight: bold;
    `
const CardConteiner = styled.div`
    margin: 8px 0 0;
    padding: 0 16px;
    gap:10px;
    `

const Rectangle2 = styled(Card)`
    height: 120px;
    margin: 7px 0 0;
    padding: 16px;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
  `

const NomeRestaurante = styled.div`
  margin: 0 0 9px;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #5cb646;
  `

const Data = styled.div`
  margin: 9px 0 7px;
  font-size: 12px;
  letter-spacing: -0.29px;
  `

const Subtotal = styled.div`
    margin: 7px 0 0;
    font-size: 16px;
    font-weight: bold;
 `

const CardInfo = styled.div`
  cursor: pointer;
  display:flex;
  justify-content: space-between;
  font-size: 16px;
  padding:10px;
  margin-left: -10px;
`

const ProfilePage = () => {
  useProtectedPage()
  const [profile, setProfile] = useState({});
  const [order, setOrder] = useState([]);

  const history = useHistory()

  const getProfile = () => {
    axios
      .get(`${baseUrl}/${appName}/profile`, {
        headers: {
          auth: localStorage.getItem("token")
        }
      }).then((res) => {
        setProfile(res.data.user)
      }).catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    getProfile();
  }, [])

  const getOrderHistory = () => {
    axios
      .get(`${baseUrl}/${appName}/orders/history`, {
        headers: {
          auth: localStorage.getItem("token")
        }
      }).then((res) => {
        setOrder(res.data.orders)
      }).catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    getOrderHistory();
  }, [])


  const orderCard = order.map((o) => {
    return (<Rectangle2 key={o.id}>
      <NomeRestaurante>{o.restaurantName}</NomeRestaurante>
      <Data>{o.createdAt}</Data>
      <Subtotal>{o.totalPrice}</Subtotal>
    </Rectangle2>)
  })

  const correctRender = () =>{
    if (getOrderHistory.length > 0) {
      return {orderCard}
    }else{
      return <p align="center">Você ainda não fez nenhum pedido</p>
    }
  }

  let date = new Date(order.createdAt)
  console.log("Date: "+date.getDate()+
          "/"+(date.getMonth()+1)+
          "/"+date.getFullYear()+
          " "+date.getHours()+
          ":"+date.getMinutes()
          );


          
  return (
    <Conteiner>
      <TitleConteiner>
        <Title>Meu Perfil</Title>
      </TitleConteiner>
      <CardConteiner>
        <CardInfo>{profile.name} <EditIcon
          onClick={() => goToEditProfile(history)} /></CardInfo>
        <p>{profile.email}</p>
      </CardConteiner>
      <Rectangle>
        <CardInfo>Endereço Cadastrado <EditIcon
          onClick={() => goToAdressPage(history)} /></CardInfo>
        <div>
          <p><b>{profile.address}</b></p>
        </div>
      </Rectangle>
      <Historico> Histórico de pedidos</Historico>
      <CardConteiner>
        {correctRender()}
      </CardConteiner>
    </Conteiner>
  )
}

export default ProfilePage
