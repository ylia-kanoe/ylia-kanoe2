/* Аккордеон */
let accordeon_mass = '{"accordeon":['+
'{"title":"Текст 1","info": "Много много текста"},'+
'{"title":"Текст 2","info": "Много много текста Много много текста"},'+
'{"title":"Текст 3","info": "Много много текста Много много текста Много много текста"},'+
'{"title":"Текст 4","info": "Много много текста Много много текста Много много текста Много много текста"},'+
'{"title":"Текст 5","info": "Много много текста Много много текста Много много текста Много много текста Много много текста"}'+
']}';
 
let jsonAccordeon = JSON.parse(accordeon_mass);

for (let i = 0; i < jsonAccordeon.accordeon.length; i++) {
    let item = jsonAccordeon.accordeon[i];

    /* Создание переменных */
    let accordeonItem = document.createElement("div");
    let accordeonTitle = document.createElement("div");
    let accordeonInfo = document.createElement("div");

    /* Классы */
    accordeonItem.className = "accordeon__block-item";
    accordeonTitle.className = "accordeon__block-title";
    accordeonInfo.className = "accordeon__block-info";

    /* Обозначаем контейнер */
    let accordeonBlock = document.querySelector(".accordeon__block");

    /* Задаем значения */
    accordeonTitle.innerHTML = item.title; 
    accordeonInfo.innerHTML = item.info; 

    /* Добавляем элементы аккордеона */
    accordeonBlock.appendChild(accordeonItem);
    accordeonItem.appendChild(accordeonTitle);  
    accordeonItem.appendChild(accordeonInfo);  
}
