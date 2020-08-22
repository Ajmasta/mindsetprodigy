import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
/*import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";*/
import CssBaseline from "@material-ui/core/CssBaseline";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import AlbumCountdown from "./countdown";

import music from "../music/Intro.mp3";
import "react-h5-audio-player/lib/styles.css";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { FixedSizeList } from "react-window";
import background from "../background.mp4";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { IconButton } from "@material-ui/core";
import PauseIcon from "@material-ui/icons/Pause";
import AlbumGrid from "./albumGrid";
import ListIcon from "@material-ui/icons/List";
import AlbumIcon from "@material-ui/icons/Album";
import ButtonGroup from "@material-ui/core/ButtonGroup";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
function renderRow({ index, style }) {
  const array = [
    "Le Retour",
    "Chemin",
    "The Prodigy (skit)",
    "Hyped",
    "Du Sale à L’Ancienne (feat Breeze)",
    "Vice City",
    "Hegobreak (part 1)",
    "LxF (part 2)",
    "Je Suis Jordy (skit)",
    "Bon Bagaye (feat Black Lion)",
    "Envol",
    "Souricière",
    "Captain Ginyu's Squad",
    "Couronne de Roi (feat Jello)"
  ];
  return (
    <ListItem class="tracklist-items" button style={style} key={index}>
      <ListItemText class="tracklistText" primary={`${array[index]}`} />{" "}
      <PlayArrowIcon id="playArrowTracklist" />
    </ListItem>
  );
}
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: "transparent",
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: "transparent",
    padding: theme.spacing(6),
  },
  root: {
    width: "100%",
    margin: "auto",
    maxWidth: 300,
    backgroundColor: "transparent",
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const [playing, setPlaying] = useState(true);
  const [viewSelected, setViewSelected] = useState("album");
  const classes = useStyles();
  let audioFile = "";
  if (document.querySelector("#myAudio")){
    audioFile = document.querySelector("#myAudio");
    
  }
  if (!audioFile.paused && !playing) setPlaying(true)
  
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <div className="toolBar">
          <audio
            onContextMenu={(e) => e.preventDefault()}
            src={music}
            id="myAudio"
            autoPlay="true"
          >
            <source src={music}></source>
          </audio>
          {playing ? (<>
            <IconButton
              size="small"
              type="Pause"
              onClick={() => {
                document.querySelector("#myAudio").pause();
                setPlaying(false);
              }}
            >
              <PauseIcon className={classes.icon} size="small" id="pauseIcon" />{" "}
            </IconButton>
           <p id="TitleName" variant="h6" color="inherit" noWrap> Intro- 3A Productions </p> </>) : (
            <IconButton
              type="Play"
              size="small"
              onClick={() => {
                document.querySelector("#myAudio").play();
                document
                    .querySelector("#cdIcon")
                    .classList.add("clickedIcon");
                 
              

                  setPlaying(true);
              }}
            >
              {" "}
              <PlayArrowIcon
                size="small"
            
                id="cdIcon"
                className={classes.icon}
              />{" "}
            </IconButton>
          )}

         
        </div>
      </AppBar>
      <main>
        <AlbumCountdown />
        {/* Hero unit */}
        <div>
          <Container maxWidth="sm">
            <h1
              className="titleSection"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              <span>
                <p id="title"> Mindset of a Prodigy </p>
                <p id="subtitle">Vol. 2</p>
              </span>
            </h1>

            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            ></Typography>
            <ButtonGroup>
              <IconButton
                className={
                  viewSelected === "album"
                    ? "selectedIcon trackIconList"
                    : "trackIconList"
                }
                onClick={() => setViewSelected("album")}
              >
                <AlbumIcon />{" "}
              </IconButton>
              <IconButton
                className={
                  viewSelected === "list"
                    ? "selectedIcon trackIconList"
                    : "trackIconList"
                }
                onClick={() => setViewSelected("list")}
              >
                <ListIcon />{" "}
              </IconButton>
            </ButtonGroup>

            {viewSelected === "album" ? (
              <AlbumGrid />
            ) : (
              <div>
                <FixedSizeList
                  id="tracklist"
                  height={200}
                  width={400}
                  
                  border-radius={"10%"}
                  itemSize={46}
                  itemCount={14}
                  style={{
                    backgroundColor: "transparent",
                    marginLeft: "auto",
                    marginRight:"auto",
                    marginBottom: "135px",
                    marginTop: "35px",
                    border: "3px #121858  solid",
                    borderRadius: "2%",
                    boxShadow: " 3px 3px 5px black",
                  }}
                >
                  {renderRow}
                </FixedSizeList>
              </div>
            )}
          </Container>
        </div>
      </main>
      <div id="videoContainer">
        <video
          id="myVideo"
          autoPlay="true"
          poster="../pictures/poster.jpg"
          muted="true"
          playsInline="true"
          loop
          id="myVideo"
        >
          <source src={background} type="video/mp4"></source>
        </video>
      </div>
    </React.Fragment>
  );
}

{
  /*<div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Get Notified
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit /}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer /}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
            {/* End footer /} </React.Fragment>     </React.Fragment>*/
}
