import './assets/main.css'
import { translationsData } from './utils/translations'
import { createApp, inject } from 'vue'
import { createPinia } from 'pinia'
import PDFObjectPlugin from 'pdfobject-vue';


import App from './App.vue'
import router from './router'

const app = createApp(App);
app.provide('translations', translationsData);

app.use(createPinia())
app.use(router)
app.use(PDFObjectPlugin);


app.mount('#app')
