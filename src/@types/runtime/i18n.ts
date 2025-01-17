export interface Option {
  [variable: string]: string
}

export type TFunction = (key: string, options?: Option) => string

export interface NamespaceTranslation {
  [namespace: string]: { [key: string]: string }
}

export interface Translations {
  [language: string]: NamespaceTranslation
}

export type Language = string
export type translations = Translations
export type ChangeLanguageFn = (language: string) => void
export type TranslationFn = (namespace: string, options?: Option) => TFunction | string
export type SetTranslationsFn = (language: string, translations: NamespaceTranslation) => i18nApi

export interface i18nApi {
  language: Language
  translations: Translations
  changeLanguage: ChangeLanguageFn
  t: TranslationFn
  setTranslations: SetTranslationsFn
}
