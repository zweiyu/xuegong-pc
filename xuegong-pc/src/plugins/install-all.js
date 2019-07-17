import MessageBox from './message-box'

const plugins = {
  MessageBox
}

export default function installAllPlugins (instance) {
  Object.keys(plugins).forEach(key => {
    instance.use(plugins[key])
  })
}
