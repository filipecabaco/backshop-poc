
export const namespace: string = `
Namespaces are global entities that you can always refer by using the FQDN for instance: \`(clojure.core/inc 1)\`
\`\`\` clojure
(create-ns 'webshop) ;; will create the namespace
(in-ns 'webshop) ;; update the current *ns* to webshop

;; try to sum two Numbers
(+ 10 5) ; Unable to resolve symbol: + in this context

;; we need somehow refer the clojure.core namespace
;; clojure.core namespace contains the core clojure functions
;; webshop namespace contains none symbol

;; will import all public symbols to current namespace
(clojure.core/refer 'clojure.core)

;; selective import
(clojure.core/refer 'clojure.core :only '[+])

;; as an alternative to copying the mappings from clojure.core namespace
;; you can create an alias
(alias 'core 'clojure.core)

;; then you can refer clojure.core as core
(core/+  1 2)

;; what about load a cloJAR into our namespace
;; first let's add on our project.clj the dependency to cheshire
;; [cheshire "5.8.0"]
;; https://github.com/dakrone/cheshire

(require '[cheshire.core :as c])
(c/generate-string {:name "backshop"})
(c/generate-smile {:foo "bar" :baz 5})

;; now we have the base to use the ns macro function
;; ns is a shorthand to refer and alias
(ns webshop.core
  (:require [cheshire.core :as c]))
;; or
(ns webshop.core
  (:require [cheshire.core :refer :all]))
;; or
(ns webshop.core
  (:require [cheshire.core :refer [generate-smile generate-string]]))
\`\`\`
`
