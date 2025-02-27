import React from "react";
import { useParams } from "react-router-dom";

function SongPage() {
  const { id } = useParams();

  return (
    <div className="song-page">
      <img
        src={`http://localhost:8080/cover/${id}`}
        alt="song cover"
        className="song-cover"
      />
      <audio controls>
        <source src={`http://localhost:8080/track/${id}`} type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default SongPage;
