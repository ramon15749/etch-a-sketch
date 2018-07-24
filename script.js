function build(num){
  bigContainer.style.cssText = 'grid-template-columns: repeat(' +n +',1fr)';

  for(i = 0; i < num*num; i++){
    const inside = document.createElement('div');
    inside.classList.add('inside');
    inside.style.cssText = 'width:' + size;
    inside.style.cssText = 'height:' + size;
    bigContainer.appendChild(inside);
  }
  insides = document.querySelectorAll('.inside');
}

function remove(){
  while (bigContainer.firstChild) {
    bigContainer.removeChild(bigContainer.firstChild);
  }

  n = prompt("Enter the dimension");
  size = 600/n;

  build(n);

  insides.forEach((inside) => {
    inside.addEventListener('mouseover', color)
  });

}

function reset(){
  insides.forEach((inside) => {
    inside.classList.remove('colored');
  });
}

function color(){
  this.classList.add('colored');
}

n = prompt("Enter the dimension");
size = 600/n;

const bigContainer = document.querySelector(".container")

build(n);

insides.forEach((inside) => {
  inside.addEventListener('mouseover', color)
});



const canvas = document.querySelector('.remove')
canvas.addEventListener('click', remove);
//
const button = document.querySelector('.reset');
button.addEventListener('click', reset);
//
