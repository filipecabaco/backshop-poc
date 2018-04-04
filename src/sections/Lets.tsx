export const lets = `
You will see let being use a lot in Clojure and it is a really valuable tool.
\`\`\` clojure
;; usually you would try to make several defs to keep your values
(defn foo []
  (def value1 1)
  (def value2 1)
  (+ value1 value2)) ;; 2

;; but as you can see this doesn't look that good and it has a big issue!
(println value1) ;; 0
;; value1 now leaked the outside of the foo function!

;; so clojure offers a better way to control local values with the function let
(defn foo []
  (let [value1 2
        value2 2]
      (+ value1 value2))) ;; 4
;; even with the previous leaked value, the bind worked
;; why? because it rebinds inside the context of our let and we get the expected result!

;; and with this we can do more than just simple values. you can run functions as complex as you want
;; you can even ignore the binding with _ and use this capability to print information
(defn foo []
  (let [values (range 10)
        incremented (map inc values)
        _ (println incremented)
        sum (reduce + incremented)]
    sum))

;; you can also use deconstruction
(defn foo []
  (let [value {:potato [1 2 3 4 5]}
        {potato :potato} value
        [first second & rest] potato]
      {:first first :second second :rest rest}))
;; check the following link for more deconstruction superpowers: https://gist.github.com/john2x/e1dca953548bfdfb9844

;; and if you really want too you can let inside a let inside a let
(defn foo []
  (let [v1 1]
    (let [v2 2]
      (let [v3 3]
        [v1 v2 v3]))))
\`\`\`
`