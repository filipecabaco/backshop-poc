export const reduce: string = `
\`reduce\` it's another known function so lets dive in

\`\`\` clojure
;; as you might now, reductions are a really common term in functional languages
;;where you want to reduce your collection into something more useful

(reduce + [1 2 3]) ;; 6
;; as you can see you can apply the + function to our collection and accumulate it

;; you could also give it an initial value
(reduce + 10 [1 2 3]) ;; 16

;; how does it know the initial value?
;; clojure will try to apply the function to the first two arguments and proceed from there
(reduce str [[] :a :b]) ;; "[]:a:b"
(reduce conj [[] :a :b]) ;; [:a :b]

;; and like map, you can use anonymous functions...
(reduce (fn [acc v] (+ acc v)) [1 2]) ;; 3
;; ... or a partial function
(reduce (partial +) [1 2]) ;; 3
\`\`\`
`