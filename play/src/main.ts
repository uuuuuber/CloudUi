import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

import {components} from '@cloud/ui/index'
// import {CIcon}  from '@cloud/ui/index'
// import {CButton} from '@cloud/ui/index'
// import '@cloud/theme/mixins/index.scss'

const app = createApp(App)


components.forEach(comp=>app.use(comp))
// app.use(CButton)
// app.use(CIcon)

app.mount('#app')
