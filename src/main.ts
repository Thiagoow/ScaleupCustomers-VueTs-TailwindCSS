import { createApp } from 'vue'
import App from './App.vue'
// Import on main to be available on all components
import Notifications from '@kyvg/vue3-notification'

const app = createApp(App)
app.use(Notifications)
app.mount('#app')
