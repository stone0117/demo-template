import Vue        from 'vue'
import App        from './App.vue'
import router     from './router'
import store      from './store'
import ElementUI  from 'element-ui'
import './assets/reset.css'
import './styles.scss'
import './styles/index.scss'
import './style/index.scss'

Vue.use(ElementUI)

////////////////////////////////////////////////////////////////////////////
///////////////// 自定义组件 ////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
import components    from './components'

Vue.use(components)
////////////////////////////////////////////////////////////////////////////

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
