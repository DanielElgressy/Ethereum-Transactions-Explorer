import React, { useState } from 'react'
import Search from './Search/Search'
import styles from './Content.module.css'
import Transactions from './Transactions/Transactions'

const ETHER_VALUE = 10**18

const Content = (props) => {
    const [address, setAddress] = useState('')
    const [error, setError] = useState(null)
    const [result, setResult] = useState([])


    const addressChangleHandler = (value) => {
        setAddress(value)
    }

    const errorHandler = (message) => {
        setError(message)
    }

    const getDate = (unixDate) => {
        const dateConvert = Date(unixDate)
        const myDate =  new Date(dateConvert);
        return myDate.toLocaleString()
    }

    const calcTransactionValue = (value) => {
        const valueNumber = +value
        const calculatedValue = valueNumber / ETHER_VALUE
        return calculatedValue
    }
    const resultHandler = (data) => {
        const Rows = data.map((item, key) => (
            { id: key, timestamp: getDate(item.timestamp), from: item.from, to: item.to, value: calcTransactionValue(item.value), hash: item.hash }
        ))
        setResult(Rows)
    }

    return (
        <div className={styles.content}>
            <Search
                addressValue={address}
                addressChangleHandler={addressChangleHandler}
                setError={errorHandler}
                loadResult={resultHandler}
            />
         
                <Transactions result={result} error={error}/>
            
        </div>
    )
}

export default Content