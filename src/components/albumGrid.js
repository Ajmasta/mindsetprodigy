import React from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import phototracks from "../pictures/photoTracks.png";

const AlbumGrid = () => {
  const tracks = [
    { id: 1, title: "Le Retour", artist: "", length: 11200 },
    { id: 2, title: "Chemin", artist: "", length: 11200 },
    { id: 3, title: "The Prodigy (skit)", artist: "", length: 11200 },
    {
      id: 4,
      title: "Hyped",
      artist: "",
      length: 11200,
    },
    { id: 5, title: "Du Sale à L’Ancienne feat Breeze", artist: "", length: 11200 },
    { id: 6, title: "Vice City", artist: "", length: 11200 },
    { id: 7, title: "Hegobreak (part 1)", artist: "", length: 11200 },
    { id: 8, title: "LxF (part 2)", artist: "", length: 11200 },
    { id: 9, title: "Je Suis Jordy (skit)", artist: "", length: 11200 },
    { id: 10, title: "Bon Bagaye feat Black Lion", artist: "" , length: 11200 },
    { id:11, title: "Envol", artist:"" , length: 11200 },
    { id: 12, title: "Souricière", artist:"" , length: 11200 },
    { id: 13, title: "Captain Ginyu's Squad", artist:"" , length: 11200 },
    { id: 14, title: "Couronne de Roi feat Big J", artist:"" , length: 11200 },

  ];

 
  return (
    <html id="albumHTML">
      <div className="albumContainer">
        {tracks.map((track) => (
          <article className="albumCard">
            <img src={phototracks} className="photoTracks" alt="albumCover" />
            <h1>{track.title}</h1> <h2> {track.artist}</h2>
            <PlayArrowIcon className="playIconTracks" />
          </article>
        ))}
      </div>
    </html>
  );
};

export default AlbumGrid;
