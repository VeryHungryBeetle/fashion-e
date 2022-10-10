document.addEventListener('DOMContentLoaded', () => {
    const endOfferOfMonth = new Date('Sept 15 2022 22:00:00');

    //Привязываем переменную к классу
    const hoursVal = document.querySelector('.time-count__hours .time-count__val');
    const minutesVal = document.querySelector('.time-count__minutes .time-count__val');
    const secondsVal = document.querySelector('.time-count__seconds .time-count__val');

    //Привязываем текст к классу
    const hoursText = document.querySelector('.time-count__hours .time-count__text');
    const minutesText = document.querySelector('.time-count__minutes .time-count__text');
    const secondsText = document.querySelector('.time-count__seconds .time-count__text');

    //Функция склонения
    function declOfNum(number, titles) {
        let cases = [2, 0, 1, 1, 1, 2];
        return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    }

    const timeCount = () => {
        //Вычисление оставшихся миллисекунд
        let currentTime = new Date();
        let leftUntil = endOfferOfMonth - currentTime;

        //Округление времени с остатками
        let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
        let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
        let seconds = Math.floor(leftUntil / 1000) % 60;

        //Если время выйдет то таймер покажет текст
        if (leftUntil < 0) {
            document.querySelector('.time-count__title').innerText = 'Акция завершена';
            document.querySelector('.time-count__content').innerText = '';
        }
        else {
            hoursVal.textContent = hours;
            minutesVal.textContent = minutes;
            secondsVal.textContent = seconds;

            hoursText.textContent = declOfNum(hours, ['Час', 'Часа', 'Часов']);
            minutesText.textContent = declOfNum(minutes, ['Минута', 'Минуты', 'Минут']);
            secondsText.textContent = declOfNum(seconds, ['Секунда', 'Секунды', 'Секунд']);
            //Добавление нуля к числу до 10
            if (hours < 10) {
                hoursVal.textContent = '0' + hours;
            }
            if (seconds < 10) {
                secondsVal.textContent = '0' + seconds;
            }
            if (minutes < 10) {
                minutesVal.textContent = '0' + minutes;
            }
        }
    };
    timeCount();
    setInterval(timeCount, 1000);
});

const offerSlider = new Swiper('.offer-slider', {
    navigation: {
        nextEl: '.offer-slider__button-next',
        prevEl: '.offer-slider__button-prev',
    },

});

const categorySlider = new Swiper('.category-slider', {
    loop: true,
    spaceBetween: 21,
    //Кол-во слайдов для показа
    slidesPerView: 3,
    //Отключение слайдера,если слайдов недостаточно
    watchOverflow: true,
    navigation: {
        nextEl: '.category-slider__button-next',
        prevEl: '.category-slider__button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 2,
        },
        1080: {
            slidesPerView: 3,
        },
    },
});

const featuredProductsSlider = new Swiper('.featuredProducts-slider', {
    loop: true,
    spaceBetween: 21,
    //Отключение слайдера,если слайдов недостаточно
    watchOverflow: true,
    navigation: {
        nextEl: '.featuredProducts-slider__button-next',
        prevEl: '.featuredProducts-slider__button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        612: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1080: {
            slidesPerView: 4,
        },
    },
});

const blogsSlider = new Swiper('.blogs-slider', {
    loop: true,
    spaceBetween: 21,
    //Отключение слайдера,если слайдов недостаточно
    watchOverflow: true,
    navigation: {
        nextEl: '.blogs-slider__button-next',
        prevEl: '.blogs-slider__button-prev',
    },
    320: {
        slidesPerView: 1,
    },
    1080: {
        slidesPerView: 2,
    },
});

