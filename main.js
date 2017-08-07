// created a place for the bio to go
let story = document.querySelector('#story');
let paragraph = document.createElement('p');
story.appendChild(paragraph);

// created a place for page header to go, tagged to the title id
let wrapper = document.querySelector('#title');
let title = document.createElement('h1');
wrapper.appendChild(title);

// created a place for the picture to go, tagged to pictures id
let pictureBox = document.querySelector('#picture');
let image = document.createElement('img');
pictureBox.appendChild(image);

// created a place for the basic info to go to go, all are tagged to basics id
let basics = document.querySelector('#basics');
let name = document.createElement('li');
let github = document.createElement('li');
let email = document.createElement('li');
let company = document.createElement('li');
let website = document.createElement('li');
basics.appendChild(name);
basics.appendChild(github);
basics.appendChild(email);
basics.appendChild(company);
basics.appendChild(website);

// called the github API for my git hub and plant ^ elements with proper API info
function baileyBio() {
  let userInfo = JSON.parse(this.responseText);
  paragraph.innerHTML= `${userInfo.bio}`;
  title.innerHTML = `${userInfo.name}`;
  name.innerHTML = `Name: ${userInfo.name}`;
  github.innerHTML = `GitHub URL:${userInfo.html_url}`;
  email.innerHTML = `Email: ${userInfo.email}`;
  company.innerHTML = `Company: ${userInfo.company}`;
  website.innerHTML = `Website: ${userInfo.blog}`;
  image.setAttribute('src',`${userInfo.avatar_url}`);

}
let req = new XMLHttpRequest();
req.addEventListener("load", baileyBio);
req.open("GET", "https://api.github.com/users/bbryant7");
req.send();
