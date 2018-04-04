export const ifElse: string = `
\`\`\` clojure
;; if has a peculiar syntax
(if (condition) (truthy form expression) (falsy form expression))

(if true "true" "false") ;; will return "true"

;; in clojure everything is truthy except nil and false

(if nil "true" "false") ;; will return "false"

(def person {:age 17 :name "thiago" :})
(if (> (:age person) 18)
  (beer :drink)
  (go-home :netflix))

(if (not (> (:age person) 18))
  (go-home :nextflix)
  (beer :drink))

(if-not (> (:age person) 18)
  (go-home :netflix)
  (beer :drink))

;; wait, we can only execute one form expression
;; what if I need to execute more than one form in case of truthy/falsy value
;; "do" for the rescue

(do
  (println "hello")
  (+ 1 2))

;; do function will receive N number of expressions and return the last one
(if (has-credit? transaction)
  (do
    (account/withdraw transaction)
    (email/send :withdraw)))


;; remember, nil and false are the falsy values in clojure
;; everything else will be considered truthy
(if-let [person (api/fetch-by-id 192)]
  (account/notify person)
  (log/warn "person does not exists"))
\`\`\`
`