import React from 'react';
import { DivContainer } from './styled';
import {ChevronLeftIcon} from '@chakra-ui/icons'
import { goBack } from '../../routes/coordinator';
import {useHistory} from 'react-router-dom'
import { Button } from '@chakra-ui/button';

export const Header = () => {
    const history = useHistory()

  return (
    <DivContainer>
        <Button 
        onClick={() => goBack(history)}
        variant={"text"}
        color={"black"}
        type={"submit"}
        > <ChevronLeftIcon w = {40} h = {40}/>  </Button>
        <p> Header </p>
    </DivContainer>
  );
}