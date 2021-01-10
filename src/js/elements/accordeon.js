let accordeonItem =  document.querySelectorAll(".accordeon__block-item");

let accordeonToggle = (param) => {
    for (let item of param) {
        item.addEventListener('click', () => {
            item.classList.toggle('active');   
        });
    }
}

accordeonToggle(accordeonItem);

/*
for (let i = 0; i < accordeonItem.length; i++) {
    accordeonItem[i].onclick = function(){
        accordeonItem[i].classList.toggle('active');    
    };
}
*/
