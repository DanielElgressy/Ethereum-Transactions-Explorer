import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = 'https://api.etherscan.io/api'

const InputField = (props) => {
    const [inputValue, setInputValue] = useState('')
    const [isLoading, setIsLoading] = useState(false)


    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const getTrans = async () => {
        props.loadResult([])
        const trimedInputValue = inputValue.trim()
        setIsLoading(true)
        const getURL = `${BASE_URL}?module=account&action=txlistinternal&address=${trimedInputValue}&startblock=0
        &endblock=2702578
        &page=1
        &offset=10
        &sort=asc
        &apikey=${API_KEY}`

        await axios.get(getURL)

            .then(function (response) {
                if (response.data.status === "1") {
                    props.setError(null)
                    props.loadResult(response.data.result)
                } else if (response.data.status !== "1" && response.data.message === "NOTOK") {
                    props.setError(response.data.result)
                    setIsLoading(false)
                } else {
                    props.setError(response.data.message)
                    setIsLoading(false)
                }
                setIsLoading(false)
            })
            .catch(function (error) {
                setIsLoading(false)
                throw Error(error)
            })

    }

    const searchAddressHandler = () => {
        getTrans()
        props.searchAddress(inputValue)
    }

    const test = (event) => {
        if(event.charCode === 13 ){
            searchAddressHandler()
        }
    }

    return (
        <>
            <TextField
                id="outlined-name"
                label="Ethereum address"
                size="small"
                sx={{ width: 420 }}
                value={inputValue}
                onChange={handleChange}
                onKeyPress={test}
            />
            <Button onClick={searchAddressHandler} variant="contained" >
                {!isLoading ? <SearchIcon /> : <CircularProgress size={20} sx={{ color: 'white' }} />}
            </Button>

        </>
    )
}

export default InputField