export const repl: string =  `
\`\`\` clojure-repl
$ lein repl
;; you can type all clojure commands and get the feedback immediately
backshop.core=> (+ 1 2)
3

backshop.core=> (defn sum [a b] (+ a b))
#'backshop.core/sum

backshop.core=> (sum 1 2)
3
\`\`\`

better exception experience on repl add the follow to project.clj

\`\`\` clojure
:repl-options { :caught clj-stacktrace.repl/pst+ }
:profiles {:dev { :dependencies [[clj-stacktrace "0.2.8"]]} }
\`\`\`

the above settings will print better stacktrace once things blows up

\`\`\` clojure-repl
backshop.core=> (/ 1 0)
ArithmeticException Divide by zero  clojure.lang.Numbers.divide (Numbers.java:158)
java.lang.ArithmeticException: Divide by zero
                  Numbers.java:158 clojure.lang.Numbers.divide
                  Numbers.java:3808 clojure.lang.Numbers.divide
form-init5807277563015766183.clj:1 backshop.core/eval1376
form-init5807277563015766183.clj:1 backshop.core/eval1376
                Compiler.java:6927 clojure.lang.Compiler.eval
                Compiler.java:6890 clojure.lang.Compiler.eval
                      core.clj:3105 clojure.core/eval
                      core.clj:3101 clojure.core/eval
                      main.clj:240 clojure.main/repl[fn]
                      main.clj:240 clojure.main/repl[fn]
                      main.clj:258 clojure.main/repl[fn]
                      main.clj:258 clojure.main/repl
                      main.clj:174 clojure.main/repl
                  RestFn.java:1523 clojure.lang.RestFn.invoke
          interruptible_eval.clj:87 clojure.tools.nrepl.middleware.interruptible-eval/evaluate[fn]
                      AFn.java:152 clojure.lang.AFn.applyToHelper
                      AFn.java:144 clojure.lang.AFn.applyTo
                      core.clj:646 clojure.core/apply
                      core.clj:1881 clojure.core/with-bindings*
                      core.clj:1881 clojure.core/with-bindings*
                    RestFn.java:425 clojure.lang.RestFn.invoke
          interruptible_eval.clj:85 clojure.tools.nrepl.middleware.interruptible-eval/evaluate
          interruptible_eval.clj:55 clojure.tools.nrepl.middleware.interruptible-eval/evaluate
        interruptible_eval.clj:222 clojure.tools.nrepl.middleware.interruptible-eval/interruptible-eval[fn]
        interruptible_eval.clj:190 clojure.tools.nrepl.middleware.interruptible-eval/run-next[fn]
                        AFn.java:22 clojure.lang.AFn.run
      ThreadPoolExecutor.java:1142 java.util.concurrent.ThreadPoolExecutor.runWorker
        ThreadPoolExecutor.java:617 java.util.concurrent.ThreadPoolExecutor$Worker.run
                    Thread.java:745 java.lang.Thread.run
\`\`\`
`
