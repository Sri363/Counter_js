
const navBrand = document.querySelector('.nav-brand');
const decBtn = document.querySelector('#dec');
const resBtn = document.querySelector('#res');
const incBtn = document.querySelector('#inc');


const value = document.querySelector('.value');

navBrand.style.textTransform = "uppercase";
navBrand.style.fontWeight = "900";
decBtn.addEventListener("click", decrement);
resBtn.addEventListener("click", reset);
incBtn.addEventListener("click", increment);



let i = 0;
function increment() {
    i += 1;
    value.textContent = i;
    value.style.color = "#08A045";
}

function decrement() {
    i -= 1;
    value.textContent = i;
    value.style.color = "#F71735";
}

function reset() {
    i = 0;
    value.textContent = i;
    value.style.color = "black";
}





