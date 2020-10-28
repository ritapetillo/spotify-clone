

// VARIABLES
const playListInput = document.getElementById('playlistName');
const createPlaylistBtn = document.getElementById('createPlaylistBtn')
const playlistContainer = document.querySelector('.sideNav__playlist')
let playLists = ['My Playlist']
const playListTitle = document.querySelector('.playlistTitle')
const usernameTyped = document.getElementById('username');
const passwordTyped = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');
const usernameSpan = document.getElementById('usernameSpan')
let currentUser = ""
let imgAvatar = document.getElementById('img-avatar')



const users = [{
    username: "Rita",
    password: "rita1234",
    avatar:"https://img2.pngio.com/avatar-female-person-user-woman-young-icon-avatar-person-png-512_512.png"
},
    {
        username: "Nello",
        password: "nello1234",
        avatar:"https://st2.depositphotos.com/1007566/12304/v/950/depositphotos_123041468-stock-illustration-avatar-man-cartoon.jpg"
    },
    {
        username: "Federico",
        password: "fede1234",
                avatar:"https://st2.depositphotos.com/1007566/12304/v/950/depositphotos_123041468-stock-illustration-avatar-man-cartoon.jpg"

}]




// FUNCTIONS


const createPlaylist = () => {
    const newPlaylist = playListInput.value
    playLists.push(newPlaylist)
    console.log(playLists)
    playListInput.value = ""
   clearPlaylist()
    renderPlaylist()
}
const renderPlaylist = () => {
    playLists.forEach((playlist, i) => {
    let a = document.createElement('a');
    a.href = `playlist.html?${playlist}`
    a.innerHTML = `<span class="sideNav__nav-play-thumb text-white"><i class="fas fa-music"></i></span><span> ${playlist}</span>`
    playlistContainer.appendChild(a)
    })
   
}

const clearPlaylist = () => {
    while (!playlistContainer.lastElementChild.classList.value.includes('sideNav__nav-addPlay')) {
        playlistContainer.removeChild(playlistContainer.lastChild)
    }
  
}

const login = () => {
    //getting user and pass typed 
    let userTped = usernameTyped.value
    let password = passwordTyped.value
//retrive the user
    let user = validateUsername(userTped);
    //validate password
    let passMatch = user?.password === password
    let userFound = user !== undefined ? true : false
//if the user exist and the password match
    if (userFound && passMatch) {
        //save the user in the local storage and go to index
        localStorage.setItem('currentUser', JSON.stringify(user))
        window.location.href = "index.html";
    } else {
        //else activate warning text
        let loginWarn = document.querySelector('.login-warning')
        loginWarn.classList.remove('d-none')
    }

       
}

const renderUsername = (username) => {
    usernameSpan.innerHTML = username.username
    imgAvatar.src = username.avatar
}

const validateUsername = (username) => {
    return users.find(user => user.username === username);
}

// ON WINDOW LOAD

window.onload = function () {
    
    loginBtn?.addEventListener('click', login)
    createPlaylistBtn?.addEventListener('click', createPlaylist)
    // const currentUser = localStorage.getItem('currentUser')
    console.log(localStorage)

    currentUser = JSON.parse(localStorage.getItem('currentUser'))
    console.log(currentUser)
    if (currentUser) {
        renderUsername(currentUser)
       
   }
    
    

    //I'm looking for the playlist name so that I can display it in the playlist page.
    if (location.search.substring(1)) {
        let queryString = location.search.substring(1);
        let playListSelected = queryString.split("|")[0]
        console.log(playListSelected)
        //when the window load, I render the title of the playlist
        playListTitle.innerHTML = playListSelected
        playLists.push(playListSelected)
        
    }
        clearPlaylist()
        renderPlaylist()


}