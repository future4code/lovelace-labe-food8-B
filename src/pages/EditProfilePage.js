import React from "react";
import TextField from '@material-ui/core/TextField';
import styled from "styled-components";

const TextFieldStyled = styled(TextField)`
  width: 328px;
  height: 56px;
  margin: 8px 0 0;
  padding: 19px 48px 19px 16px;
`

const Container = styled.div`
    width: 100vw;
    min-height:100vh;
    max-width: 414px;  
`;

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    height: 40vh;
`

const SaveButton = styled.button`
  margin: 16px 0 0;
  width: 328px;
  height: 42px;
  font-family: Roboto;
  letter-spacing: -0.39px;
  font-size: 16px;
  padding: 12px 16px;
  border:none;
  border-radius: 2px;
  background-color: #5cb646;
  `

const EditProfilePage = () => {
  return (

    <div>
      <Container>
        <FormContainer >

          <h3>Editar</h3>

          <><TextFieldStyled
            id="outlined-basic"
            label="Nome"
            type="text"
            variant="outlined"
            name="name"
            // onChange={onChange}
            style={{ margin: '8px 0' }}
            required>

          </TextFieldStyled>

            <TextFieldStyled
              id="outlined-basic"
              label="E-mail"
              type="email"
              variant="outlined"
              name="email"
              // onChange={onChange}
              style={{ margin: '8px 0' }}
              required>
            </TextFieldStyled>

            <TextFieldStyled
              id="outlined-basic"
              label="CPF"
              placeholder="Somente números"
              variant="outlined"
              name="cpf"
              // onChange={onChange}
              style={{ margin: '8px 0' }}
              pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
              required
            >
            </TextFieldStyled></>
          <SaveButton><strong>Salvar</strong></SaveButton>
        </FormContainer>

      </Container>
    </div>
  )
};

export default EditProfilePage;