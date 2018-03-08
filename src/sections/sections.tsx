import { functions } from './Functions'
import { leinigen } from './Leinigen'
import { repl } from './Repl'
import { Def } from './Def'
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
  subTitle: `bind values to names -> 'variables'`,
  content: Def()
}

export const FunctionsSection: Section = {
  title: 'Functions',
  subTitle: 'functions are first class citizens',
  content: functions
}

export const NamespaceSection: Section = {
  title: 'Namespace',
  subTitle: 'modularizing your app',
  content: namespace
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