import React from "react"
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
  box-sizing: border-box;
  border: solid black 1px;
  margin-right: auto;
  margin-left: auto;
  display:flex;
  flex-direction: column;
`

const Title = styled.span`
  font-family: Roboto;
  font-size: 19px;
  font-weight: bolder;
  letter-spacing: -0.39px;
  color: black;
  padding: 10px;
  text-align: center;
  margin-top: 20px;
  `

const Rectangle = styled.div`
  height: 76px;
  margin: 1px 0 8px;
  margin-top: 14px;
  background-color: #eee;
`

const Adress = styled.div`
padding: 10px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.39px;
  text-align:center;
  justify-content: center;
`

const Adress2 = styled.form`
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  text-align:center;
  margin-bottom: 20px;
  justify-content: center;
  cursor: pointer;
`

const Status = styled.span`
  margin: 10px 0 33px;
  opacity: 0.89;
  font-family: Roboto;
  letter-spacing: -0.39px;
  text-align: center;
  justify-content: center;
`
 const Frete = styled.span`
 text-align: right;
 margin-right: 10px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
`


const Subtotal = styled.span`
display: inline-block;
  font-family: Roboto;
  letter-spacing: -0.39px;
  margin-left: 20px;
  margin-top: 10px;  
`
const Total = styled.span`
  display: inline-block;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bolder;
  letter-spacing: -0.43px;
  text-align: right;
  color: #5cb646;
  margin-right: 10px;
`


const Valor = styled.div`

  font-family: Roboto;
  margin-right: 10px;
  font-size: 18px;
  font-weight: bolder;
  letter-spacing: -0.43px;
  text-align: right;
  color: #5cb646;
`

const FormControlLabel1 = styled(FormControlLabel)`
 width: 328px;
  height: 18px;
  padding: 10px;
  margin: 24px 16px 8px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
`

const Traco = styled.span`
  height: 2px;
  margin: 8px 16px;
  border: solid 1px black;
`

const OpcoesPagamento = styled.span`
  margin-top: 30px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  text-align: center;
`
const ButtonStyle = styled.button`
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px;
  height: 50px;
  font-family: Roboto;
  letter-spacing: -0.39px;
  font-size: 16px;
  padding: 12px 16px;
  border-radius: 2px;
  background-color: #5cb646;
`

const CartPage = () => {

  const [address, setAddress] = useState({});

  const history = useHistory()

  useProtectedPage()


  const getAddress = () => {
    axios
      .get(`${baseUrl}/${appName}/profile/address`, {
        headers: {
          auth: localStorage.getItem("token")
        }
      }).then((res) => {
        setAddress(res.data.address)
      }).catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    getAddress();
  }, [])




  return (
    <Conteiner>
      <Title>Meu Carrinho</Title>
      <Rectangle>
        <Adress>Endereço de entrega</Adress>
        <Adress2> {address.street}, {address.number} <EditIcon
          onClick={() => goToAdressPage(history)} /></Adress2>
      </Rectangle>
      <Status>Carrinho vazio</Status>
      <Frete>Frete</Frete>
      <Valor>R$00,00</Valor>
      <Subtotal>Subtotal</Subtotal>
      <Total>R$00,00</Total>
      <OpcoesPagamento>Opções de Pagamento</OpcoesPagamento>
      <Traco><hr/></Traco>
      <FormControlLabel1
            control={<Checkbox/>}
            label="Dinheiro"
          />

          <FormControlLabel1
            control={<Checkbox/>}
            label="Cartão de Crédito"

          />

      <ButtonStyle>Confirmar</ButtonStyle>
    </Conteiner>
  )
}

export default CartPage

