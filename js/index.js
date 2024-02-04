let noBtn = document.querySelector("#bad-option");
let yesBtn = document.querySelector("#good-option");
let misclickText = document.querySelector("#misclickText");

let catPic = document.querySelector("#cat-pic");
let cryingCat = document.querySelector("#crying-cat");
let happyCat = document.querySelector("#happy-cat");


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
yesBtn.addEventListener("mouseover", (event) => {
  catPic.classList.add("d-none");
  happyCat.classList.remove("d-none");
  cryingCat.classList.add("d-none");
})

yesBtn.addEventListener("click", (event) => {
  misclickText.classList.remove("text-danger");
  misclickText.classList.add("text-success");
  misclickText.textContent = "YAY!! Correct choice!! See you soon squish 😘";
  document.querySelector(".cat-button").classList.add("d-none");
})