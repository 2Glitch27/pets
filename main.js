const pets = {
    'Katrine': {
        'age': 'Age : 2',
        'breed' : 'Breed : Сhartreux',
        'character': 'She is known for her calm, balanced and loyal nature.',
    },
    'Jennifer': {
        'age': 'Age : 1',
        'breed' : 'Breed : Labrador Retriever.',
        'character': 'A friendly, active breed, popular as a family companion.',
    },
    'Woody': {
        'age': 'Age : 5',
        'breed' : 'Breed : Golden Retriever',
        'character':'These dogs are known for their calm, gentle and friendly nature.',
    },
    'Timmy': {
       'age': 'Age : 3',
        'breed' : 'Breed : British Shorthair',
        'character':'Usually they are calm, kind and intelligent animals.',
    },
    'Scarlet': {
        'age': 'Age : 1',
        'breed' : 'Breed : Jack Russell Terrier',
        'character':'Very energetic, intelligent, inquisitive and friendly dogs.',
    },
    'Freddie': {
        'age': 'Age : 4',
        'breed' : 'Breed : Gray Thai cat',
        'character':'This is an extremely intelligent, sociable and emotional animal.',
    },
    'Sophia': {
        'age': 'Age : 1',
        'breed' : 'Breed : Schnoodles ',
        'character':'They are energetic, intelligent and incredibly loyal companion dogs, charming with their friendly nature and cheerful spirit.',
    },
   'Charly': {
        'age': 'Age : 3',
        'breed' : 'Breed : Jack Russell Terrier',
        'character':'Very energetic, intelligent, inquisitive and friendly dogs.',
   },

}


document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__main-menu');
    const header = document.querySelectorAll('.header')
    const body = document.body;
    burger.addEventListener('click', () =>{
        if (header.classList.contains('header--white')){
            menu.classList.toggle('active--white');
        }else{
            menu.classList.toggle('active');
        }
        body.classList.toggle('no-scroll');
        // menu.classList.toggle('active');
        burger.classList.toggle('active');
    })
    


 const slider = document.querySelector('.slider__wrapper');
    const prevBtn = document.querySelector('.slider__arrow--left');
    const nextBtn = document.querySelector('.slider__arrow--right');

  if (prevBtn || nextBtn){
      [prevBtn, nextBtn].forEach(btn => {
        btn.addEventListener('click', () => {
                const direction = btn.classList.contains('slider__arrow--right') ? 1 : -1;
                const scrollStep = slider.clientWidth
                const style = window.getComputedStyle(slider);
                const gap = parseInt(style.getPropertyValue('gap'));
                slider.scrollBy({
                    left: (scrollStep + gap) * direction ,
                    behavior: 'smooth' 
                });
                
            });
    });
  }
        






const popUpOpen = document.querySelectorAll('.friends-item');
// const popUpTitle = document.querySelector('.pop-up__desc');
const popUpActive = document.querySelector('.pop-up__container')


popUpOpen.forEach(btn =>{
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const namePet = btn.querySelector('.friends-item__title').innerText;
        popUpActive.classList.toggle('pop-up__active');
        body.classList.toggle('no-scroll');
        

        const desc = document.querySelector('.pop-up__desc');
        const text = document.createElement('div');
        const img = btn.querySelector ('.friends-item__image-container')
        let imgPopUP = document.querySelector('.pop-up__img');
        imgPopUP.src = img.firstElementChild.src
        const info = pets[namePet];
        text.innerHTML = `<div>${namePet}</div>
        <div>${info.age}</div>
        <div>${info.breed}</div>
        <div>${info.character}</div>`

        desc.innerHTML = '';
        desc.appendChild(text)



    })
})

const popUpClose = document.querySelectorAll('.pop-up__close');
const popUp = document.querySelector('.pop-up__container');
popUpClose.forEach(btn =>{
    btn.addEventListener('click', () =>{
    popUpActive.classList.remove('pop-up__active');
    body.classList.remove('no-scroll');
})
})

popUp.addEventListener('click', () => {
        popUpActive.classList.remove('pop-up__active');
        body.classList.remove('no-scroll');
})
document.addEventListener('keydown', (e) =>{
    if(e.key === 'Escape'){
        popUpActive.classList.remove('pop-up__active');
        body.classList.remove('no-scroll');
    }
})









const containerFriends = document.querySelector('.friends__grid');
const friends = document.querySelectorAll('.friends-item');
// const currentFriends = document.querySelector('.pagination__link')
const pageFriends = document.querySelector('.pagination__link--current')

function creatingArray (array, numberCopies){
let newArray = [];
for (let i = 0; i < numberCopies; i ++){
    let basicArray = [...array];
    for (let i = 0; i < basicArray.length; i++){
        let j = Math.floor(Math.random() * (i + 1)); 
        [basicArray[i], basicArray[j]] = [basicArray[j], basicArray[i]];
    }
    newArray = newArray.concat(basicArray)
}
return newArray
}


const newFriends = creatingArray(friends, 6);

function getCount (){
    let count = 8;
    if (window.screen.width <= 569){
    count = 3;
    }else if (window.screen.width <= 990){
        count = 6;
    }
    return count;
}
// let count = 8;
let pageF = 1;


function createPagination (array, container, count, page){
    container.innerHTML = '';

    const firstIndex = count * page - count;
    const lastIndex = firstIndex + count;
    const friendsOnPage = array.slice(firstIndex, lastIndex);
    friendsOnPage.forEach( (item) =>{
        container.appendChild(item)
    })  

}
if (containerFriends){
createPagination(newFriends, containerFriends, getCount(), pageF)
}


const btnFriends = document.querySelectorAll('.pagination__link');
const btnStart = document.getElementById('start');
const btnEnd = document.getElementById('end');
const btnBack = document.getElementById('back');
const btnNext = document.getElementById('next');

btnFriends.forEach(btn => {
       btn.addEventListener('click', (e) =>{
        e.preventDefault();
         if (btn.classList.contains('pagination__link--current')) {
            return; 
        }
        if (btn.id === 'start'){
            pageF = 1;         
        }else if (btn.id === 'end'){
            pageF = Math.ceil(newFriends.length / getCount());        
        }else if (btn.id === 'back' && pageF > 1){
            pageF--;
        }else if (btn.id === 'next' && pageF < newFriends.length/getCount()) {
            pageF++;        
        }

        pageFriends.textContent = pageF;
    createPagination(newFriends, containerFriends, getCount(), pageF)

        })
        
})






























});
    
            







   


