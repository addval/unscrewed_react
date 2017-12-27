import axios from 'axios';

const baseUrl = 'http://localhost:3000';

export const userLogin = (email,password)=> {
  return axios.post(baseUrl+'/api/auth', {
    email: email,
    password: password
  })
}