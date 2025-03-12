import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';

const Header: React.FC = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        CoWorking
                    </Typography>
                    <Avatar alt="Profile" src="/static/images/avatar/1.jpg" className='cursor-pointer'/>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
