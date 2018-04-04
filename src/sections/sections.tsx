import { leinigen } from './Leinigen'
import { repl } from './Repl'
import { def } from './Def'
import { defn } from './Defn'
import { ifElse } from './IfElse'
import { namespace } from './Namespace'

export interface Section {
  title: string,
  subTitle: string,
  content: string
}

export const LeinigenSection: Section = {
  title: 'Leinegen',
  subTitle: 'declarative configuration and project automation made simple',
  content: leinigen
}

export const ReplSection: Section = {
  title: 'Repl',
  subTitle: 'read-evaluate-print-loop will empower your development experience',
  content: repl
}

export const DefSection: Section = {
  title: 'Def',
  subTitle: 'bind values to names -> "variables"',
  content: def
}
export const DefnSection: Section = {
  title: 'Defn',
  subTitle: 'functions are first class citizens',
  content: defn
}

export const IfElseSection: Section = {
  title: 'If - Else',
  subTitle: 'some people will say if-else are useless',
  content: ifElse
}

export const NamespaceSection: Section = {
  title: 'Namespace',
  subTitle: 'your clojure runtime it is nothing than a set of namespaces talking with each other',
  content: namespace
}

export function allSections () {
   return [
     LeinigenSection,
     ReplSection,
     DefSection,
     DefnSection,
     IfElseSection,
     NamespaceSection
    ]
}