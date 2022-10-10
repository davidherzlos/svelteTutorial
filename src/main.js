import './app.css'
import Tutorial from './Tutorial.svelte'

const app = new Tutorial({
  target: document.getElementById('app'),
  props: {
    language: 'Javascript'
  }
})


export default app
