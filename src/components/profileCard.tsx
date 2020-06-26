import React, { createContext } from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import GridListTileBar from "@material-ui/core/GridListTileBar"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import ButtonBase from "@material-ui/core/ButtonBase"

import Button from "@material-ui/core/Button"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      minHeight: 250,
    },
    image: {
      width: 64,
      height: 64,
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
    },
    gridList: {
      flexWrap: "nowrap",
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: "translateZ(0)",
    },
    title: {
      color: theme.palette.primary.light,
      textAlign: "center",
    },
    titleBar: {
      background:
        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
    },
    profileButton: {
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  })
)

export default function ProfileCard(): JSX.Element {
  const classes = useStyles()

  const profile = {
    name: "Harry P.",
    location: "Atlanta, Georgia",
    profileImage: "https://source.unsplash.com/user/erondu/1600x900",
    projects: [
      {
        title: "Sample One",
        description: "Working backstage",
        coverImage: "https://source.unsplash.com/user/jeancarloemer/1600x900",
      },
      {
        title: "Sample Two",
        description: "Working front-stage",
        coverImage: "https://source.unsplash.com/user/jamdraper/1600x900",
      },
      {
        title: "Sample Three",
        description: "Chilling in ATL",
        coverImage: "https://source.unsplash.com/user/anniespratt/1600x900",
      },
      {
        title: "Sample Four",
        description: "Chilling in ATL",
        coverImage: "https://source.unsplash.com/user/naked_streets/1600x900",
      },
      {
        title: "Sample Five",
        description: "Chilling in ATL",
        coverImage: "https://source.unsplash.com/user/scottsweb/1600x900",
      },
    ],
    links: [],
  }

  return (
    <Paper elevation={1} className={classes.paper}>
      <GridList
        className={classes.gridList}
        cols={5}
        cellHeight={240}
        spacing={8}
      >
        <GridListTile>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src={profile.profileImage}
              />
            </ButtonBase>

            <Grid item xs={3} sm container>
              <Grid item xs container direction="column" spacing={1}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    {profile.name}
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    {profile.location}
                  </Typography>
                  <Button
                    color="primary"
                    variant="outlined"
                    size="small"
                    className={classes.profileButton}
                  >
                    View
                  </Button>
                  <Button color="secondary" variant="outlined" size="small">
                    Book
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </GridListTile>

        {profile.projects.map((project, index) => {
          return (
            <GridListTile key={project.coverImage}>
              <img src={project.coverImage} alt={project.title} />

              <GridListTileBar
                title={project.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                // actionIcon={
                //   <IconButton aria-label={`star ${project.title}`}>
                //     <StarBorderIcon className={classes.title} />
                //   </IconButton>
                // }
              />
            </GridListTile>
          )
        })}
      </GridList>
    </Paper>
  )
}
