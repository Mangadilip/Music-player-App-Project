let songsData = [];

const songs = fetch(
  "https://run.mocky.io/v3/cf8aac18-4b9c-46cb-b46d-250c725df123"
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

back.addEventListener("click",()=>{
  // index -=1;
  music.src = `assets/audio/${index}.mp3`;
        play_bar.src = `assets/img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");
        wave.classList.add("active1");

        let songData = songsData.find((song) => String(song.id) === String(index)
        );

        if (songData) {
          document.getElementById("title").childNodes[0].textContent =
            songData.title;
        }
        if (songData) {
          document.getElementById("subtitle").textContent = songData.artist;
        }
        makeAllBackground();
        Array.from(document.getElementsByClassName("item"))[index -1].style.background="rgb(105, 105, 105, .1)";
        makeAllplays();
        e.traget.classList.remove("bi-play-circle-fill");
        e.traget.classList.add("bi-pause-circle-fill");
        wave.classList.add('active1');

})
