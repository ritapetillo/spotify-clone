/* const Album = {
  name: "Queen 2",
  year: 1974,
  picture:
    "https://images-na.ssl-images-amazon.com/images/I/71B34LLm%2B9L._SY355_.jpg",

  loadPicture: function () {
    //load Picture in Artist Page
    let img = document.querySelector(".card.h-100 img");
    img.setAttribute("src", this.picture);
  },

  playSong: function () {
    //TODO playsong
  },

 
}; */

const Album = {
  name: "",
  year: "",
  picture: "",
  loadPicture: function () {
    //load Picture in Artist Page
    let img = document.querySelector(".card.h-100 img");
    img.setAttribute("src", this.picture);
  },
  playSong: function () {
    //TODO playsong
  },
  songList: [],
};

window.onload = function () {
  //Album.loadPicture(); //TODO make it into a constructor later

  //let currentAlbum = new Album(code);
  let current_album = Discography.albums[1];
  let Album_instance = Object.create(Album);

  Album_instance.name = current_album.name;
  Album_instance.year = current_album.year;
  Album_instance.picture = current_album.picture;
  Album_instance.songList = current_album.songs;

  Album_instance.loadPicture();

  let icons = document.querySelectorAll(".table th i");
  for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener("click", function () {
      icons[i].classList.add("selected");
    });
  }
};
