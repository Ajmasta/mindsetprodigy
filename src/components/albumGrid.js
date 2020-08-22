import React from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import image1 from "../pictures/1.jpg";
import image2 from "../pictures/2.jpg";
import image3 from "../pictures/3.jpg";
import image4 from "../pictures/4.jpg";
import image5 from "../pictures/5.jpg";
import image6 from "../pictures/6.jpg";
import image7 from "../pictures/7.jpg";
import image8 from "../pictures/8.jpg";
import image9 from "../pictures/9.jpg";
import image10 from "../pictures/10.jpg";
import image11 from "../pictures/11.jpg";
import image12 from "../pictures/12.jpg";
import image13 from "../pictures/13.jpg";
import image14 from "../pictures/14.jpg";

const AlbumGrid = () => {
  const tracks = [
    { id: image1, title: "Jamais Parti", artist: "", length: 11200 },
    { id: image2, title: "Chemin", artist: "", length: 11200 },
    { id: image3, title: "The Prodigy (skit)", artist: "", length: 11200 },
    {
      id: image4,
      title: "Hyped",
      artist: "",
      length: 11200,
    },
    { id: image5, title: "Du Sale à L’Ancienne feat Breeze", artist: "", length: 11200 },
    { id: image6, title: "Vice City", artist: "", length: 11200 },
    { id: image7, title: "Hegobreak (part 1)", artist: "", length: 11200 },
    { id: image8, title: "LxF (part 2)", artist: "", length: 11200 },
    { id: image9, title: "Je Suis Jordy (skit)", artist: "", length: 11200 },
    { id: image10, title: "Bon Bagaye feat Black Lion", artist: "" , length: 11200 },
    { id:image11, title: "Envol", artist:"" , length: 11200 },
    { id: image12, title: "Souricière", artist:"" , length: 11200 },
    { id: image13, title: "Captain Ginyu's Squad", artist:"" , length: 11200 },
    { id: image14, title: "Couronne de Roi feat Big J", artist:"" , length: 11200 },

  ];

 
  return (
    <html id="albumHTML">
      <div className="albumContainer">
        {tracks.map((track) => (
          <article className="albumCard">
            <img src={track.id} className="photoTracks" alt="track cover" />
            <h1>{track.title}</h1> <h2> {track.artist}</h2>
            <PlayArrowIcon className="playIconTracks" />
          </article>
        ))}
      </div>
    </html>
  );
};

export default AlbumGrid;
