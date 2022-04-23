import * as React from 'react';
import styles from './Header.module.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import icon from '../../../assets/gk8Logo.svg'

export default function Header() {

    return (
        <AppBar position="static" style={{background: "white"}}>
            <Toolbar variant="dense"  className={styles.header}>
                    <img src={icon} alt="GK8Logo" />
                <Typography variant="h6" color="#31415F" component="div" >
                    Ethereum Transactions Explorer
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
