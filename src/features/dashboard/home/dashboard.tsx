import React from 'react'
import { Outlet } from 'react-router-dom'
import Page from '../../../components/page/page'
import HeaderDashboard from './components/header-dashboard'
import styles from './dashboard.module.css'

const Dashboard: React.FC = () => {
    return (
        <Page>
            <HeaderDashboard />
            <div className={styles.bodyWrapper}>
                <Outlet />
            </div>
        </Page>
    )
}

export default Dashboard
