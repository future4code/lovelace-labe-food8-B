import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {goToHome} from '../routes/coordinator';
import LogoImg from "../assets/mainlogo.png";
import styled from "styled-components"


const SplashScreenContainer = styled.main`
  width: 100vw;
  max-width: 420px;
  height: 100vh;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Logo = styled.img`  
`


const SplashPage = () => {
  const history = useHistory()

  useEffect(() => {
    setTimeout(() => {
      goToHome(history)
    }, 5000)
  }, [history])

  
  return (
    <SplashScreenContainer>
      <Logo src={LogoImg}/>
    </SplashScreenContainer>
  );
}

export default SplashPage
