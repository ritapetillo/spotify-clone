const Album = {
  name: "Queen 2",
  year: 1974,
  picture:
    "https://images-na.ssl-images-amazon.com/images/I/71B34LLm%2B9L._SY355_.jpg",
    assignPicture: function() {
        //get Dom element and assign
        let src = document.querySelector(".card-img-top");
        
    }

  playSong: function () {
    //change icon of song

    let icon = document.querySelector(".table th i");
    icon.style.color = "red";
    console.log(icon);

    //make white overlay

    //playsong
  },
};
