import axios from 'axios'

export default {
  async register({ commit }, userData) {
    try {
      let config = {
        method: 'post',
        url: `http://localhost:8080/user/register`,
        headers: {
          'Content-Type': 'application/json'
        },
        data: userData
      }
      const response = await axios(config)
      commit('REGISTER_SUCCESS', response.data)
      console.log('response', response)
      return response.data
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Registration failed!'
      commit('REGISTER_FAILURE', errorMessage)
      throw new Error(errorMessage)
    }
  },

  async login({ commit }, userData) {
    try {
      let config = {
        method: 'post',
        url: `http://localhost:8080/user/login`,
        headers: {
          'Content-Type': 'application/json'
        },
        data: userData
      }

      const response = await axios(config)
      commit('LOGIN_SUCCESS', response.data)
      console.log('Login response:', response)

      // Redirect user based on their role
      if (response.data.role === 'admin') {
        return { redirect: '/dashboard' }
      } else {
        return { redirect: '/' }
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Login failed!'
      commit('LOGIN_FAILURE', errorMessage)
      throw new Error(errorMessage)
    }
  }
}
