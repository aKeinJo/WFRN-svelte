import { mount } from 'svelte'
import './app.postcss'
import App from './App.svelte'

const app = mount(App, {
  target: document.getElementById('app')!, // index.html의 <div id="app">에 마운트
})

export default app