// const{
//     createApp
// } = Vue;

// createApp({
//     data(){
//         return{
//             messaggio: 'ciao'
//         }
//     }
// }).mount('#container')


//Creo array oggetti

let imagesArray = [
    {
        images: "01.webp",
        title: "Spiderman",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        images: "02.webp",
        title: "Ratchet & Clank",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        images: "03.webp",
        title: "Fortnite",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        images: "04.webp",
        title: "Cat",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        images: "05.webp",
        title: "The Avengers",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },

]


//Creiamo dinamicamente i div con le immagini del carosello
let itemsContent = '';
let itemsThumbnails = '';

for(let i = 0; i < imagesArray.length; i++){
    itemsContent += `<div class="item">
                        <img src="./img/${imagesArray[i].images}">
                        <div class="item-description">
                             <h3>${imagesArray[i].title}</h3>
                             <p>${imagesArray[i].description}</p>
                        </div>
                    </div>`

    itemsThumbnails += `<div class="thumb"><img src="./img/${imagesArray[i].images}"></div>`;
}

//inseriamo le immagini nel div che le deve contenere
const itemsSlider = document.querySelector('.item-slider');
itemsSlider.innerHTML += itemsContent;

// inseriamo immagini nel thumbnails

const thumbnailsPreview = document.querySelector('.thumbnails');
thumbnailsPreview.innerHTML += itemsThumbnails;

//Prendiamo la prima immagine dell'array e la rendiamo attiva

//const items = document.querySelector('.item'); //ALTERNATIVA

const items = document.getElementsByClassName('item');
let itemActive = 0;

items[itemActive].classList.add('active');

//rendo attivo anche il primo cerchio di navigazione

const circles = document.getElementsByClassName('circle');

circles[itemActive].classList.add('active');

// thumbnails

const thumbnails = document.getElementsByClassName('thumb');

thumbnails[itemActive].classList.add('active');

// attivo il click sulla thumbnails

for(let i=0; i<thumbnails.length; i++){
    let thumb = thumbnails[i];
    thumb.addEventListener('click', function(){
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');
        thumbnails[itemActive].classList.remove('active');
    
        itemActive = i;
    
        items[itemActive].classList.add('active');
        circles[itemActive].classList.add('active');
        thumbnails[itemActive].classList.add('active');
    });
}

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');


// freccia verso DX

next.addEventListener('click', goToNextSlides);


// freccia verso SX

// prev.addEventListener('click', goToPrevSlides);

prev.addEventListener('click', function(){
    if(itemActive > 0){
        //verifico l'elemento attivo (itemActive)
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');
        thumbnails[itemActive].classList.remove('active');
        //decremento il suo valore di 1
        itemActive--;
        //aggiungere la class active al nuovo elemento dell'array items e la vado a rimuovere da quello precedente
        items[itemActive].classList.add('active');
        //stessa cosa per i cerchi
        circles[itemActive].classList.add('active');
        // stessa cosa per i thumbanails
        thumbnails[itemActive].classList.add('active');
    }
    else{
        //verifico l'elemento attivo (itemActive)
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');
        thumbnails[itemActive].classList.remove('active');
        //decremento il suo valore di 1
        itemActive=imagesArray.length -1;
        //aggiungere la class active al nuovo elemento dell'array items e la vado a rimuovere da quello precedente
        items[itemActive].classList.add('active');
        //stessa cosa per i cerchi
        circles[itemActive].classList.add('active');
        // stessa cosa per i thumbanails
    thumbnails[itemActive].classList.add('active');
    }
 })




// BONUS bottoni PLAY e PAUSE

// Funzione ma manda in autoplay le slides
function goToNextSlides(){
    if(itemActive < imagesArray.length -1){
        //verifico l'elemento attivo (itemActive)
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');
        thumbnails[itemActive].classList.remove('active');
        //incremento il suo valore di 1
        itemActive++;
        //aggiungere la class active al nuovo elemento dell'array items e la vado a rimuovere da quello precedente
        items[itemActive].classList.add('active');
        //stessa cosa per i cerchi
        circles[itemActive].classList.add('active');
        // stessa cosa per i thumbanails
        thumbnails[itemActive].classList.add('active');


    }
    else{
        //verifico l'elemento attivo (itemActive)
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');
        thumbnails[itemActive].classList.remove('active');
        //incremento il suo valore di 1
        itemActive=0
        //aggiungere la class active al nuovo elemento dell'array items e la vado a rimuovere da quello precedente
        items[itemActive].classList.add('active');
        //stessa cosa per i cerchi
        circles[itemActive].classList.add('active');
        // stessa cosa per i thumbanails
        thumbnails[itemActive].classList.add('active');
    }
    
}

let myInterval = setInterval(goToNextSlides, 2000);

document.getElementById('play').addEventListener('click', function(){
    clearInterval(myInterval);
    myInterval = setInterval(goToNextSlides, 2000);
});

document.getElementById('pause').addEventListener('click', function(){
    clearInterval(myInterval);
})


// BONUS bottone PREV

// function goToPrevSlides(){
//     if(itemActive > 0){
//         //verifico l'elemento attivo (itemActive)
//         items[itemActive].classList.remove('active');
//         circles[itemActive].classList.remove('active');
//         thumbnails[itemActive].classList.remove('active');
//         //decremento il suo valore di 1
//         itemActive--;
//         //aggiungere la class active al nuovo elemento dell'array items e la vado a rimuovere da quello precedente
//         items[itemActive].classList.add('active');
//         //stessa cosa per i cerchi
//         circles[itemActive].classList.add('active');
//         // stessa cosa per i thumbanails
//         thumbnails[itemActive].classList.add('active');
//     }
//     else{
//         //verifico l'elemento attivo (itemActive)
//         items[itemActive].classList.remove('active');
//         circles[itemActive].classList.remove('active');
//         thumbnails[itemActive].classList.remove('active');
//         //decremento il suo valore di 1
//         itemActive=imagesArray.length -1;
//         //aggiungere la class active al nuovo elemento dell'array items e la vado a rimuovere da quello precedente
//         items[itemActive].classList.add('active');
//         //stessa cosa per i cerchi
//         circles[itemActive].classList.add('active');
//         // stessa cosa per i thumbanails
//         thumbnails[itemActive].classList.add('active');
//     }
    
    
// }


// let myIntervalPrev = setInterval(goToPrevSlides, 2000);

// document.getElementById('prev').addEventListener('click', function(){
//     clearInterval(myIntervalPrev);
//     myIntervalPrev = setInterval(goToPrevSlides, 2000);
// });
