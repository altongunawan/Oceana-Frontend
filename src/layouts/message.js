import { Outlet } from 'react-router-dom'
import { Grid } from '@mui/material'

import Sidebar from '../components/Sidebar'
import RightSidebar from '../components/RightSidebar'
// import MenuBar from '../components/MenuBar'

const MessageLayout = () => {
    return (
        <Grid container sx={{ height: '100%' }} columns={16}>
            <Grid item xs={1} sx={{ backgroundColor: '#043565' }}>
                <Sidebar />
            </Grid>
            <Grid item xs={13} sx={{ height: '100%' }}>
                <Outlet />
            </Grid>
            <Grid item xs={3} sx={{ height: '100%' }}>
                <RightSidebar />
            </Grid>
        </Grid>
    )
}

export default MessageLayout;