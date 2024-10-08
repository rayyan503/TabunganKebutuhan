import './assets/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGoogle, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import 'sweetalert2/dist/sweetalert2.min.css'
library.add(faEye, faEyeSlash, faGoogle, faFacebook, faInstagram, faTwitter)

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Toast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-bootstrap.css'
import store from './store'

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(store)
app.use(Toast)
app.mount('#app')
