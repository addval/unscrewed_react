import axios from 'axios';

const baseUrl = 'http://localhost:8080';

export const userLogin = (email,password)=> {
  return axios.post(baseUrl+'/api/auth', {
    email: email,
    password: password
  })
}
export const userSignup = (email,password)=> {
  return axios.post(baseUrl+'/api/signup', {
    email: email,
    password: password
  })
}
export const getAuthState = () => {
  return {
    userToken: localStorage.getItem('userToken'),
    username: localStorage.getItem('username'),
  }
}
export const logout = () => {
  return new Promise((resolve) => {
    localStorage.removeItem('userToken')
    localStorage.removeItem('username')
    resolve(true)
  })
}
