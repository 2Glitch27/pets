
window.addEventListener('pageshow', () => {

    const burger = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__main-menu');
    const body = document.body;
    burger.addEventListener('click', () =>{
        body.classList.toggle('no-scroll');
        menu.classList.toggle('active');
        burger.classList.toggle('active');
    })
            
    


    const slider = document.querySelector('.slider__wrapper');
    const prevBtn = document.querySelector('.slider__arrow--left');
    const nextBtn = document.querySelector('.slider__arrow--right');

    [prevBtn, nextBtn].forEach(button => {
        button.addEventListener('click', () => {
            const direction = button.classList.contains('slider__arrow--right') ? 1 : -1;
            const scrollStep = slider.clientWidth

            slider.scrollBy({
                left: scrollStep * direction,
                behavior: 'smooth' 
            });
        });
    });



    const openPopUp = document.querySelectorAll('.friends-item__button');
    const popUp = document.querySelector('.pop-up__container');
    const closePopUp = document.querySelector('.pop-up__close');
    const popUpTitle = document.querySelector('.pop-up__title');
    // const img = document.querySelectorAll('.friends-item__image-container');
    // const imgSrc = img.firstElementChild.src
    const popUpImgContainer = document.querySelector('.pop-up__img')
    openPopUp.forEach(btn =>{

        btn.addEventListener('click', (e) =>{
            e.preventDefault(); 
            const title = btn.previousElementSibling;
            popUpTitle.textContent = title.textContent;



            const parent = btn.closest('.friends-item'); 
            const popUpImg = parent.querySelector('.friends-item__image-container img');
            const imgSrc = popUpImg.src;
            const newImg = document.createElement("img");
            newImg.src = `${imgSrc}`
            popUpImgContainer.appendChild(newImg)
            // img.forEach(() =>{
            // const imgSrc = img.firstElementChild.src
            // const newImg = document.createElement("img");
            // newImg.src = `${}`
            //    popUpImg.     
            // })


            popUp.classList.toggle('pop-up__active');
            body.classList.toggle('no-scroll');
        })
    })
    closePopUp.addEventListener('click', () =>{
        popUp.classList.remove('pop-up__active');
        body.classList.remove('no-scroll');
    })

    popUp.addEventListener('click', (e) => {
        if (e.target === popUp){
            popUp.classList.remove('pop-up__active');
             body.classList.remove('no-scroll');
        }
    })
});


