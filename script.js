function color(){
  this.classList.add('colored');
  console.log("in");
}

const bigContainer = document.querySelector(".container")

for(i = 0; i < 16; i++){
  const inside = document.createElement('div');
  inside.textContent = i;
  inside.classList.add('inside');
  bigContainer.appendChild(inside);
}

const insides = document.querySelectorAll('.inside');

insides.forEach((inside) => {
  inside.addEventListener('mouseover', color)
});
