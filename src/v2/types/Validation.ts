export interface ValidationRule {
  type:
    | 'required'
    | 'isTrue'
    | 'isFalse'
    | 'min'
    | 'max'
    | 'lessThan'
    | 'moreThan'
    | 'positive'
    | 'negative'
    | 'integer'
    | 'isEmail'
    | 'isUrl'
    | 'isUuid'
    | 'lowercase'
    | 'uppercase'
    | 'minLength'
    | 'maxLength'
    | 'length'
    | 'regex'
  message: string
  value?: number | RegExp | boolean | Date | string
}
