let txtMain = document.querySelector('.text'); 

let btnRed = document.querySelector('.colors__btn--red');
let btnGreen = document.querySelector('.colors__btn--green');
let btnBlue = document.querySelector('.colors__btn--blue');
let btnToggle = document.querySelector('.toggle');
let btnRainbow = document.querySelector('.rainbow');
let inputBorder = document.querySelector('#border-id');
let btnHello = document.querySelector('.btn--hello');
let inputCustom = document.querySelector('.custom__text');
let btnCustom = document.querySelector('.custom__btn');

let bgRed = 'bg--red';
let bgGreen = 'bg--green';
let bgBlue = 'bg--blue';
let colorArr = ['bg--white', 'bg--black', 'bg--red', 'bg--green', 'bg--blue', 'bg--orange', 'bg--yellow', 'bg--turquoise', 'bg--purple'];
let rainbowArr = ['bg--red', 'bg--orange', 'bg--yellow', 'bg--green', 'bg--turquoise', 'bg--blue', 'bg--purple'];

let compteur = 0;

function colorRem(array) {
    for (i=0; i < array.length; i++) {
        if (txtMain.classList.contains(array[i])) {
            txtMain.classList.remove(array[i]);
        }
    };
};

btnRed.addEventListener('click', (e) => {
    colorRem(colorArr);
    txtMain.classList.add(bgRed);
});

btnGreen.addEventListener('click', (e) => {
    colorRem(colorArr);
    txtMain.classList.add(bgGreen);
});

btnBlue.addEventListener('click', (e) => {
    colorRem(colorArr);
    txtMain.classList.add(bgBlue);
});

btnToggle.addEventListener('click', (e) => {
    colorRem(rainbowArr);
    txtMain.classList.toggle('bg--black');
});

btnRainbow.addEventListener('click', (e) => {
    colorRem(colorArr);
    rainbowChange();
});

// Reset compteur pour rainbow
document.addEventListener('click',e=>{
    if(e.target.id!="js_rainbow"){
        compteur=0;
    };
});

function rainbowChange() {
    if (compteur<rainbowArr.length) {
        txtMain.classList.add(rainbowArr[compteur]);
        compteur++;
    } else {
        compteur = 0;
    }
};

inputBorder.addEventListener('input', (e) => {
    let val = inputBorder.value;
    let result = `border-width: ${val}px`;
    txtMain.style = result;
});

btnHello.addEventListener('click', (e) => {
    txtMain.innerHTML = '';
    let val = btnHello.textContent;
    let newP = document.createElement('p');
    newP.textContent = val;
    txtMain.appendChild(newP);
});

btnCustom.addEventListener('click', (e) => {
    txtMain.innerHTML = '';
    let val = inputCustom.value;
    let newP = document.createElement('p');
    newP.textContent = val;
    txtMain.appendChild(newP);
})