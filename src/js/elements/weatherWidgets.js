var mass = '{"pogoda":[' +
    '{"date":1538337600000,"temperature": {"night": "-3","day": "+2"},"cloudiness": "Ясно","snow": false,"rain": false},' +
    '{"date":1538424000000,"temperature": {"night": "0","day": "+4"},"cloudiness": "Облачно","snow": false,"rain": true},' +
    '{"date":1538510400000,"temperature": {"night": "0","day": "+1"},"cloudiness": "Облачно","snow": true,"rain": true},' +
    '{"date":1538596800000,"temperature": {"night": "+5","day": "+7"},"cloudiness": "Малооблачно","snow": false,"rain": false},' +
    '{"date":1538683200000,"temperature": {"night": "+15","day": "+22"},"cloudiness": "Пасмурно","snow": false,"rain": true},' +
    '{"date":1538769600000,"temperature": {"night": "-5","day": "-2"},"cloudiness": "Облачно","snow": false,"rain": false},' +
    '{"date":1538856000000,"temperature": {"night": "-15","day": "-10"},"cloudiness": "Пасмурно","snow": true,"rain": false}' +
    ']}';

var jsonData = JSON.parse(mass);

for (var i = 0; i < jsonData.pogoda.length; i++) {
    var item = jsonData.pogoda[i];

    var dat = new Date(Number(item.date));
    var now = new Date(1538337600000);

    // проверка на (если в объекте с данными есть данные за предыдущие дни — они не отображаются) проверить : подставить любую другую дату из массива pogoda
    if (Number(dat) >= Number(now)) {

        var DivMain = document.createElement('div');
        DivMain.classList.add('swiper-slide');
        DivMain.classList.add('container-item');
        document.body.appendChild(DivMain);

        // День недели (пятница, суббота)
        var DivDays = document.createElement('div');
        DivDays.classList.add('days');
        DivMain.appendChild(DivDays);

        // проверка на текущий день недели
        if (Number(dat) == Number(now)) {
            DivDays.innerHTML = 'Сегодня';
        }
        else {
            var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Чертверг", "Пятница", "Суббота"];
            DivDays.innerHTML += days[dat.getDay()];
        }

        // ДАТА (день и месяц)
        var DivDayMounth = document.createElement('div');
        DivDayMounth.classList.add('day-mounth');
        DivMain.appendChild(DivDayMounth);
        var months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
        DivDayMounth.innerHTML += dat.getDate() + ' ' + months[dat.getMonth()];

        // иконка солнышка или тучки
        var DivCloudiness = document.createElement('div');
        DivCloudiness.classList.add('cloudiness');
        DivMain.appendChild(DivCloudiness);
        if (item.cloudiness == "Ясно") {
            DivCloudiness.classList.add('clear');
        }
        else if (item.cloudiness == "Облачно") {
            DivCloudiness.classList.add('cloudy');
        }
        else if (item.cloudiness == "Малооблачно") {
            DivCloudiness.classList.add('min-cloudy');
        }
        else if (item.cloudiness == "Пасмурно") {
            DivCloudiness.classList.add('mainly-cloudy');
        }

        //температура днем
        var DivTempDay = document.createElement('div');
        DivTempDay.classList.add('temp-day');
        DivMain.appendChild(DivTempDay);
        DivTempDay.innerHTML += 'днем ' + item.temperature['day'] + '°';

        // температура ночью
        var DivTempNight = document.createElement('div');
        DivTempNight.classList.add('temp-night');
        DivMain.appendChild(DivTempNight);
        DivTempNight.innerHTML += 'ночью ' + item.temperature['night'] + '°';

        // осадки
        var DivRS = document.createElement('div');
        DivRS.classList.add('rs');
        DivMain.appendChild(DivRS);

        var RS = '';
        var classRs = '';
        if (item.snow == true) {
            RS = 'снег';
            classRs = 'snow';
        }
        if (item.rain == true) {
            RS = 'дождь';
            classRs = 'rain';
        }
        if (item.snow == true && item.rain == true) {
            RS = 'дождь и снег';
            classRs = 'rain-snow';
        }
        if (item.snow == false && item.rain == false) {
            RS = 'без осадков';
            classRs = 'no-rain';
        }
        DivCloudiness.classList.add(classRs);
        DivRS.innerHTML += RS;

        var item = document.querySelector('.swiper-weather .swiper-wrapper');
        item.appendChild(DivMain);
    }
    else {

    }
}

let swiper = new Swiper('.swiper-weather', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        }
    }
});