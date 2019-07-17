
const components = {
}

export default function registerAllComponents (instance) {
  Object.keys(components).forEach(key => {
    instance.component(key, components[key])
  })
}
