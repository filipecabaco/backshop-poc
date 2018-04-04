export const comp: string = `
The true way for happiness (and highly performant systems) is to compose smaller functions to make huge work.

\`\`\` clojure
;; so let's create a couple of functions that do small stuff

(defn is-even
  [value]
  (if (= 0 (mod value 2)) value)) ;; returns value if even, otherwise nil

(defn only-even
  [values]
  (remove nil? (map is-even values))) ;; returns a list of only even values

(defn factorial
  [value]
  (reduce * 1 (range 1 value))) ;; returns the factorial of a number

(defn factorials
  [values]
  (map factorial values)) ;; returns a list of the factorials

(defn split-number
  [value]
  (let [string (str value)
        chars (clojure.string/split string #"")
        parsed (map #(Integer/parseInt %1) chars)]
    parsed)) ;; returns list of numeric values from a number

(defn split-numbers
  [values]
  (map split-number values)) ;; returns the values splitted

(defn sum
  [values]
  (reduce + values))

;; lets try to use all of them in one go
(defn magic [values]
  (let [evens (only-even values)
        factorials (factorials evens)
        numbers (split-numbers factorials)
        flat-numbers (flatten numbers)
        result (sum flat-numbers)]
    result))


;; so what are we doing?
;; 1 - filter even values from our arguments
;; 2 - calculate the factorial for each
;; 3 - get the individual numbers of those factorials
;; 4 - flatten the collections returned by the previous step
;; 5 - sum all the values

(magic [2 4 6 8 10]) ;; 46

;; I like this combination of functions and we could use our magic function to always use this sequence
;; but there's a better way! we can use composition to create an unique function!

(def magic-comp (comp sum flatten split-numbers factorials only-even))
(magic-comp [2 4 6 8 10]) ;; 46

;; what happened? comp grabs our functions and creates a function that is the composition of the arguments.
;; it starts from the right to the left and "joins" them and in the end you get a function that applies all our steps!
;; using a bit of math, it creates f(g(h(x)))

(sum (flatten (split-numbers (factorials (only-even [2 4 6 8 10])))))
\`\`\`
`