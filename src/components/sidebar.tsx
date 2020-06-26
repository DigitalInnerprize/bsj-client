import * as React from "react"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import MailIcon from "@material-ui/icons/Mail"
import MenuIcon from "@material-ui/icons/Menu"
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Theme,
} from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      width: 250,
    },
    white: {
      color: theme.palette.primary.textColor,
    },
  })
)

export default function SideBar(): JSX.Element {
  const classes = useStyles()
  const [sidebar, setToggleSidebar] = React.useState({
    left: false,
  })

  const toggleDrawer = (anchor: string, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return
    }

    setToggleSidebar({ ...sidebar, [anchor]: open })
  }

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer("left", false)}
      onKeyDown={toggleDrawer("left", false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  )

  return (
    <>
      <Drawer
        anchor={"left"}
        open={sidebar["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
      <Button onClick={toggleDrawer("left", true)}>
        <MenuIcon />
      </Button>
    </>
  )
}
