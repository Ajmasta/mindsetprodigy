import React from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import phototracks from "../pictures/photoTracks.png";

const AlbumGrid = () => {
  const tracks = [
    { id: 1, title: "Le Retour", artist: "Prodigy", length: 11200 },
    { id: 2, title: "Chemin", artist: "Prodigy", length: 11200 },
    { id: 3, title: "The Prodigy (skit)", artist: "Prodigy", length: 11200 },
    {
      id: 4,
      title: "Hyped",
      artist: "Prodigy",
      length: 11200,
    },
    { id: 5, title: "Du Sale a L’Ancienne", artist: "Prodigy ft. Breeze", length: 11200 },
    { id: 6, title: "Vice City", artist: "Prodigy", length: 11200 },
    { id: 7, title: "Hegobreak (part 1)", artist: "Prodigy", length: 11200 },
    { id: 8, title: "LxF (part 2)", artist: "Prodigy", length: 11200 },
    { id: 9, title: "Je Suis Jordy (skit)", artist: "Prodigy", length: 11200 },
    { id: 10, title: "Bon Bagaye", artist: "Prodigy Ft. Black Lion", length: 11200 },
    { id:11, title: "Envol", artist: "Prodigy", length: 11200 },
    { id: 12, title: "Souriciere", artist: "Prodigy", length: 11200 },
    { id: 13, title: "Captain Ginyu's Squad", artist: "Prodigy", length: 11200 },
    { id: 14, title: "Couronne de Roi", artist: "Prodigy ft. Big J", length: 11200 },

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
