import { Outlet } from 'react-router-dom'
import { Grid, Box, Container } from '@mui/material'

import Sidebar from '../components/NavSidebar'
import RightSidebar from '../components/RightSidebar'
import LeftSidebar from '../components/LeftSidebar'

const LeftSidebarLayout = () => {
    return (
        <Grid container sx={{ height: '100%' }} columns={16}>
            <Grid item xs={1} sx={{ position: 'fixed', height: '100%', width: '100%', borderRight: 1, borderColor: 'lightgray' }}>
                <Sidebar />
            </Grid>
            <Grid item xs={16} sx={{ width: '100%', height: '100%' }}>
                <Grid container columns={16} sx={{ height: '100%' }}>
                    <Grid item xs={1}>
                        <></>
                    </Grid>
                    <Grid item xs={4} sx={{ height: '100%', borderRight: 1, borderColor: 'lightgray', p: 0, m: 0 }}>
                        <LeftSidebar />
                    </Grid>
                    <Grid item xs={11} sx={{ height: '100%' }}>
                        <Outlet />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default LeftSidebarLayout;