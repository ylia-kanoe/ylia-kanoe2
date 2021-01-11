/* Информация */
let modalInfo = document.querySelectorAll(".modal-info");
let modalProductInfo = document.querySelector(".modal__product-info");

/* Информация на главной */
let modalHeaderInfo = document.querySelectorAll(".header__info");
let modalHomeInfo = document.querySelector(".modal__home-info");

/* Купить */
let modalBuy = document.querySelectorAll(".modal-buy");
let modalProductBuy = document.querySelector(".modal__product-buy");

/* Изображение */
let modalImg = document.querySelectorAll(".modal-img");
let modalImage = document.querySelector(".modal__image");

/* Изображение (отступы, фон) */
let modalImgFrame = document.querySelectorAll(".modal-img-frame");
let modalImageFrame = document.querySelector(".modal__image-frame");

/* Модальное окно */
let modalOpacity = document.querySelector(".modal-opacity");
let modalClose = document.querySelectorAll(".modal-close");
let modal = document.querySelectorAll(".modal");

/* Изображение в модальном окне*/
let imageModal = (param, param2) => {
    for (let i = 0; i < param.length; i++) {
        param[i].addEventListener('click', () => {
            let imageHref = document.createElement("img");
            let ImageBlock = document.querySelector(param2 + " .modal-body");
            ImageBlock.innerHTML = "";
            imageHref.className = "modal__image-item";
            imageHref.src = param[i].getAttribute("src");
            ImageBlock.appendChild(imageHref);
        });
    }
}

/*  Открытие модального окна*/
let modalOpen = (param, param2) => {
    for (let i = 0; i < param.length; i++) {
        param[i].addEventListener('click', () => {
            param2.classList.add('active');
            modalOpacity.classList.add('active');
        });
    }
}

/* Закрытие модального окна */
let modalClickOpacity = (param) => {
    param.addEventListener('click', () => {
        for (let i = 0; i < modal.length; i++) {
            modal[i].classList.remove('active');
        }
        param.classList.remove('active');
    });
}

let modalClickClose = (param) => {
    for (let i = 0; i < param.length; i++) {
        param[i].addEventListener('click', () => {
            for (let i = 0; i < modal.length; i++) {
                modal[i].classList.remove('active');
            }
            modalOpacity.classList.remove('active');
        });
    }
}

/* Изображение в модальном окне*/
imageModal(modalImg, ".modal__image");
imageModal(modalImgFrame, ".modal__image-frame");

/* Открытие модалки Купить*/
modalOpen(modalBuy, modalProductBuy);

/* Открытие модалки Инфо*/
modalOpen(modalInfo, modalProductInfo);

/* Открытие модалки Инфо на главной*/
modalOpen(modalHeaderInfo, modalHomeInfo);

/* Открытие модалки изображения с разными стилями*/
modalOpen(modalImg, modalImage);
modalOpen(modalImgFrame, modalImageFrame);

/* Закрытие модалки при нажатии на закрыть и вне модалки*/
modalClickOpacity(modalOpacity);
modalClickClose(modalClose);
