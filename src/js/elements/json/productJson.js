let product_mass = '{"product":['+
'{"image":"abi.jpg","name": "Абиссинская кошка","price": 20000, "href": "", "info": "Абиссинки - это кошки с активной жизненной позицией, они проявляют живой интерес ко всему окружающему. Их темперамент прекрасно сбалансирован, и, по общему признанию, абиссинки являются удивительно гармоничными кошками во всех отношениях.<br>Абиссинкая кошка - необыкновенно умная, грациозная, исполненная сознания собственного достоинства и одновременно ласковая, любознательная и игривая.<br>Абиссинская кошка - верный и преданный друг, помошник во всех делах. Что бы Вы не делали, кошка обязательно будет находиться рядом, стараясь принять участие в происходящем."},'+
'{"image":"may.jpg","name": "Мейн-кун","price": 25000, "href": "","info":"Мейн-куны были выведены более 100 лет назад как крупная, выносливая и красивая порода кошек, хорошо выживаемая в условиях суровых зим. Только наиболее выносливые особи с сильно развитой мускулатурой получили возможность участвовать в дальнейшем разведении.<br>Мейн-куны развиваются медленно и достигают зрелости лишь к 4-5 годам. К этому возрасту вес самцов может достигать 15 кг, у самок - меньше. Это большие, нежные и добродушные гиганты. Даже голос выделяет их среди других кошек. Он имеет отчетливую яркую вибрацию. Мейн-куны редко мяукают, а лишь изредко нежно и коротко подают голос, что никак не соответствует их размерам.<br>Важными отличительными чертами мейн-кунов являются форма головы, тела и текстура шерсти. Голова слегка вытянута больше в длину, чем в ширину, со слегка изогнутым профилем и высокими скулами, уши большие и широкие у основания, высоко посаженные, хорошо опушенные внутри. Кисточки на ушах, похожие на рысиные. Шея средней длины, тело длинное, грудь широкая. Хвост такой же длины, что и тело."},'+
'{"image":"pers.jpg","name": "Персидская кошка","price": 30000, "href": "" ,"info":"Персы являются самой популярной породой на протяжении многих десятилетий.<br>Персидские кошки - самая многочисленная группа на выставках и постоянные лидеры в ежегодных рейтингах CFA (Американской Ассоциации Любителей кошек), да и в Европе они – самые известные и любимые."},'+
'{"image":"sf.jpg","name": "Сфинкс","price": 25000, "href": "","info":"Донские сфинксы - это молодая порода кошек. Они сразу же покорили всех своим неземным видом и замечательным характером, став очень популярной породой.<br>И неудивительно: ведь эти кошки обладают сплошными достсинствами. Все, что есть замечательного во всем кошачьем, присуще Дончакам.<br>Содержать эту породу кошек в домашних условиях - сплошное удовольствие. Слухи о трудностях, связанных с их содержанием, о их привередливости и болезненности - вздор! У них отличное здоровье."}'+
']}';

let jsonProduct = JSON.parse(product_mass);

for (let i = 0; i < jsonProduct.product.length; i++) {
    let item = jsonProduct.product[i];

    /* Создание переменных */
    let productBlockItem = document.createElement("div");
    let productBlockImage = document.createElement("div");
    let productBlockImg= document.createElement("img");
    let productBlockName = document.createElement("p");
    let productBlockPrice = document.createElement("p");
    let productBlockButton = document.createElement("button");
    let productBlockInfo = document.createElement("i");

    /* Классы */
    productBlockItem.className = "product__block-item";
    productBlockImage.className = "product__block-image";
    productBlockImg.className = "product__block-img modal-img-frame";
    productBlockName.className = "product__block-name";
    productBlockPrice.className = "product__block-price";
    productBlockButton.className = "button product__block-click modal-buy";
    productBlockInfo.className = "fas fa-info modal-info";

    /* Обозначаем контейнер */
    let productBlock = document.querySelector(".product__block");

    /* Задаем значения атрибутов */
    productBlockImg.src = 'assets/image/' + item.image; 
    productBlockImg.alt = item.name; 
    productBlockName.innerHTML = item.name; 
     
    productBlockPrice.innerHTML = String(item.price).replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ')  + ' руб.'; 
    productBlockButton.innerHTML = "Купить"; 

    /* Добавляем блоки */
    productBlock.appendChild(productBlockItem);
    productBlockItem.appendChild(productBlockInfo);
    productBlockItem.appendChild(productBlockImage);
    productBlockImage.appendChild(productBlockImg); 
    productBlockItem.appendChild(productBlockName);
    productBlockItem.appendChild(productBlockPrice);
    productBlockItem.appendChild(productBlockButton);
}

/* Модальное окно информация о товаре*/
let productItemI = document.querySelectorAll(".product__block-item i");
let modalProductInfo = document.querySelector(".modal__product-info .modal-body");
let modalProductTitle = document.querySelector(".modal__product-info .modal-title");

for (let i = 0; i < jsonProduct.product.length; i++) {
    let item = jsonProduct.product[i];
    productItemI[i].addEventListener('click', () => {
        modalProductInfo.innerHTML = item.info; 
        modalProductTitle.innerHTML = item.name;
    });
}




