import Top from './top.vue'
import Footer from './footer.vue'

const components = {
  Top,
  Footer
}

export default function registerAllComponents (instance) {
  Object.keys(components).forEach(key => {
    instance.component(key, components[key])
  })
}
