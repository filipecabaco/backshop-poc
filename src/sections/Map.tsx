export const map: string = `
\`map\` it's a really known and used function on functional programming languages and, as expected, clojure has it!
\`\`\` clojure
(map inc [1 2 3]) ;; [2 3 4]

;; so what happened here?
;; well... we applied the function (inc) to each element of our list

;; you can also provide your functions
(defn say-what [string]
  (str string " say what?"))
(map say-what ["potato" "tomato"])

;; or you could provide a anonymous function
(map (fn [x] (str x " say what?")) ["potato" "tomato"])

;; you can also use a smaller notation to get an anonymous function
(map #(str %1 " say what?") ["potato" "tomato"])

;; but there are other tricks to our clojure map... if you see the documentation you will see that the arguments are
;; 1 - the function
;; 2 - the collection
;; 3 - the collection
;; ... - the collection
;; the clojure map can receive whatever number of collections you want! and why would you need this?

;; you might want it to run a function with more than one argument! it will pass to your function the arguments in order
(defn zip-it [v1 v2] {v1 v2})
(map zip-it [:key1 :key2] ["value1" "value2"]) ;; ({:key1 "value1"} {:key2 "value2"})

;; and if there are not enought elements in one of them, it will stop
(map zip-it [:key1] ["value1" "value2"]) ;; ({:key1 "value1"})
(map zip-it [:key1 :key2] ["value1"]) ;; ({:key1 "value1"})
\`\`\`
`