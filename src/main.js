import Vue from 'vue'
import routes from './routes'

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  render (h) {
    const matchingView = routes[this.currentRoute]
    const ViewComponent = matchingView
      ? require('./pages/' + matchingView + '.vue').default
      : require('./pages/404.vue').default
    return h(ViewComponent)
  }
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})
