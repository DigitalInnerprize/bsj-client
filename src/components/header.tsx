import React from 'react'
import { Link, navigate } from 'gatsby'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Button,
  MenuItem,
  MenuList,
  Popper,
  Paper,
  ClickAwayListener,
  Grow,
  Typography,
} from '@material-ui/core'

import AccountCircle from '@material-ui/icons/AccountCircle'
import SideBar from './sidebar'
import { useAuth } from '../state'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      color: 'white',
      textDecoration: 'none',
    },
    titleFont: {
      fontSize: '1.4rem',
    },
    navFont: {
      fontSize: '0.98rem',
    },
  }),
)

const authLinks = [
  { path: '/login', text: 'Login' },
  { path: '/register', text: 'Register' },
]

const middleLinks = [
  { path: '/post-a-job', text: 'Post A Job' },
  { path: '/jobs', text: 'View Jobs' },
]

export default function MenuAppBar(): JSX.Element {
  const { isAuthenticated, logout } = useAuth()
  const classes = useStyles()
  const [menu, setMenuOpen] = React.useState(false)
  const anchorRef = React.useRef<HTMLButtonElement>(null)

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open)

  React.useEffect(() => {
    if (prevOpen.current === true && menu === false) {
      anchorRef.current!.focus()
    }

    prevOpen.current = menu
  }, [menu])

  const handleToggle = () => {
    setMenuOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return
    }
    logout()
    setMenuOpen(false)
    navigate('/')
  }

  const handleListKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Tab') {
      event.preventDefault()
      setMenuOpen(false)
    }
  }

  const renderNavLinks = (navLinks: Record<string, any>[]) =>
    navLinks.map((nav) => (
      <Link key={nav.path} to={nav.path} className={classes.menuButton}>
        <Typography variant="h6" noWrap className={classes.navFont}>
          {nav.text}
        </Typography>
      </Link>
    ))

  const renderUserMenu = (
    <>
      <Button
        ref={anchorRef}
        aria-controls={menu ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <AccountCircle />
      </Button>
      <Popper open={menu} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={menu} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )

  return (
    <AppBar position="static">
      <Toolbar>
        {isAuthenticated && <SideBar />}
        <Link to="/" className={classes.menuButton}>
          <Typography variant="h1" noWrap className={classes.titleFont}>
            Behind Scene Jobs
          </Typography>
        </Link>
        <div className={classes.grow} />
        {!isAuthenticated && renderNavLinks(middleLinks)}
        <div className={classes.grow} />
        {isAuthenticated ? renderUserMenu : renderNavLinks(authLinks)}
      </Toolbar>
    </AppBar>
  )
}
