import React from 'react'
import Card from '../../../UI/Card'
import InputField from '../../../UI/InputField'
import styles from './Search.module.css'

const Search = (props) => {
  return (

    <Card className={styles.searchWrapper}>
      <InputField
        value={props.addressValue}
        searchAddress={props.addressChangleHandler}
        setError={props.setError}
        loadResult={props.loadResult}
      />
    </Card>
  )
}

export default Search