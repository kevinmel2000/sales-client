/* eslint-disable */
import Api from '@/services/Api'

export default {
  register(credentials) {
    return Api().post('/user/register', credentials)
  },
  login(credentials) {    
    return Api().post('/user/login', credentials)
  },
  logout(){
    return Api().get('/user/logout')
  }
}