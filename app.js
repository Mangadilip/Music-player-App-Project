let songsData = [];

const songs = fetch(
  "https://run.mocky.io/v3/d431f46c-1e90-4bef-a2ce-63d5f39ced3e"
);

songs
  .then((response) => response.json())
  .then((data) => {
    const container = document.querySelector(".menu_songs");

    const popSongDiv = document.querySelector(".pop_song");

    const songContainer = document.createElement("div");
    songContainer.className = "song-container";

    songsData = data;

    data.forEach((song, index) => {
      // Create song item container menu_songs side playlist---------------------

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
      play_Button.id = index + 1;
      play_Button.classList.add("bi-vinyl");

      play_Button.addEventListener("click", (e) => {
        index = e.currentTarget.id;
        // console.log(index)
        music.src = `assets/audio/${index}.mp3`;
        play_bar.src = `assets/img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");
        wave.classList.add("active1");

        let songData = songsData.find(
          (song) => String(song.id) === String(index)
        );

        if (songData) {
          document.getElementById("title").childNodes[0].textContent =
            songData.title;
        }
        if (songData) {
          document.getElementById("subtitle").textContent = songData.artist;
        }
      });

      // play_Button.onclick = () => alert(`Playing ${song.title}`);

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
      playButton.id = index + 1;

      playButton.addEventListener("click", (e) => {
        index = e.currentTarget.id;
        console.log(index);
        music.src = `assets/audio/${index}.mp3`;
        play_bar.src = `assets/img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");
        wave.classList.add("active1");

        let songData = songsData.find(
          (song) => String(song.id) === String(index)
        );

        if (songData) {
          document.getElementById("title").childNodes[0].textContent =
            songData.title;
        }
        if (songData) {
          document.getElementById("subtitle").textContent = songData.artist;
        }
      });
      // playButton.onclick = () => alert(`Playing ${song.title}`);
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

// popular artists---------------------------------------------
const artists = fetch("https://run.mocky.io/v3/37c4f9ce-7db2-4f0e-baba-cf74c9794f08")
artists
.then((response) => response.json())
.then((data) => {
  const artistsDiv = document.querySelector(".item");

  if (!artistsDiv) {
    console.error("Container with class 'item' not found!");
    return;
  }

  const artistContainer = document.createElement("div");
  artistContainer.className = "artist-container";

  const fragment = document.createDocumentFragment(); 

  data.forEach((artist) => {
    const frame = document.createElement("div");
    frame.className = "frame-card";

    let content;

    if (artist.id === 1) {
      // If artist ID is 1, wrap the image in a clickable <a> tag
      const link = document.createElement("a");
      link.href = `artist2.html?id=${artist.id}`;

      const post = document.createElement("img");
      post.src = artist.poster;
      post.className = "artist-image";
      post.alt = `${artist.name} Poster`;

      link.appendChild(post);
      content = link;
    } else {
      // For other artists, display only the image (non-clickable)
      const post = document.createElement("img");
      post.src = artist.poster;
      post.className = "artist-image";
      post.alt = `${artist.name} Poster`;

      content = post;
    }

    frame.appendChild(content);
    fragment.appendChild(frame);
  });

  artistContainer.appendChild(fragment);
  artistsDiv.appendChild(artistContainer);
})
.catch((error) => console.error("Error fetching data:", error));



// scroll icons of popular songs-------------------------------
let pop_song_left = document.getElementById("pop_song_left");
let pop_song_right = document.getElementById("pop_song_right");
let pop_songs = document.getElementById("pop_songs");

pop_song_right.addEventListener("click", () => {
  pop_songs.scrollLeft += 330;
});

pop_song_left.addEventListener("click", () => {
  pop_songs.scrollLeft -= 330;
});

// scroll icons of popular artists------------------------
let pop_art_left = document.getElementById("pop_art_left");
let pop_art_right = document.getElementById("pop_art_right");
let items = document.getElementById("items");

pop_art_right.addEventListener("click", () => {
  items.scrollLeft += 200;
});

pop_art_left.addEventListener("click", () => {
  items.scrollLeft -= 200;
});

// palybar down--------------------------------------

const music = new Audio("assets/audio/20.mp3");
// music.play();

let play_bar = document.getElementById("play_bar");

let masterPlay = document.getElementById("master_play");
let wave = document.getElementById("wave");

masterPlay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    wave.classList.add("active1");
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
  } else {
    music.pause();
    wave.classList.remove("active1");
    masterPlay.classList.add("bi-play-fill");
    masterPlay.classList.remove("bi-pause-fill");
  }
});

let song_counter_start = document.getElementById("song_counter_start");
let song_counter_end = document.getElementById("song_counter_end");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];

music.addEventListener("timeupdate", () => {
  let music_current_time = music.currentTime;
  let music_end = music.duration;

  let min1 = Math.floor(music_end / 60);
  let sec1 = Math.floor(music_end % 60);

  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }
  song_counter_end.innerHTML = `${min1}:${sec1}`;

  let min2 = Math.floor(music_current_time / 60);
  let sec2 = Math.floor(music_current_time % 60);
  if (sec2 < 10) {
    sec2 = `0${sec2}`;
  }

  song_counter_start.innerHTML = `${min2}:${sec2}`;

  let progressBar = parseInt((music_current_time / music_end) * 100);
  seek.value = progressBar;
  // console.log(seek.value);
  let seekbar = seek.value;
  bar2.style.width = `${seekbar}%`;
  dot.style.left = `${seekbar}%`;
});

seek.addEventListener("change", () => {
  music.currentTime = (seek.value * music.duration) / 100;
});

let vol_icon = document.getElementById("vol_icon");
let vol =document.getElementById("vol_seek");
let vol_bar = document.getElementsByClassName("vol_bar")[0];
let vol_dot = document.getElementById("vol_dot");


vol.addEventListener("change",()=>{
  if (vol.value == 0){
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.add("bi-volume-mute-fill")

    
  }
  if(vol.value > 0){
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.add("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-mute-fill")
  }
  if(vol.value > 50){
    vol_icon.classList.add("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-mute-fill")
  }
  let vol_a = vol.value; 
vol_bar.style.width = `${vol_a}%`; 
vol_dot.style.left = `${vol_a}%`; 
music.volume = vol_a / 100;
})





let back = document.getElementById("back");
let next = document.getElementById("next");
let index = 1; 

back.addEventListener("click", () => {
  if (index > 1) {
    index -= 1;
    changeSong(index);
  }
});

next.addEventListener("click", () => {
  if (index < songsData.length) { 
    index += 1;
    changeSong(index);
  }
});

function changeSong(index) {
  music.src = `assets/audio/${index}.mp3`;
  play_bar.src = `assets/img/${index}.jpg`;
  music.play();

  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");
  wave.classList.add("active1");

  let songData = songsData.find((song) => String(song.id) === String(index));

  if (songData) {
    document.getElementById("title").textContent = songData.title;
    document.getElementById("subtitle").textContent = songData.artist;
  }

  makeAllBackground();
  let items = document.getElementsByClassName("item");
  if (items[index - 1]) {
    items[index - 1].style.background = "rgb(105, 105, 105, .1)";
  }

  makeAllplays();
  
  // Highlight the currently playing song
  let currentItem = document.querySelector(`.item[data-id="${index}"]`);
  if (currentItem) {
    let playButton = currentItem.querySelector(".bi-play-circle-fill");
    if (playButton) {
      playButton.classList.remove("bi-play-circle-fill");
      playButton.classList.add("bi-pause-circle-fill");
    }
  }

  wave.classList.add("active1");
}




let downloadMusic = document.getElementById("download_music");

downloadMusic.addEventListener("click", (event) => {
  event.preventDefault(); 

  if (!music.src) {
    alert("No song is currently playing!");
    return;
  }

  let currentSongIndex = music.src.split("/").pop().replace(".mp3", "");

  
  let songData = songsData.find(song => String(song.id) === currentSongIndex);

  if (!songData) {
    alert("Song data not found!");
    return;
  }

  let a = document.createElement("a");
  a.href = music.src;
  a.download = `${songData.title.replace(/[^a-zA-Z0-9]/g, "_")}.mp3`; // Sanitize filename
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});


let shuffle = document.getElementsByClassName("shuffle")[0];
let currentMode = "next"; 

shuffle.addEventListener("click", () => {
  if (currentMode === "next") {
    currentMode = "repeat";
    shuffle.classList.add("bi-arrow-repeat");
    shuffle.classList.remove("bi-music-note-beamed");
    shuffle.classList.remove("bi-shuffle");
    shuffle.innerHTML = "repeat";
  } else if (currentMode === "repeat") {
    currentMode = "random";
    shuffle.classList.remove("bi-arrow-repeat");
    shuffle.classList.remove("bi-music-note-beamed");
    shuffle.classList.add("bi-shuffle");
    shuffle.innerHTML = "random";
  } else {
    currentMode = "next";
    shuffle.classList.remove("bi-arrow-repeat");
    shuffle.classList.add("bi-music-note-beamed");
    shuffle.classList.remove("bi-shuffle");
    shuffle.innerHTML = "next";
  }
});

// repeat random next-------------------
music.addEventListener("ended", () => {
  if (currentMode === "repeat") {
    // Repeat the same song
    music.currentTime = 0;
    music.play();
  } else if (currentMode === "random") {
    // Play a random song
    let randomIndex = Math.floor(Math.random() * songsData.length) + 1;
    index = randomIndex;
    changeSong(index);
  } else {
    // Play next song in order
    if (index < songsData.length) {
      index += 1;
    } else {
      index = 1;
    }
    changeSong(index);
  }
});




// search

let searchInput = document.querySelector(".search input");
let searchHistory = document.querySelector(".search_history");

// Function to update search results
searchInput.addEventListener("input", () => {
  let query = searchInput.value.toLowerCase();
  searchHistory.innerHTML = ""; // Clear previous results

  if (query.length === 0) {
    searchHistory.style.display = "none"; // Hide when input is empty
    return;
  }

  let filteredSongs = songsData.filter(song => 
    song.title.toLowerCase().includes(query) || song.artist.toLowerCase().includes(query)
  );

  if (filteredSongs.length === 0) {
    searchHistory.innerHTML = "<p>No results found</p>";
    searchHistory.style.display = "block";
    return;
  }

  filteredSongs.forEach(song => {
    let songCard = document.createElement("div");
    songCard.className = "card";
    songCard.innerHTML = `
      <img src="${song.image}" alt="${song.title}">
      <div class="content1">
        ${song.title}
        <div class="subtitle">${song.artist}</div>
      </div>
    `;

    // Play song when clicked
    songCard.addEventListener("click", () => {
      let index = song.id;
      changeSong(index);
      searchHistory.style.display = "none"; // Hide search history after selection
      searchInput.value = ""; // Clear search input
    });

    searchHistory.appendChild(songCard);
  });

  searchHistory.style.display = "block"; 
});

// Hide search results when clicking outside
document.addEventListener("click", (e) => {
  if (!searchInput.contains(e.target) && !searchHistory.contains(e.target)) {
    searchHistory.style.display = "none";
  }
});




document.addEventListener("DOMContentLoaded", function () {
  let userInfo = document.getElementById("userInfo");
  let userDropdown = document.getElementById("userDropdown");

  userInfo.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevents event bubbling
    userDropdown.classList.toggle("show_user_dropdown");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function (event) {
    if (!userInfo.contains(event.target)) {
      userDropdown.classList.remove("show_user_dropdown");
    }
  });
});






