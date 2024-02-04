import { fetchCat } from "./api/fetchCat";

let noBtn = document.querySelector("#bad-option");
let yesBtn = document.querySelector("#good-option");
let misclickText = document.querySelector("#misclickText");
let mainEventDiv = document.querySelector("#main");

let catPic = document.querySelector("#cat-pic");
let cryingCat = document.querySelector("#crying-cat");
let happyCat = document.querySelector("#happy-cat");

let moreCatSection = document.querySelector("#earned-cat");
let moreCatPicDiv = document.querySelector(".give-cat-pics");
let moreCatBtn = document.querySelector("#moreCatBtn");


const maxX = window.innerWidth;
const maxY = window.innerHeight;
const hoverRange = 400;

//moves the No button 
function moveButton(button, event) {
  let mouseX = event.clientX;
  let mouseY = event.clientY;


 let randomX = Math.floor(Math.random() * (hoverRange));
  let randomY = Math.floor(Math.random() * (hoverRange));

  if(Math.random() < 0.50){
    randomX = randomX * -1;
  }

  if(Math.random() < 0.50){
    randomY = randomY * -1;
  }

  if(mouseX + randomX > maxX || mouseY + randomY > maxY) {
    moveButton(button, event);
  }  

  button.style.transform = `translate(${randomX}px, ${randomY}px)`;
}


//Hovering over the bad option
noBtn.addEventListener("mouseover", (event) => {
  catPic.classList.add("d-none");
  happyCat.classList.add("d-none");
  cryingCat.classList.remove("d-none");
  moveButton(noBtn, event);
})

//If she somehow clicks on it this is the safety
noBtn.addEventListener("click", (event) => {
  event.preventDefault();
  misclickText.textContent = "Haha looks like you accidentally clicked no... try again";
});

//CORRECT OPTION
//hover
yesBtn.addEventListener("mouseover", (event) => {
  catPic.classList.add("d-none");
  happyCat.classList.remove("d-none");
  cryingCat.classList.add("d-none");
})


//clicked
yesBtn.addEventListener("click", (event) => {
  //Set text for congrats
  misclickText.classList.remove("text-danger");
  misclickText.classList.add("text-success");
  misclickText.textContent = "YAY!! Correct choice!! See you soon squish 😘";

  //disappear Valentine's choice button
  document.querySelector(".cat-button").classList.add("d-none");

  moreCatSection.classList.remove("d-none");
})

moreCatBtn.addEventListener("click", async () => {
  mainEventDiv.classList.add("d-none");

  let catPic = await fetchCat();
  let catURL = URL.createObjectURL(catPic);

  let catImg = document.createElement("img");


  catImg.src = catURL;
  moreCatPicDiv.innerHTML = "";
  moreCatPicDiv.appendChild(catImg)

})