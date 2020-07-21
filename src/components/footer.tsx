import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    textAlign: 'center',
    backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
  columnContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  columns: {
    width: '20%',
  },
  links: {
    display: 'flex',
    flexDirection: 'column'
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
}))

function Copyright() {
  const { link } = useStyles()
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <a className={link} href="https://digitalinnerprize.tech/">
        Digital InnerPrize l.l.c
      </a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default function StickyFooter(): JSX.Element {
  const classes = useStyles()

  return (
    <>
      <CssBaseline />
      <footer className={classes.footer}>
        <div className={classes.columnContainer}>
          <div className={classes.columns}>
            <h3>Resources</h3>
            <div className={classes.links}>
              <a className={classes.link} href="#">FAQs</a>
              <a className={classes.link} href="#">Blog</a>
            </div>
          </div>
          <div className={classes.columns}>
            <h3>Connect</h3>
            <div className={classes.links}>
              <a className={classes.link} href="#">Instagram</a>
              <a className={classes.link} href="#">Email</a>
            </div>
          </div>
          <div className={classes.columns}>
            <h3>Misc</h3>
            <div className={classes.links}>
              <a className={classes.link} href="#">Terms & Conditions</a>
              <a className={classes.link} href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </footer>
    </>
  )
}
