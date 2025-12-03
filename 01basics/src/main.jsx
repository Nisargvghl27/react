import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const reactElement=React.createElement(
  'a',
  {href:'https://www.google.com'},
  'Go to Google'
)

createRoot(document.getElementById('root')).render(
  // <>
  //  <App />
  // </>
  reactElement
)
