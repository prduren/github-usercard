// fetch("https://api.github.com/users/prduren")

// import axios from './node_modules/axios/dist/axios.min.js';
// const axios = require('axios').default;

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/



/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const friendsArray = [
  'tarannasorus',
  'cameron-kirby',
  'wesbos',
  'stolinski',
  'glweems',
];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function createCard(obj) {
  // declare variables
  const wrapper = document.createElement('div');
  const image = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('p');
  const username = document.createElement('h3');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const address = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  // add atrributes
  wrapper.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');

  //structure
  wrapper.appendChild(image);
  wrapper.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  profile.appendChild(address);

  //add content
  image.src = obj.avatar_url; 
  name.innerHTML = obj.name; 
  username.innerHTML = obj.login; 
  location.innerHTML = obj.location; 
  address.innerHTML = obj.html_url; 
  address.src = obj.html_url;
  followers.innerHTML = obj.followers; // still need to add string
  following.innerHTML = obj.following; // still need to add string
  bio.innerHTML = obj.bio; 

  return wrapper;
}

function createUserCard(username) {
  axios.get(`https://api.github.com/users/${username}`)
  .then(function(response) {
    console.log(response);
    document.querySelector('.cards').appendChild(createCard(response.data));
  })
    .catch(function(error){
      console.log(error);
    }
  );  
}

createUserCard('prduren');
friendsArray.forEach(item => {
  createUserCard(item);
})

contributionsCalendar = document.createElement('div');
contributionsCalendar.classList.add('calendar');
document.querySelector('.cards').appendChild(contributionsCalendar);
new GitHubCalendar('.calendar', 'glweems');

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
