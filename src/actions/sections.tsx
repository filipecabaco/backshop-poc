import { Section } from '../sections/sections'
export const CHANGE_SECTION = 'CHANGE_SECTION'
export type CHANGE_SECTION = typeof CHANGE_SECTION

export interface ChangeSection {
  type: CHANGE_SECTION,
  section?: Section
}

export type SectionAction = ChangeSection

export function changeSection(section: Section): ChangeSection {
  return { type: CHANGE_SECTION, section }
}
