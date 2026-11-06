export interface FormulaItem {
  id: string
  name: string
  /** Sous-thème (sert de filtre dans l'interface) */
  group: string
  /** Expression LaTeX (KaTeX). Absente pour les règles purement textuelles. */
  latex?: string
  /** Règle en texte (matières non mathématiques comme l'éthique) */
  text?: string
  /** Légende des symboles : [symbole LaTeX, signification] */
  vars?: [string, string][]
  /** Quand et comment l'utiliser */
  note: string
}
