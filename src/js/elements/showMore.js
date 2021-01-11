let showMoreItem = document.querySelectorAll(".show-more__info .my-works__item");
let showMoreButton = document.querySelector(".show-more__button");

let showInfo = (param) => {
    for (let i = 2; i < param.length; i++) {
        param[i].classList.add('dis-none');
    }
}

let showMore = (param) => {
    param.addEventListener('click', () => {
        for (let i = 0; i < showMoreItem.length; i++) {
            showMoreItem[i].classList.remove('dis-none');
        }
        param.remove();
        
    });
}

showInfo(showMoreItem);
showMore(showMoreButton);
