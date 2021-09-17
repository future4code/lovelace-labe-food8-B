import axios from 'axios'
import {BASE_URL} from '../constants/urls'
import { goToHome } from '../routes/coordinator'

export const login = (body, clear, history) => {
    axios.post(`${BASE_URL}/login`, body)
    .then((response) => {
      localStorage.setItem("token", response.data.token)
      clear()
      goToHome(history)
    }).catch((error) => {
      console.log("Erro no login")
      alert("Erro no Login")
    })
}

export const signUp = (body, clear, history) => {
    axios.post(`${BASE_URL}/signup`, body)
    .then((response) => {
      localStorage.setItem("token", response.data.token)
      clear()
      goToHome(history)
    }).catch((error) => {
      console.log("Erro no login")
      alert("Erro no Login")
    })
}