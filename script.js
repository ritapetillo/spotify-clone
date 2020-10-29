const Album = {
  name: "",
  year: "",
  number_of_songs: "",
  picture: "",
  loadPicture: function () {
    //load Picture in Artist Page
    let img = document.querySelector(".card.h-100 img");
    img.setAttribute("src", this.picture);
  },
  loadName: function () {
    let name_element = document.querySelector(".card.h-100 h5");
    name_element.textContent = this.name;
  },
  songList: [{ code: "", title: "", duration: "" }],
  loadSongs: function () {
    let song_list = document.querySelectorAll(".song-list tr");
    for (let i = 0; i < song_list.length; i++) {
      song_list[
        i
      ].firstElementChild.nextElementSibling.textContent = this.songList[
        i
      ].title;
      song_list[i].lastElementChild.textContent = this.songList[i].duration;
    }
    console.log(song_list[0].firstElementChild.nextElementSibling.textContent);
    console.log(song_list[0].lastElementChild.textContent);
  },

  playSong: function () {
    //for testing only TODO make
    let index = 0;
    console.log(this.songList[index].code);
  },
};

window.onload = function () {
  //let currentAlbum = new Album(code);
  let current_album = Discography.albums[0];
  let Album_instance = Object.create(Album);
  Album_instance.name = current_album.name;
  Album_instance.year = current_album.year;
  Album_instance.picture = current_album.picture;
  Album_instance.songList = current_album.songs;
  console.log(Album_instance.songList);
  Album_instance.loadPicture();
  Album_instance.loadSongs();
  Album_instance.playSong();
  Album_instance.loadName();

  let icons = document.querySelectorAll(".table th i");
  for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener("click", function () {
      icons[i].classList.add("selected");
    });
  }
};
