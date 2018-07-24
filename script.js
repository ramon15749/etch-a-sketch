function color(){
  this.classList.add('colored');
  console.log("in");
}

n = prompt("Enter the dimension");
size = 960/n;

const bigContainer = document.querySelector(".container")
bigContainer.style.cssText = 'grid-template-columns: repeat(' +n +',1fr)';

for(i = 0; i < n*n; i++){
  const inside = document.createElement('div');
  inside.classList.add('inside');
  inside.style.cssText = 'width:' + size;
  inside.style.cssText = 'height:' + size;
  bigContainer.appendChild(inside);
}



const insides = document.querySelectorAll('.inside');

function reset(){
  insides.forEach((inside) => {
    inside.classList.remove('colored');
  });
}

insides.forEach((inside) => {
  inside.addEventListener('mouseover', color)
});

const button = document.querySelector('button');

button.addEventListener('click', reset);
