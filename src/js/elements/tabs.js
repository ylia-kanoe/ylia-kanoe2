let tabListItem = document.querySelectorAll(".tab__block-list-item"); /* Список табов */
let tabInfoItem = document.querySelectorAll(".tab__block-item"); /* Текст табов */

let tabToggle = (param, param2) => {
    for (let [key, item] of param.entries()) {
        item.addEventListener('click', () => {
            document.querySelector(".tab__block-list-item.active").classList.remove('active'); 
            item.classList.add('active'); 
            for (let [key2, item2] of param2.entries())  { 
                if(key == key2){
                document.querySelector(".tab__block-item.active").classList.remove('active'); 
                item2.classList.add('active'); 
                }
            }
        });
    }
}

tabToggle(tabListItem, tabInfoItem);


/*
for (let i = 0; i < tabListItem.length; i++) {
    tabListItem[i].onclick = function(e){ 
        document.querySelector(".tab__block-list-item.active").classList.remove('active'); 
        e.currentTarget.classList.add('active');  
        for (let j = 0; j < tabInfoItem.length; j++) { 
            if(i == j){
            document.querySelector(".tab__block-item.active").classList.remove('active'); 
            tabInfoItem[i].classList.add('active'); 
            }
        }
    }
}
*/
