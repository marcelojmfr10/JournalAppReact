import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from "@mui/material"




export const NavBar = ({drawerWidth = 240}) => {
  return (
    <AppBar position="fixed" sx={{
        width: {
            sm: `calc(100% - ${drawerWidth}px)`,
        }, ml: { sm: `${drawerWidth}px`}
    }}
    >
        <Toolbar>
            <IconButton color="inherit" edge="start" sx={{mr: 2, display: {sm: 'none'}}}>
                <MenuOutlined />
            </IconButton>

            <Typography

            variant="h6"

            // noWrap

            component="span"

            sx={{ flexGrow: 1 }}

          >

            JournalApp

          </Typography>



          <IconButton aria-label="" color="error">

            <LogoutOutlined />

          </IconButton>
        </Toolbar>
    </AppBar>
    
  )
}

