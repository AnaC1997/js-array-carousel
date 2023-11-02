// Trova elemento html con la classe "container"
const container = document.getElementById("container");

//Variabile che contine markup html
const imagesHTML= ' <i class="fas fa-arrow-up"></i><i class="fas fa-arrow-down"></i><img src="img/01.webp" alt="img1"><img src="img/02.webp" alt="img2"><img src="img/03.webp" alt="img3"><img src="img/04.webp" alt="img4"><img src="img/05.webp" alt="img5">';

container.innerHTML += imagesHTML;
    
//Impostazione imagine attiva
let attualeImg = 0;
const images = document.querySelectorAll("#container img");
images[attualeImg].classList.add("active");

// Pulsanti

const arrowUp = document.querySelector(".fa-arrow-up");
arrowUp.addEventListener("click", function (){
    console.log ("Avanti")
    if(attualeImg < images.length -1){
        images[attualeImg].classList.remove("active");
        attualeImg++;
        images[attualeImg].classList.add("active");
    } // torna alla prima immagine
    else {
        images[attualeImg].classList.remove("active");
        attualeImg= 0;
        images[attualeImg].classList.add("active");

    }

});

const arrowDown = document.querySelector(".fa-arrow-down");
arrowDown.addEventListener("click", function (){
    console.log ("Indietro");
    if(attualeImg > 0){
        images[attualeImg].classList.remove("active");
        attualeImg--;
        images[attualeImg].classList.add("active");
    }
    else{
        images[attualeImg].classList.remove("active");
        attualeImg= 4;
        images[attualeImg].classList.add("active");
    }


})





/*document.getElementsByClassName("fa-arrow-up").addEventListener("click", function () {
    console.log("Avanti");
    if(attualeImg < images.length -1){
        images[attualeImg].classList.remove("active")
        attualeImg++;
        images[attualeImg].classList.add("active")
    }
    });*/