import { Functions } from './Functions'
import { Leinigen } from './Leinigen'
import { Repl } from './Repl'
import { Def } from './Def'
import { Namespace } from './Namespace'

export interface Section {
  title: string,
  subTitle: string,
  content: JSX.Element
}

export const LeinigenSection: Section = {
  title: 'Leinegen',
  subTitle: 'declarative configuration and project automation made simple',
  content: Leinigen()
}

export const ReplSection: Section = {
  title: 'Repl',
  subTitle: 'read-evaluate-print-loop will empower your development experience',
  content: Repl()
}

export const DefSection: Section = {
  title: 'Def',
  subTitle: `bind values to names -> 'variables'`,
  content: Def()
}

export const FunctionsSection: Section = {
  title: 'Functions',
  subTitle: 'functions are first class citizens',
  content: Functions()
}

export const NamespaceSection: Section = {
  title: 'Namespace',
  subTitle: 'modularizing your app',
  content: Namespace()
}

export function allSections () {
   return [
     LeinigenSection,
     ReplSection,
     DefSection,
     FunctionsSection,
     NamespaceSection
    ]
}