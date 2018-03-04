import * as React from 'react'
import './Code.css'
const Highlight = require('react-syntax-highlight')

const code = `(ns backshop)`

export function Namespace(): JSX.Element {
  return (
    <Highlight lang={'clojure'} value={code}/>
  )
}
