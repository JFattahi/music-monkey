import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function HomePage() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/")
      .then((response) => {
        setSongs(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching songs", error);
        setError("Failed to load songs. Please try again.");
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading && <p>Loading songs...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && songs.length > 0 ? (
        <div className="song-list">
          {songs.map((song) => (
            <div key={song.id} className="song-card">
              <Link to={`/tracks/${song.id}`}>
                <img
                  src={`http://localhost:8080/cover/${song.id}`}
                  alt={song.title}
                  className="song-cover"
                />
              </Link>
              <h2>{song.title}</h2>
              <p>{song.artist}</p>
            </div>
          ))}
        </div>
      ) : (
        !loading && !error && <p>No songs available.</p>
      )}
    </div>
  );
}

export default HomePage;
