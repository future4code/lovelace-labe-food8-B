import React from "react";
import styled from "styled-components";

const Conteiner = styled.div`
  width: 360px;
  height: 600px;
  box-sizing: border-box;
  border: solid black 1px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  border: solid 1px black;
`
const TitleConteiner = styled.div`
  width: 357px;
  height: 64px;
  margin: 0 0 16px;
  border: black 1px solid;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 var(--black-25);
  background-color: #fff;
`
const Title = styled.div`
 width: 70px;
  height: 19px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  text-align: center;
  color: var(--black);
`

const Title1 = styled.div`
  width: 175px;
  height: 44px;
  margin: 20px 92px 0 93px;
  padding: 13px 53.5px 12px;
`
const Nome = styled.div`
width: 328px;
  height: 18px;
  margin: 16px 16px 8px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: var(--black);
`
const Email = styled.div`
    width: 328px;
  height: 18px;
  margin: 2px 16px 8px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: var(--black);
`

const Rectangle = styled.div`
    width: 324px;
    height: 76px;
    margin: 16px 0;
    padding: 16px;
    background-color: #eee;
  `

const EnderecoCadastrado = styled.div`
  width: 328px;
  height: 18px;
  margin: 0 0 8px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #b8b8b8;
`

const EnderecoCadastrado2 = styled.div`
  width: 328px;
  height: 18px;
  margin: 0 0 8px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: black;
  `
const Historico = styled.span`  
    width: 328px;
    height: 18px;
    margin: 16px 16px 8px;
    font-family: Roboto;
    font-size: 16px;
    letter-spacing: -0.39px;
    color: black;
    align-items: center
    `
const PedidosCard = styled.div`
    width: 360px;
    height: 130px;
    margin: 8px 0 0;
    padding: 0 16px;
    `

const Rectangle2 = styled.div`
    width: 290px;
    height: 90px;
    margin: 7px 0 0;
    padding: 16px;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
  `

const NomeRestaurante = styled.div`
   width: 296px;
  height: 18px;
  margin: 0 0 9px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #5cb646;
  `

const Data = styled.div`
    width: 296px;
  height: 18px;
  margin: 9px 0 7px;
  font-family: Roboto;
  font-size: 12px;
  line-height: normal;
  letter-spacing: -0.29px;
  color: var(--black);
  `

const Subtotal = styled.div`
    width: 296px;
    height: 18px;
    margin: 7px 0 0;
    font-family: Roboto;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: -0.39px;
    color: var(--black);
 `

const ProfilePage = () => {
    return (
        <Conteiner>
            <TitleConteiner>
                <Title1>
                    <Title>Meu Perfil</Title>
                </Title1>
                <Nome>Bruna Oliveira</Nome>
                <Email>bruna_o@gmail.com</Email>
                <Rectangle>
                    <EnderecoCadastrado>Endereço Cadastrado</EnderecoCadastrado>
                    <EnderecoCadastrado2>Rua 123</EnderecoCadastrado2>
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
            </TitleConteiner>

        </Conteiner>
    )
}

export default ProfilePage