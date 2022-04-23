import React from 'react'
import Card from '../../../UI/Card'
import DataTable from './DataTable'
import styles from './Transactions.module.css'

const Transactions = (props) => {
  const { error } = props
  return (
    <Card className={styles.transactionsWrapper}>
      {props.result.length > 0 && <DataTable rows={props.result} />}
      {error && <h4>{error}</h4>}
    </Card>
  )
}

export default Transactions