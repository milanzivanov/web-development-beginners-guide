const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const imageSf = document.querySelectorAll(".trip-image");

function modalOpen() {
    backdrop.style.display = 'block';
    modal.style.display = 'block';
}

function modalClose() {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
}

for(let i = 0; i < imageSf.length; i++) {
    imageSf[i].addEventListener('click', modalOpen);
}

backdrop.addEventListener('click', modalClose);


