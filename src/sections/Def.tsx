export const def: string = `
\`\`\` clojure-repl

;; the way to bind values to name is using def
backshop.core=> (def workshop-name "backshop")
;;now you can use the name workshop-name everywhere

backshop.core=> workshop-name
"backshop"

;;you could even bind functions to name
backshop.core=> (def super-sum (fn [a b] (+ a b)))
backshop.core=> (super-sum 1 2)
3

;; you will see in the next section that you could use defn to define function as well
;;defn is the same as (def name (fn []))

;; you could bind whatever value to any symbol
backshop.core=> (def persons [{:name "john"} {:name "doe"}])
backshop.core=> persons
[{:name "john"} {:name "doe"}]
\`\`\`
  `
