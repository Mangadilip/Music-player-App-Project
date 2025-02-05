let songs = fetch("https://run.mocky.io/v3/fd6f98c5-84c4-4b50-b548-892f1693e833");

songs.then((response) => response.json()).then((data) => {
  const container = document.querySelector(".menu_songs");

  // Array of local image paths
  const images = [
    "./assets/img/1.jpg",
    "./assets/img/2.jpg",
    "./assets/img/3.jpg",
    "./assets/img/4.jpg",
    "./assets/img/4.jpg",
    "./assets/img/5.jpg",
    "./assets/img/6.jpg",
    "./assets/img/7.jpg",
    "./assets/img/8.jpg",
    "./assets/img/9.jpg",
    "./assets/img/10.jpg",
    "./assets/img/11.jpg",
    "./assets/img/12.jpg",
    "./assets/img/13.jpg",
    "./assets/img/14.jpg",
    "./assets/img/15.jpg",
    "./assets/img/16.jpg",
    "./assets/img/17.jpg",
    "./assets/img/18.jpg",
    "./assets/img/19.jpg",
    "./assets/img/20.jpg",
   
  ];

  data.forEach((song, index) => {
    // Create song item container
    const songItem = document.createElement("div");
    songItem.className = "song-item";

    // Song number
    const songNumber = document.createElement("div");
    songNumber.className = "song-number";
    songNumber.textContent = String(index + 1).padStart(2, "0");

    // Song cover
    const songCover = document.createElement("img");
    songCover.className = "song-cover";
    // Use the image from the local folder, wrapping around with modulus if there are more songs than images
    songCover.src = images[index % images.length];

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
    const playButton = document.createElement("div");
    playButton.className = "play-button";

    // Append elements to song item
    songItem.appendChild(songNumber);
    songItem.appendChild(songCover);
    songItem.appendChild(songDetails);
    songItem.appendChild(playButton);

    // Append song item to container
    container.appendChild(songItem);
  });
});
