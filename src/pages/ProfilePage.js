import React from "react";
import styled from "styled-components";
import axios from "axios"
import { useState } from "react";
import { baseUrl } from "../constants/constants";
import { appName } from "../constants/constants";
import { useHistory } from "react-router";
import Card from '@material-ui/core/Card';


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
  font-family: Roboto;
  font-size: 19px;
  letter-spacing: -0.39px;
  text-align: center;
  margin-top: 20px;
  font-weight: bolder;
`

const Nome = styled.div`
  margin: 16px 16px 8px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
`
const Email = styled.div`
  margin: 2px 16px 8px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
`

const Rectangle = styled.div`
    margin: 16px 0;
    padding: 16px;
    background-color: #eee;
  `

const EnderecoCadastrado = styled.div`
  margin: 0 0 8px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #b8b8b8;
`

const EnderecoCadastrado2 = styled.div`
  margin: 0 0 8px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: black;
  font-weight: bold;
  `
const Historico = styled.span`  
    margin: 16px 16px 8px;
    font-family: Roboto;
    font-size: 19px;
    letter-spacing: -0.39px;
    color: black;
    text-align: center;
    font-weight: bold;
    `
const PedidosCard = styled.div`
    margin: 8px 0 0;
    padding: 0 16px;
    `

const Rectangle2 = styled.div`
    height: 120px;
    margin: 7px 0 0;
    padding: 16px;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
  `

const NomeRestaurante = styled.div`
  margin: 0 0 9px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #5cb646;
  `

const Data = styled.div`
  margin: 9px 0 7px;
  font-family: Roboto;
  font-size: 12px;
  letter-spacing: -0.29px;
  `

const Subtotal = styled.div`
    margin: 7px 0 0;
    font-family: Roboto;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: -0.39px;
 `

const ProfilePage = () => {
  const [profile, setProfile] = useState({});
  const [order, setOrder] = useState({});

  const history = useHistory()

  const axiosConfig = {
    headers: {
      auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik9QZ0s0OXpnSVpXSFlCYUJ3UUloIiwibmFtZSI6IkNsYXJpY2UiLCJlbWFpbCI6ImNsYXJpY2VAZ21haWwuY29tIiwiY3BmIjoiMjExLjExMS4xMTEtMTEiLCJoYXNBZGRyZXNzIjpmYWxzZSwiaWF0IjoxNjMxMTk5NjIwfQ.ea8XmbSfWwQIN3RwTWHW71GI5bKBJmu-_g4KTukas0c",
    },
  };


  axios
    .get(`${baseUrl}/${appName}/profile`, axiosConfig)
    .then((res) => {
      console.log(res.data.user)
      setProfile(res.data.user)
    })
    .catch((err) => {
      console.log(err);
    });

    axios
    .get(`${baseUrl}/${appName}/orders/history`, axiosConfig)
    .then((res) => {
      console.log("pedidos",res.data.user)
      setOrder(res.data.user)
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <Conteiner>
      <TitleConteiner>
        <Title>Meu Perfil</Title>
      </TitleConteiner>

      <Nome>{profile.name}</Nome>
      <Email>{profile.email}</Email>

      <Rectangle>
      <EnderecoCadastrado>Endereço Cadastrado</EnderecoCadastrado>
        <EnderecoCadastrado2>{profile.address}</EnderecoCadastrado2>
      </Rectangle>
      <Historico> Histórico de pedidos</Historico>
      <PedidosCard>
        <Rectangle2>
          <NomeRestaurante>Bullguer Vila Madalena</NomeRestaurante>
          <Data>09/09/21</Data>
          <Subtotal>R$77</Subtotal>
        </Rectangle2>
      </PedidosCard>
      <PedidosCard>
        <Rectangle2>
          <NomeRestaurante>Bullguer Vila Madalena</NomeRestaurante>
          <Data>09/09/21</Data>
          <Subtotal>R$77</Subtotal>
        </Rectangle2>
      </PedidosCard>
    </Conteiner>
  )
}

export default ProfilePage
