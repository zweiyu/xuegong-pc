import MessageBox from './message-box'
import Toast from './toast'

const plugins = {
  MessageBox,
  Toast,
}

export default function installAllPlugins (instance) {
  Object.keys(plugins).forEach(key => {
    instance.use(plugins[key])
  })
}
