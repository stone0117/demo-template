import CPre   from './c-pre'
import CzPage from './cz-page'

const install = (Vue) => {
  Vue.component('CPre', CPre)
  Vue.component('CzPage', CzPage)
}

const components = { install }
export default components



