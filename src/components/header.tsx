import React from "react"
import { Link } from "gatsby"
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"
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
} from "@material-ui/core"

import AccountCircle from "@material-ui/icons/AccountCircle"
import SideBar from "./sidebar"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    title: {
      color: "white",
      textDecoration: "none",
    },
  })
)

export default function MenuAppBar(): JSX.Element {
  const classes = useStyles()
  const [auth] = React.useState(false)
  const [menu, setMenuOpen] = React.useState(false)
  const anchorRef = React.useRef<HTMLButtonElement>(null)

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open)

  const handleToggle = () => {
    setMenuOpen(prevOpen => !prevOpen)
  }

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return
    }

    setMenuOpen(false)
  }

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault()
      setMenuOpen(false)
    }
  }

  React.useEffect(() => {
    if (prevOpen.current === true && menu === false) {
      anchorRef.current!.focus()
    }

    prevOpen.current = menu
  }, [menu])

  return (
    <AppBar position="static">
      <Toolbar>
        <SideBar />
        <Link to="/" className={classes.title}>
          <Typography variant="h6" noWrap>
            Behind Scene Jobs
          </Typography>
        </Link>
        <div className={classes.grow} />
        {auth && (
          <>
            <Button
              ref={anchorRef}
              aria-controls={menu ? "menu-list-grow" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            >
              <AccountCircle />
            </Button>
            <Popper
              open={menu}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom" ? "center top" : "center bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={menu}
                        id="menu-list-grow"
                        onKeyDown={handleListKeyDown}
                      >
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}
