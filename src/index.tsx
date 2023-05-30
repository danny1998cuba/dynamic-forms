import * as React from 'react'
import styles from './styles.module.css'

import { DynamicForm } from './v1'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export { DynamicForm }
