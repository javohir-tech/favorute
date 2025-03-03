import { createApp } from 'vue'
import App from './App.vue'
import './App.css'
import Ui_components from './Ui_components'

const app = createApp(App)

Ui_components.map(component => app.component(component.name, component))



app.mount('#app')
