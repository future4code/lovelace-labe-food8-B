import React from "react"
import styled from "styled-components"

const Conteiner = styled.div`
  width: 360px;
  box-sizing: border-box;
  border: solid black 1px;
  margin-right: auto;
  margin-left: auto;
  display:flex;
  flex-direction: column;
`


const Title = styled.span`
    width: 100px;
  height: 19px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: -0.39px;
  color: black;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
`

const Rectangle = styled.div`
 width: 91%;
  height: 76px;
  margin: 1px 0 8px;
  padding: 16px;
  background-color: #eee;
`

const Adress = styled.div`
  width: 328px;
  height: 18px;
  margin: 10px ;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.39px;
  color: black;
text-align:center
`

const Adress2 = styled.div`
  width: 328px;
  height: 18px;
  margin: 8px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: black;
  margin-right: auto;
  margin-left: auto;
  text-align:center

`

const Status = styled.span`
  width: 360px;
  height: 42px;
  margin: 8px 0 33px;
  padding: 12px 32px;
  width: 296px;
  height: 18px;
  opacity: 0.89;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  text-align: center;
  color: var(--black);
`

const Frete = styled.span`
  width: 104px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  text-align: right;
  margin-bottom: 10px;
  color: black;
`

const Subtotal = styled.span`
  width: 164px;
  height: 18px;
  margin: 16px 0 9px 16px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: black;
`
const Valor = styled.span`
flex-wrap: nowrap;
  width: 164px;
  height: 18px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.43px;
  text-align: right;
  color: #5cb646;
`
const FormaDePagamento = styled.span`
width: 328px;
  height: 18px;
  margin: 24px 16px 8px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: black;
`

const Traco = styled.span`
width: 328px;
  height: 1px;
  margin: 8px 16px;
  border: solid 1px var(--black);
`

const OpcoesPagamento = styled.span`
  width: 296px;
  height: 18px;
  margin: 11px 16px 11px 8px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: var(--black);
`
const Button = styled.button`
width: 360px;
  height: 42px;
  padding: 12px 16px;
  border-radius: 2px;
  background-color: #5cb646;

  span{
width: 296px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: var(--black);
  }
`

const CartPage = () => {
    return (
        <Conteiner>
            <Title>Meu Carrinho</Title>
            <Rectangle>
                <Adress>Endereço de entrega</Adress>
                <Adress2> Rua Alessandro Vieira, 41</Adress2>
            </Rectangle>
            <Status>Carrinho vazio</Status>
            <Frete>Frete R$0,00</Frete>
            <Subtotal>Subtotal</Subtotal>
            <Valor>R$00,00</Valor>

            <FormaDePagamento>Forma de Pagamento</FormaDePagamento>
            <Traco><hr></hr></Traco>

            <OpcoesPagamento>Dinheiro</OpcoesPagamento>
            <OpcoesPagamento>Cartão de Crédito</OpcoesPagamento>
            <Button>
                <span>Confirmar</span>
            </Button>
        </Conteiner>
    )
}

export default CartPage
