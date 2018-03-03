import { Defn } from './Defn'
import { Test } from './Test'
export interface Section {
  title: string,
  position: number,
  content: JSX.Element
}

export const DefnSection: Section = {
  title: 'Defn',
  position: 1,
  content: Defn()
}

export const TestSection: Section = {
  title: 'Test',
  position: 2,
  content: Test()
}