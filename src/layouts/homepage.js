import { Outlet } from 'react-router-dom'
import { Grid } from '@mui/material'

import Sidebar from '../components/NavSidebar'
import RightSidebar from '../components/RightSidebar'

const HomepageLayout = () => {
    return (
        <Grid container sx={{ height: '100%', width: '100%' }} columns={15}>
            <Grid item xs={1} sx={{ position: 'fixed', height: '100%', width: '100%', borderRight: 1, borderColor: 'lightgray' }}>
                <Sidebar />
            </Grid>
            <Grid item xs={15} sx={{ width: '100%', height: '100%' }}>
                <Grid container columns={16} sx={{ width: '100%' }}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={11} sx={{ height: '100%', backgroundColor: 'rgb(250, 250, 250)' }}>
                        <Outlet />
                    </Grid>
                    <Grid item xs={4} sx={{ height: '100%', backgroundColor: 'rgb(250, 250, 250)' }}>
                        <RightSidebar />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default HomepageLayout;