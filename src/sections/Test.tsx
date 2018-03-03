import * as React from 'react'
const Highlight = require('react-syntax-highlight')

const code = `
Potato
`

export function Test(): JSX.Element {
  return (
    <div id="defn">
      <h2>functions</h2>
      <p> functions are first class citizens </p>

      <h4> tldr; </h4>
      <p> you could create functions using defn or simply using fn </p>
      <Highlight lang={'clojure'} value={code}/>
    </div>
  )}
