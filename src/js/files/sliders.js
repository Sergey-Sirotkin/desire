/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, {Autoplay, Pagination, Thumbs} from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.main-slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.main-slider__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: false,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
			allowTouchMove: false,

			
			// Эффекты
			//effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			/*
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},
			*/

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.new-slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.new-slider__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Autoplay, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 20,
			autoHeight: false,
			speed: 1500,
			slidesPerGroup: 4,
			
			

			//touchRatio: 0,
			//simulateTouch: false,
			loop: false,
			//preloadImages: false,
			//lazy: true,

			
			// Эффекты
			//effect: 'fade',
			
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
				pauseOnMouseEnter: true,
			},
			
			

			// Пагинация
			
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				
			},
			

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			/*
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},
			*/

			// Брейкпоинты
			
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					slidesPerGroup: 1,
				},
				562: {
					slidesPerView: 2,
					spaceBetween: 20,
					slidesPerGroup: 2,
				},
				820: {
					slidesPerView: 3,
					spaceBetween: 20,
					slidesPerGroup: 3,
				},
				1100: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
			},
			
			// События
			on: {
				init: function () {
					if (this.slides.length <= 4) {
						this.allowSlidePrev = this.allowSlideNext = false; // disabling swiping
						this.el.querySelector(".swiper-pagination-bullet-active").setAttribute('hidden', '');  // hiding arrows prev&next
					}
				}
			}
		});
	}
	if (document.querySelector('.bestsellers-slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.bestsellers-slider__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Autoplay, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 20,
			autoHeight: false,
			speed: 1500,
			slidesPerGroup: 4,
			

			//touchRatio: 0,
			//simulateTouch: false,
			loop: false,
			//preloadImages: false,
			//lazy: true,

			
			// Эффекты
			//effect: 'fade',
			
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
				pauseOnMouseEnter: true,
			},
			
			

			// Пагинация
			
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			/*
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},
			*/

			// Брейкпоинты
			
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					slidesPerGroup: 1,
				},
				562: {
					slidesPerView: 2,
					spaceBetween: 20,
					slidesPerGroup: 2,
				},
				820: {
					slidesPerView: 3,
					spaceBetween: 20,
					slidesPerGroup: 3,
				},
				1100: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
			},
			
			// События
			on: {
				init: function () {
					if (this.slides.length <= 4) {
						this.allowSlidePrev = this.allowSlideNext = false; // disabling swiping
						this.el.querySelector(".swiper-pagination-bullet-active").setAttribute('hidden', '');  // hiding arrows prev&next
					}
				}
			}
		});
	}
	if (document.querySelector('.about-slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.about-slider__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: false,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
			allowTouchMove: false,

			
			// Эффекты
			//effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			/*
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},
			*/

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.catalog-top-slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.catalog-top-slider__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Autoplay, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: false,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: false,
			//preloadImages: false,
			//lazy: true,

			
			// Эффекты
			//effect: 'fade',
			
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
				pauseOnMouseEnter: true,
			},
			
			

			// Пагинация
			
			pagination: {
				el: '.catalog-top-slider__pagination',
				clickable: true,
			},
			

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			/*
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},
			*/

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					slidesPerGroup: 1,
				},
				562: {
					slidesPerView: 2,
					spaceBetween: 20,
					slidesPerGroup: 2,
				},
				820: {
					slidesPerView: 3,
					spaceBetween: 20,
					slidesPerGroup: 3,
				},
				1100: {
					slidesPerView: 1,
					spaceBetween: 0,
				},
			},
			*/
			
			
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.product-card__body')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		const thumbsSwiper = new Swiper('.product-card-thumbs__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Thumbs],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 0,
			autoHeight: false,
			speed: 800,
			allowTouchMove: false,
			

			//touchRatio: 0,
			//simulateTouch: false,
			loop: false,
			//preloadImages: false,
			//lazy: true,

			
			// Эффекты
			//effect: 'fade',
			/*
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
				pauseOnMouseEnter: true,
			},
			*/
			

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			/*
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},
			*/

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					slidesPerGroup: 1,
				},
				562: {
					slidesPerView: 2,
					spaceBetween: 20,
					slidesPerGroup: 2,
				},
				820: {
					slidesPerView: 3,
					spaceBetween: 20,
					slidesPerGroup: 3,
				},
				1100: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
			},
			*/
			
			// События
			on: {

			}
		});
		new Swiper('.product-card-slider__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Thumbs],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 30,
			autoHeight: false,
			speed: 800,

			thumbs: {
				swiper: thumbsSwiper
			},

			//touchRatio: 0,
			simulateTouch: true,
			loop: false,
			//preloadImages: false,
			//lazy: true,

			
			// Эффекты
			//effect: 'fade',
			/*
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
				pauseOnMouseEnter: true,
			},
			*/
			

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			/*
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},
			*/

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					slidesPerGroup: 1,
				},
				562: {
					slidesPerView: 2,
					spaceBetween: 20,
					slidesPerGroup: 2,
				},
				820: {
					slidesPerView: 3,
					spaceBetween: 20,
					slidesPerGroup: 3,
				},
				1100: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
			},
			*/
			
			// События
			on: {

			}
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});