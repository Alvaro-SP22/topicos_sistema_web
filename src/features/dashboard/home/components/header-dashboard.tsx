import React from 'react'
import Typography from '@mui/material/Typography'
import styles from './header.module.css'

const HeaderDashboard: React.FC = () => {
    return (
        <div className={styles.headerWrapper}>
            <div>
                <Typography>Alvaro Chico</Typography>
                <Typography variant='subtitle2'>Cerrar sesión</Typography>
            </div>
            <img src='#' />
        </div>
    )
}

export default HeaderDashboard
