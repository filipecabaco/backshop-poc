import * as React from 'react'
import './Code.css'
const Highlight = require('react-syntax-highlight')

const code = `
# install leinigen
$ brew install leinigen

# creating new app
$ lein new app backshop

# running tests
$ lein test

# start a repl
$ lein repl

# all commands
$ lein
`

export function Leinigen(): JSX.Element {
  return (
    <Highlight lang={'bash'} value={code}/>
  )}
