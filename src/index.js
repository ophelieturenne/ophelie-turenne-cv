// It will be the only file with .js extension file as the rest will using Jsx for emmet for shortcut

import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import './index.css'

// it will render from components and the id root in html file .This function is used to render a single React Component or several Components wrapped together in a Component or a div element.
ReactDom.render(<App/>,document.querySelector("#root"))
