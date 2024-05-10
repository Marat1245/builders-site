

//
//
//
//
// Выравнивание элементов

function itemAlignment() {

	let alignmentItems = $('div[data-mh]');

	setTimeout(() => {
		for (let i = 0; i < alignmentItems.length; i++) {
			let alignmentItemsWidth = $(alignmentItems).width(); // Ширина обертки
			let itemClass = $(alignmentItems[i]).attr('data-mh').split(',')[0]; // Имя класса элемента, которому нужно добавить высоту
			let media = $(alignmentItems[i]).attr('data-mh').split(',')[1]; // Медиазапрос, до которого будет действовать скрипт
			let item = $(alignmentItems[i]).find(itemClass); // Элемент, которому нужно добавить высоту
			let itemWrapper = $(alignmentItems[i]).find('>*') // Внутренние элементы обертки
			let cols = Math.round(alignmentItemsWidth / +$(alignmentItems[i]).find('>*').outerWidth()) // Количество колонок
			let rows = Math.ceil(item.length / cols) // Количество строк

			if ($(window).width() > media) {
				item.removeAttr('style')

				let index = 0; // Индекс элементов
				let j = 0; // Индекс добавляемый для каждого элемента в классе item-{индекс}

				$(itemWrapper[0]).addClass('item-0')

				// Добавление одинаковых классов для каждой строки
				for (let k = 0; k < itemWrapper.length; k++) {
					if (k == 0) {
						j++;
						continue
					}

					if (cols <= j) {
						index++
						$(itemWrapper[k]).addClass(`item-${index}`)
						j = 1

					} else {
						$(itemWrapper[k]).addClass($(itemWrapper[k - 1]).attr('class'))
						j++;
					}
				}


				// Перебор каждой строки
				for (let rowsIndex = 0; rowsIndex < rows; rowsIndex++) {
					let getRow = $(alignmentItems[i]).find(`.item-${rowsIndex}`)

					maxHeight = $(getRow).first().find(item).height();

					for (let getRowIndex = 0; getRowIndex < $(getRow).find(item).length; getRowIndex++) {
						if ($(getRow).find(item).eq(getRowIndex).height() > maxHeight) {
							maxHeight = +$(getRow).find(item).eq(getRowIndex).height()
						}
					}

					$(getRow).find(item).css({
						height: maxHeight
					})

				}
			} else {
				item.removeAttr('style')
			}
		}
	}, 70);
}

itemAlignment();

$(window).resize(function () {
	itemAlignment();
})


//
//
//
//
// Отрытие модалки
$('[data-modal]').on('click', function () {
	if ($(this).attr('data-modal-text')) {
		let parent = $(this).attr('data-modal-text').split(';')[0]; // Родитель
		let children = $(this).attr('data-modal-text').split(';')[1]; // Дочерний (из которого берется контент)
		let where = $(this).attr('data-modal-text').split(';')[2]; // Куда вставлять

		let issetParent = $(this).closest(parent).length != 0; // Если есть родитель
		let isNotInput = $(where).prop('tagName') != 'INPUT'; // Если тег, куда будет вставляется контент != input
		let isClassMatch = $(this).hasClass(children.substr(1)); // Если класс во втором параметре совпадает с классом элемента, на который кликнули
		let searchInChildren = $(this).closest(parent).find(this).find(children).text() // Если элемент, из которого берется контент находится внутри элемента, на который кликнули
		let searchInThis = $(this).closest(parent).find(this).text() // Если элемент, из которого берется контент равен элементу, на который кликнули

		if ((issetParent && isNotInput && isClassMatch) || (!issetParent && isNotInput && isClassMatch)) {
			$(where).text(searchInThis)
		}
		if ((issetParent && isNotInput && !isClassMatch) || (!issetParent && isNotInput && !isClassMatch)) {
			$(where).text(searchInChildren)
		}
		if ((issetParent && !isNotInput && isClassMatch) || (!issetParent && !isNotInput && isClassMatch)) {
			$(where).val(searchInThis)
		}
		if ((issetParent && !isNotInput && !isClassMatch) || (!issetParent && !isNotInput && !isClassMatch)) {
			$(where).val(searchInChildren)
		}
	}

	let dataModal = $(this).attr('data-modal')
	$(`.popup[id="${dataModal}"]`).fadeIn();

	hideScrollbar()
});

// Функция закрытия модалок
function closeModal() {
	$('.popup').fadeOut();
	setTimeout(() => {
		if (!$(menu).hasClass(menuActive)) {
			bodyRemoveClass()
			$('body').removeClass('no-scroll');
			clearInputs()
		}
	}, 400);
}

// Закрытие модалки при клике на крестик
$('.popup__close, .popup-thank__button').on('click', function () {
	closeModal()
});

// Закрытие модалки при клике вне области контента
var popup = document.querySelectorAll('.popup__dialog');
window.addEventListener('click', function (e) {
	popup.forEach(function (popup) {
		if (e.target == popup) {
			closeModal()
		}
	});
});

// Закрытие модалки при клике ESC
window.onkeydown = function (event) {
	if (event.keyCode == 27) {
		popup.forEach(function (popup) {
			closeModal()
		});
	}
};

// Очистка input и textarea при закрытии модалки и отправки формы
function clearInputs() {
	// $('input, textarea').val('');
	// $('input, textarea').removeClass('wpcf7-not-valid');
	// $('.form__check').removeClass('error');
}


//
//
//
//
// плавная прокрутка
$('.menu li a, .scroll').click(function () {
	var scroll_el = $(this).attr('href');

	if ($(scroll_el).length != 0) {
		$('html, body').animate({
			scrollTop: $(scroll_el).offset().top - +$(headerTop).innerHeight() + 1
		}, 800);
		$(menu).removeClass(menuActive);
		$('.menu-link').removeClass('menu-link_active');
		bodyRemoveClass();
	} else {
		$('html, body').animate({
			scrollTop: 0
		}, 800);
		$(menu).removeClass(menuActive);
		$('.menu-link').removeClass('menu-link_active');
		bodyRemoveClass();
	}
	$('body').removeClass('no-scroll');
	return false;
});

//
//
//
//
// Переменные
let headerTop = $('.header__top-wrapper')
let headerTopFixed = 'header__top-wrapper_fixed';

let menu = $('.header__menu-wrapper');
let menuActive = 'header__menu-wrapper_active';
let burgerMedia = 991;

let bodyOpenModalClass = 'popup_show';

// Функции для добавления и удаления классов для Body и фиксированной шапки при открытии модалки и мобильного меню
function bodyRemoveClass() {
	$('body').removeClass('window-padding')
	$(headerTop).removeClass('window-padding')

	removeScrollbarPadding($('body'))
	removeScrollbarPadding(headerTop)
}

function bodyToggleClass() {
	$('body').toggleClass('window-padding')
	$(headerTop).toggleClass('window-padding')

	if ($('body').hasClass('window-padding') && $(headerTop).hasClass('window-padding')) {

		addScrollbarPadding($('body'))
		addScrollbarPadding(headerTop)
	} else {
		removeScrollbarPadding($('body'))
		removeScrollbarPadding(headerTop)
	}
}

// Получение ширины скроллбара
function getScrollBarWidth() {
	let div = document.createElement('div');

	div.style.overflowY = 'scroll';
	div.style.width = '50px';
	div.style.height = '50px';

	document.body.append(div);
	let scrollWidth = div.offsetWidth - div.clientWidth;

	div.remove();
	return scrollWidth
}

// Добавление отступа при скрытии скроллбара
function addScrollbarPadding(elem) {
	$(elem).css({
		paddingRight: getScrollBarWidth() + 'px'
	})
}

// Удаление отступа при скрытии скроллбара
function removeScrollbarPadding(elem) {
	$(elem).css({
		paddingRight: 0
	})
}

function hideScrollbar() {
	$('body').addClass('no-scroll');
	if (!isMobile()) {
		$('body').addClass('window-padding')
		$(headerTop).addClass('window-padding')
		$('.popup').addClass(bodyOpenModalClass)
		addScrollbarPadding($('body'))


		addScrollbarPadding(headerTop)
	}
}

// Проверка на мобильное устройство
function isMobile() {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent);
}






//
//
//
//
// Общие скрипты
$(function () {



});
