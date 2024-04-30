function createCard(title, description) {
  const cardContainer = document.querySelector(".main-container-card");

  //create the required elements
  const card = document.createElement("div");
  const logos = document.createElement("div");
  const heading = document.createElement("h4");
  const content = document.createElement("p");
  const icon1 = document.createElement("span");
  const icon2 = document.createElement("span");
  const icon3 = document.createElement("span");

  //add the required classes
  card.classList.add("main-container-cards");
  heading.classList.add("main-container-card-title");
  content.classList.add("main-container-card-text");
  logos.classList.add("card-logo-container");

  //assign the variables
  heading.innerText = title;
  content.innerText = description;

  //create the icons
  icon1.classList.add("material-symbols-outlined");
  icon1.classList.add("icon");
  icon1.innerText = "star";
  icon2.classList.add("material-symbols-outlined");
  icon2.classList.add("icon");
  icon2.innerText = "add_circle";
  icon3.classList.add("material-symbols-outlined");
  icon3.classList.add("icon");
  icon3.innerText = "share";

  //append logo elements
  logos.appendChild(icon1);
  logos.appendChild(icon2);
  logos.appendChild(icon3);

  //append card elements
  card.appendChild(heading);
  card.appendChild(content);
  card.appendChild(logos);

  //append to the main container
  cardContainer.appendChild(card);
}

function createPost(name, post) {
  const postContainer = document.querySelector(".post-wrapper");
  const random = Math.floor(Math.random() * 6) + 1;

  const container = document.createElement("div");
  const icon = document.createElement("span");
  const text = document.createElement("p");
  const user = document.createElement("h5");

  //add the required classes
  container.classList.add("post-container");
  icon.classList.add("material-symbols-outlined");
  icon.classList.add("user-icon");

  //add a random image for the profile picture
  if (random == 1) {
    icon.innerText = "face";
  } else {
    icon.innerText = `face_${random}`;
  }
  user.innerText = name;
  text.innerText = post;

  //append the new elements
  container.appendChild(icon);
  container.appendChild(user);
  container.appendChild(text);

  //append to the main container
  postContainer.appendChild(container);
}

for (let i = 0; i < 5; i++) {
  createPost(`Name ${i + 1}`, "This is a post");
}

//create 6 cards dinamically
for (i = 0; i < 6; i++) {
  createCard("card Title", "this is a card created dynamically");
}
