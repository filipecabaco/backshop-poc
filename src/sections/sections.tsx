import { leinigen } from './Leinigen'
import { repl } from './Repl'
import { def } from './Def'
import { defn } from './Defn'
import { ifElse } from './IfElse'
import { namespace } from './Namespace'
import { lets } from './Lets'
import { map } from './Map'
import { partial } from './Partial'
import { reduce } from './Reduce'
import { comp } from './Comp'

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

export const LetsSection: Section = {
  title: 'Let',
  subTitle: 'bind your values only when you need them',
  content: lets
}

export const MapSection: Section = {
  title: 'Map',
  subTitle: 'apply a function to your collection',
  content: map
}

export const PartialSection: Section = {
  title: 'Partial',
  subTitle: 'you do not need all the arguments all the time...',
  content: partial
}

export const ReduceSection: Section = {
  title: 'Reduce',
  subTitle: 'reduce your worries',
  content: reduce
}

export const CompSection: Section = {
  title: 'Comp',
  subTitle: 'compose your life!',
  content: comp
}

export function allSections () {
   return [
     LeinigenSection,
     ReplSection,
     DefSection,
     DefnSection,
     IfElseSection,
     NamespaceSection,
     LetsSection,
     MapSection,
     PartialSection,
     ReduceSection,
     CompSection
    ]
}