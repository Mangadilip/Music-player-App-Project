const songs = fetch(
  "https://run.mocky.io/v3/e9ec1d4d-2870-4511-9688-75c6b3914f7a"
);

songs
  .then((response) => response.json())
  .then((data) => {
    const container = document.querySelector(".menu_songs");

    const popSongDiv = document.querySelector(".pop_song");

    const songContainer = document.createElement("div");
    songContainer.className = "song-container";

    data.forEach((song, index) => {
      // Create song item container menu_songs---------------------
      const songItem = document.createElement("div");
      songItem.className = "song-item";

      // Song number
      const songNumber = document.createElement("div");
      songNumber.className = "song-number";
      songNumber.textContent = String(index + 1).padStart(2, "0");

      // Song cover
      const songCover = document.createElement("img");
      songCover.className = "song-cover";
      songCover.src = song.image;
      songCover.alt = song.title;

      // Song details
      const songDetails = document.createElement("div");
      songDetails.className = "song-details";

      const songTitle = document.createElement("h3");
      songTitle.className = "song-title";
      songTitle.textContent = song.title || `Song Title ${index + 1}`;

      const songArtist = document.createElement("p");
      songArtist.className = "song-artist";
      songArtist.textContent = song.artist || `Artist ${index + 1}`;

      songDetails.appendChild(songTitle);
      songDetails.appendChild(songArtist);

      // Play button
      const play_Button = document.createElement("div");
      play_Button.className = "play_button";
      play_Button.onclick = () => alert(`Playing ${song.title}`);

      // Append elements to song item
      songItem.appendChild(songNumber);
      songItem.appendChild(songCover);
      songItem.appendChild(songDetails);
      songItem.appendChild(play_Button);

      // Append song item to container
      container.appendChild(songItem);

      // popural songs---------------------------------------
      const card = document.createElement("div");
      card.className = "song-card";

      const img = document.createElement("img");
      img.src = song.image;
      img.alt = song.title;
      card.appendChild(img);

      const playButton = document.createElement("div");
      playButton.className = "play-button";
      playButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z"></path>
        </svg>
      `;
      playButton.onclick = () => alert(`Playing ${song.title}`);
      card.appendChild(playButton);

      const title = document.createElement("div");
      title.className = "songs-title";
      title.textContent = song.title;
      card.appendChild(title);

      const artist = document.createElement("div");
      artist.className = "song-artists";
      artist.textContent = song.artist;
      card.appendChild(artist);

      songContainer.appendChild(card);
    });

    // Append the song container to the div with class 'pop_song'
    popSongDiv.appendChild(songContainer);
  })
  .catch((error) => console.error("Error fetching songs:", error));

// popular artists-----------------------------
const artists = fetch(
  "https://run.mocky.io/v3/631f424b-a048-402b-935e-bc1bc54c94f0"
);
artists
  .then((response) => response.json())
  .then((data) => {
    const artistsDiv = document.querySelector(".item");

    const artistContainer = document.createElement("div");
    artistContainer.className = "artist-container";

    data.forEach((artist) => {
      const frame = document.createElement("div");
      frame.className = "frame-card";

      const post = document.createElement("img");
      post.src = artist.poster;
      post.className = "artist-image";

      frame.appendChild(post);
      artistContainer.appendChild(frame);
    });
    artistsDiv.appendChild(artistContainer);
  })
  .catch((error) => console.error("error fetching data :", error));

  

