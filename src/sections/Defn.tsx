import * as React from 'react'
const Highlight = require('react-syntax-highlight')

const code = `
;; the easy way to create a function is with fn
user=> (fn [a b] (+ a b))

;; let's bind a name to the function
user=> (def my-super-sum (fn [a b] (+ a b) ))

;; now you can easily apply arguments to the function
user=> (my-super-sum 1 4) ; 5

;; DEFN
;; simpler way to create my-super-sum would be using defn
user=> (defn my-super-sum [a b] (+ a b))

;; RETURN
;; the last form expression evaluated will be the return's function
user=> (defn my-crazy-sum [a b]
          (println "logging +" a b)
          (+ a b))

;; as functions are value, we could return a function
user=> (defn sum-factory [a]
          (fn [b] (+ a b)))

user=> (def inc-five (sum-factory 5))
user=> (inc-five 10) ; will return 15

;; we could create 'anonymous' functions in clojure with special syntax
user=> (def sum #(+ %1 %2))

;; the #(function %1 %2 ... %n) syntax is a easy way to create inline func
;; and very useful specially on map/reduce
; shorthand for (fn [a] (inc a)) => #(inc %1)
user=> (map #(inc %1) [1 2 3 4])
`

export function Defn(): JSX.Element {
  return (
    <div id="defn">
      <h2>functions</h2>
      <p> functions are first class citizens </p>

      <h4> tldr; </h4>
      <p> you could create functions using defn or simply using fn </p>
      <Highlight lang={'clojure'} value={code}/>
    </div>
  )}
