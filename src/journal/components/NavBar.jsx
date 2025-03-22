import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import { startLogout } from "../../store/auth";


export const NavBar = ({ drawerWidth = 240 }) => {

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(startLogout());
  }

  return (
    <AppBar position="fixed" sx={{
      width: {
        sm: `calc(100% - ${drawerWidth}px)`,
      }, ml: { sm: `${drawerWidth}px` }
    }}
    >
      <Toolbar>
        <IconButton color="inherit" edge="start" sx={{ mr: 2, display: { sm: 'none' } }}>
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

        <IconButton onClick={onLogout} aria-label="" color="error">
          <LogoutOutlined />
        </IconButton>
      </Toolbar>
    </AppBar>

  )
}

