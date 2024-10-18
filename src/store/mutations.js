export default {
  REGISTER_SUCCESS(state, userData) {
    state.user = userData
    state.error = null
  },
  REGISTER_FAILURE(state, error) {
    state.error = error
  },
  LOGIN_SUCCESS(state, data) {
    state.user = data.user
    localStorage.setItem('user', JSON.stringify(data.user))
  },
  LOGIN_FAILURE(state, error) {
    state.error = error
  },
  LOGOUT_SUCCESS(state) {
    state.user = null
    localStorage.removeItem('user')
  }
}
