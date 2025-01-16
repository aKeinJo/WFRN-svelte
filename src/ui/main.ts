import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'

const app = mount(App, {
  target: document.getElementById('app')!, // index.html의 <div id="app">에 마운트
})

export default app