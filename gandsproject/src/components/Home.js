import React, { useState, useEffect } from "react";
import Search from "./Search";
import GenreList from "./GenreList";
import ArtistList from "./ArtistList";

const CLIENT_ID = "db0d326ad85a4673bd89dbcf4ad89aea";
const CLIENT_SECRET = "6da95e062e7c4298bb9b08f843597fea";

function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [genres, setGenres] = useState([]);
  const [results, setResults] = useState([])

  useEffect(() => {
    var authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET,
    };
    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((res) => res.json())
      .then((data) => {
        setAccessToken(data.access_token);
        getGenres(data);
      });
  }, []);

  // Get Genres
  function getGenres() {
    fetch("https://api.spotify.com/v1/browse/categories?locale=sv_US", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    })
      .then((res) => res.json())
      .then((data) => setGenres(data.categories.items));
  }

  // Search for artists and/or tracks - async function due to multiple fetches within function
  async function searchArtists(e) {
    setSearchInput(e.target.value);
    const artistSearch = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };
    const track_artist_id = await fetch("https://api.spotify.com/v1/search?q=" + searchInput + "&type=track%2Cartist&market=US", artistSearch)
      .then((res) => res.json())
      .then((data) => {
        setResults(data.artists.items)
        // setResults(data.tracks.items)
      });
      console.log(results)
  }

  const displayResults = results.filter(result => {
    return result.name.toLowerCase().includes(searchInput.toLowerCase())
  })

  return (
    <div>
      <h1>Home</h1>
      {/* <GenreList genres={genres} /> */}
      <ArtistList results={displayResults}/>
      <Search search={searchInput} setSearch={searchArtists} />
    </div>
  );
}

export default Home;
