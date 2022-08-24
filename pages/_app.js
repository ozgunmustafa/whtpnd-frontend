//import '../styles/globals.css'
import 'antd/dist/antd.css'
import { Provider } from 'react-redux'
import '../styles/scss/main.scss'
import store from '../src/store' 

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
