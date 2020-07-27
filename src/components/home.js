import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import AlbumSharpIcon from "@material-ui/icons/AlbumSharp";
/*import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";*/
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import AlbumCountdown from "./countdown";
import AudioPlayer from "react-h5-audio-player";
import music from "../music/Intro.mp3";
import "react-h5-audio-player/lib/styles.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { FixedSizeList } from "react-window";
import background from "../background.mp4";

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
    "Jupiter2 - 3A",
    "Vrai Rebeu de Cite-4A",
    "Almost Black - Stefan",
    "Double Burden - PH",
    "e",
  ];
  return (
    <ListItem class="tracklist-items" button style={style} key={index}>
      <ListItemText primary={`${array[index]}`} />
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
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <div className="toolBar">
          <AlbumSharpIcon
            onClick={(e) => {
              document.querySelector("#cdIcon").classList.add("clickedIcon");
              document.querySelector("#TitleName").innerHTML =
                "Intro- 3A Productions";
              document.querySelector("#TitleName").classList.add("clickedIcon");
            }}
            id="cdIcon"
            className={classes.icon}
          />
          <p id="TitleName" variant="h6" color="inherit" noWrap></p>
          <audio
            onContextMenu={(e) => e.preventDefault()}
            src={music}
            autoPlay
            id="myAudio"
          >
            <source src={music}></source>
          </audio>
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

            <div className={classes.root}>
              <FixedSizeList
                id="tracklist"
                height={200}
                width={300}
                border-radius={"10%"}
                itemSize={46}
                itemCount={20}
                style={{
                  backgroundColor: "transparent",
                  margin: "0",
                  border: "3px #121858  solid",
                  borderRadius: "8%",
                  boxShadow: " 3px 3px 5px black",
                }}
              >
                {renderRow}
              </FixedSizeList>
            </div>
          </Container>
        </div>
      </main>
      <div id="videoContainer">
        <video id="myVideo" autoPlay muted loop id="myVideo">
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
