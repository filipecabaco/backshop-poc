export const partial: string = `
\`\`\` clojure
;; now that we know map you can already do some fun stuff with data
;; but at the same time you will see yourself doing some weird anonymous functions

(map (fn [v] (+ 2 v)) [1 2]) ;; (3 4)

;;how can we avoid this? with partial!
(map (partial + 2) [1 2]) ;; (3 4)
;; what the hell happened? well... partial creates a *partial* function that can be used whenever you want

;; partial receives a function as first argument, N arguments from there forward
;; and since it's a function we can run it by it self
((partial + 1 1)) ;; 2

;; just don't forget that it will handle the input as the last argument
(map (partial str "say what? ") ["potato" "tomato"]) ;; ("say what? potato" "say what? tomato")
\`\`\`
`