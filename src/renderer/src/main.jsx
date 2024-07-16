import './styles/element.scss'
import './styles/layout.scss'
import './styles/text.scss'
import './styles/background.scss'

import '../../common/util'

import { createRoot } from 'react-dom/client'
import App from './app'

const domRoot = document.querySelector('#root')
const root = createRoot(domRoot)
root.render(<App />)
