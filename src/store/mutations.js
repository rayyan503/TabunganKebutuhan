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
    state.token = data.token
  },
  LOGIN_FAILURE(state, error) {
    state.error = error
  }
}
