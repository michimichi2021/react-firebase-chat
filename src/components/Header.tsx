import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useLogout } from '../useAuth'
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Link,
} from "@mui/material"
import { firebaseApp } from "../firebase/firebaseConfig"
import AccountCircle from "@mui/icons-material/AccountCircle"



export default function Header(){
  const { logout } = useLogout()
  const [auth, setAuth] = useState(true)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  firebaseApp.fireauth.onAuthStateChanged(user => {
    if (!user) {
      navigate("/login")
    }
  })

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }


  const handleLogout = () => {
    logout()
    setOpen(true)
    setAnchorEl(null)
    setTimeout(() => {
      navigate("/login")
    }, 20)
  }

  const handleClose = () => {
    setAnchorEl(null)
    setOpen(false)
  }

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 9999,
        }}
      >
        <AppBar position="static">
        <Toolbar sx={{ justifyContent: "right" }}>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                <Link href="profile" underline="none" color="inherit">
                  プロフィール
                </Link>
                </MenuItem>
                <MenuItem onClick={handleLogout}>ログアウト</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      </Box>
    </>
  )
}

