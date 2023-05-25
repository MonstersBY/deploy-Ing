/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/cabinet.js":
/*!**************************************!*\
  !*** ./src/js/components/cabinet.js ***!
  \**************************************/
/***/ (function() {

$('.item__drop_btn').on('click', function (evt) {
  evt.preventDefault();
  var $this = $(this);
  var $drop = $this.siblings('.item__drop');
  $this.toggleClass('active');
  $drop.slideToggle();
});

/***/ }),

/***/ "./src/js/components/displaying.js":
/*!*****************************************!*\
  !*** ./src/js/components/displaying.js ***!
  \*****************************************/
/***/ (function() {

$('.displaying').on('click', function (evt) {
  evt.preventDefault();
  var $this = $(this);
  var $root = $this.closest('.section');
  var $swipers = $root.find('.swiper');
  $swipers.each(function (index, element) {
    element.swiper.destroy();
  });
  if ($this.hasClass('displaying_tiles')) {
    $this.removeClass('displaying_tiles').addClass('displaying_list');
    $root.addClass('section_displaying_list');
    Swiper_grid(1, 1, 5, 1, 1, 2);
  } else if ($this.hasClass('displaying_list')) {
    $this.removeClass('displaying_list').addClass('displaying_tiles');
    $root.removeClass('section_displaying_list');
    Swiper_grid(4, 4, 3, 2, 2, 4);
  }
  function swiperUpdate() {
    $swipers.each(function (index, element) {
      element.swiper.update();
    });
  }
  setTimeout(swiperUpdate, 10);
  setTimeout(switcherContainerHeight, 300);
});

/***/ }),

/***/ "./src/js/components/dropdown.js":
/*!***************************************!*\
  !*** ./src/js/components/dropdown.js ***!
  \***************************************/
/***/ (function() {

$('.dropdown_btn').on('click', function (evt) {
  $(this).parent('.dropdown').toggleClass('open');
});
$(document).on('click', function (evt) {
  if ($(evt.target).closest('.dropdown').length === 0) {
    $('.dropdown').removeClass('open');
  }
});

/***/ }),

/***/ "./src/js/components/filter_modal.js":
/*!*******************************************!*\
  !*** ./src/js/components/filter_modal.js ***!
  \*******************************************/
/***/ (function() {

$('.all-filter').on('click', function (evt) {
  evt.preventDefault();
  var $this = $(this);
  var $drop = $('.search__modal');
  $this.toggleClass('active');
  $drop.slideToggle();
});
$('.search__modal-exit').on('click', function (evt) {
  evt.preventDefault();
  var $all = $('.all-filter');
  var $drop = $('.search__modal');
  $all.toggleClass('active');
  $drop.slideToggle();
});
$('.search__modal-apply').on('click', function (evt) {
  evt.preventDefault();
  var $all = $('.all-filter');
  var $drop = $('.search__modal');
  $all.toggleClass('active');
  $drop.slideToggle();
  $('.filter__tags-wrap').empty();
  $('input[type="checkbox"]:checked').each(function () {
    var $checked = $(this).siblings('span').text();
    $('.filter__tags-wrap').append($("<div class='tag'><span>".concat($checked, "</span></div>")).click(function () {
      $(this).remove();
      if ($('.filter__tags-wrap').children().length == 1) $('.filter__tags-wrap').empty();
    }));
  });
  if ($('.filter__tags-wrap').children().length > 0) {
    $('.filter__tags-wrap').append($("<div class='tag clean-all'><span>\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0432\u0441\u0435</span></div>").click(function () {
      $('.filter__tags-wrap').empty();
    }));
  }
});
$('.search__modal-clean').on('click', function (evt) {
  evt.preventDefault();
  $('.filter__tags-wrap').empty();
  $('input[type="checkbox"]:checked').each(function () {
    $(this).prop("checked", false);
  });
});
$('input[type="range"]').on('input', function () {
  var minBtn = $(this).parent().children('.min');
  var maxBtn = $(this).parent().children('.max');
  var origin = this.className;
  var minVal = parseInt($(minBtn).val());
  var maxVal = parseInt($(maxBtn).val());
  if (origin === 'min' && minVal > maxVal - 1) {
    $(minBtn).val(maxVal - 1);
  }
  minVal = parseInt($(minBtn).val());
  $('.range-number-min').children('span').html(minVal + 'шт');
  if (origin === 'max' && maxVal - 1 < minVal) {
    $(maxBtn).val(1 + minVal);
  }
  maxVal = parseInt($(maxBtn).val());
  $('.range-number-max').children('span').html(maxVal + 'шт');
});

/***/ }),

/***/ "./src/js/components/footer.js":
/*!*************************************!*\
  !*** ./src/js/components/footer.js ***!
  \*************************************/
/***/ (function() {

$('.footer__list').on('click', function (evt) {
  $(this).toggleClass('active');
});

/***/ }),

/***/ "./src/js/components/forms.js":
/*!************************************!*\
  !*** ./src/js/components/forms.js ***!
  \************************************/
/***/ (function() {

$('.form__item input').on('input', function (evt) {
  var $this = $(this);
  var $parent = $this.parent();
  var $placeholder = $parent.find('.placeholder');
  $this.removeClass('invalid');
  if ($this.val()) {
    $placeholder.addClass('active');
  } else {
    $placeholder.removeClass('active');
  }
});
$('.form__item textarea').on('input', function (evt) {
  var $this = $(this);
  var $parent = $this.parent();
  var $placeholder = $parent.find('.placeholder');
  $this.removeClass('invalid');
  if ($this.val()) {
    $placeholder.addClass('active');
  } else {
    $placeholder.removeClass('active');
  }
});
$('.form_validation').on('submit', function (evt) {
  var $this = $(this);
  var $inputs = $this.find('.required');
  $inputs.each(function (index, elem) {
    if ($(elem).val()) {
      $(elem).removeClass('invalid');
    } else {
      $(elem).addClass('invalid');
      evt.preventDefault();
    }
  });
});

/***/ }),

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/js/helpers.js");

function openMenu() {
  return new Promise(function (resolve) {
    $('.js-burger').addClass('is-disabled').attr('disabled', true);
    _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].lockScroll(true, _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$header.find('.header__menu'), 'header');
    _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$header.addClass('is-menu-opened');
    $('.header__menu').removeClass('is-hidden');
    setImmediate(function () {
      _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$body.css('padding-right', "".concat(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].getScrollbarWidth(), "px"));
      _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$header.css('right', "".concat(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].getScrollbarWidth(), "px"));
    });
    setTimeout(function () {
      $('.header__menu').addClass('is-active');
      $('.js-burger').removeClass('is-disabled').attr('disabled', false);
      resolve();
    }, 100);
  });
}
function closeMenu() {
  return new Promise(function (resolve) {
    $('.js-burger').addClass('is-disabled').attr('disabled', true);
    _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].lockScroll(false, _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$header.find('.header__menu'), 'header');
    _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$body.css('padding-right', '');
    _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$header.css('right', '');
    _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$header.removeClass('is-menu-opened');
    $('.header__menu').removeClass('is-active');
    setTimeout(function () {
      $('.header__menu').addClass('is-hidden');
      $('.js-burger').removeClass('is-disabled').attr('disabled', false);
      resolve();
    }, 500);
  });
}
function toggleMenu(event) {
  event.preventDefault();
  event.stopPropagation();
  if ($(event.currentTarget).hasClass('is-active')) {
    $(event.currentTarget).removeClass('is-active');
    closeMenu();
  } else {
    $(event.currentTarget).addClass('is-active');
    openMenu();
  }
}
function init() {
  _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$header = $('.header');
  $('.js-burger').on('click.header', toggleMenu);
  _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$document.on('click.header', function (e) {
    var $container = $('.header__menu');
    if ($container.is(e.target) && $container.has(e.target).length === 0 && $container.hasClass('is-active')) {
      closeMenu();
      $('.js-burger').removeClass('is-active');
    }
  }).on('keyup.header', function (e) {
    if ((e.key === 'Escape' || e.key === 'Esc') && $('.header__menu').hasClass('is-active')) {
      closeMenu();
      $('.js-burger').removeClass('is-active');
    }
  });
}
function destroy() {
  $('.js-burger').off('.header');
  _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$document.off('.header');
}
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  destroy: destroy,
  openMenu: openMenu,
  closeMenu: closeMenu
});

/***/ }),

/***/ "./src/js/components/header_mobile.js":
/*!********************************************!*\
  !*** ./src/js/components/header_mobile.js ***!
  \********************************************/
/***/ (function() {

$('.hamburger').on('click', function (evt) {
  evt.preventDefault();
  var $this = $(this);
  var $header = $('.header');
  var $drop = $('.header__bottom-mobile');
  $this.toggleClass('active');
  $header.toggleClass('active');
  $drop.slideToggle();
  $('li[class="active"]').each(function () {
    $(this).toggleClass('active');
    $(this).children('.drop').slideToggle();
  });
});
$('.drop__back').on('click', function (evt) {
  evt.preventDefault();
  var $this = $(this);
  var $this_drop = $this.parent().parent();
  var $this_main = $this.parent().parent().parent();
  $this_main.toggleClass('active');
  $this_drop.slideToggle();
});
$('.search_open-mobile, .search_close-mobile').on('click', function (evt) {
  evt.preventDefault();
  var $this = $(this);
  var $header = $this.closest('.header');
  var $search_wrap = $header.find('.search_wrap-mobile');
  $search_wrap.slideToggle();
});

/***/ }),

/***/ "./src/js/components/jquery.nice-select.js":
/*!*************************************************!*\
  !*** ./src/js/components/jquery.nice-select.js ***!
  \*************************************************/
/***/ (function() {

/*  jQuery Nice Select - v1.1.0
	https://github.com/hernansartorio/jquery-nice-select
	Made by Hernán Sartorio  */

(function ($) {
  $.fn.niceSelect = function (method) {
    // Methods
    if (typeof method == 'string') {
      if (method == 'update') {
        this.each(function () {
          var $select = $(this);
          var $dropdown = $(this).next('.nice-select');
          var open = $dropdown.hasClass('open');
          if ($dropdown.length) {
            $dropdown.remove();
            create_nice_select($select);
            if (open) {
              $select.next().trigger('click');
            }
          }
        });
      } else if (method == 'destroy') {
        this.each(function () {
          var $select = $(this);
          var $dropdown = $(this).next('.nice-select');
          if ($dropdown.length) {
            $dropdown.remove();
            $select.css('display', '');
          }
        });
        if ($('.nice-select').length == 0) {
          $(document).off('.nice_select');
        }
      } else {
        console.log('Method "' + method + '" does not exist.');
      }
      return this;
    }

    // Hide native select
    this.hide();

    // Create custom markup
    this.each(function () {
      var $select = $(this);
      if (!$select.next().hasClass('nice-select')) {
        create_nice_select($select);
      }
    });
    function create_nice_select($select) {
      $select.after($('<div></div>').addClass('nice-select').addClass($select.attr('class') || '').addClass($select.attr('disabled') ? 'disabled' : '').addClass($select.attr('multiple') ? 'has-multiple' : '').attr('tabindex', $select.attr('disabled') ? null : '0').html($select.attr('multiple') ? '<span class="multiple-options"></span><div class="nice-select-search-box"><input type="text" class="nice-select-search" placeholder="Поиск"/></div><ul class="list"></ul>' : '<span class="current"></span><div class="nice-select-search-box"><input type="text" class="nice-select-search" placeholder="Поиск"/></div><ul class="list"></ul>'));
      var $dropdown = $select.next();
      var $options = $select.find('option');
      if ($select.attr('multiple')) {
        var $selected = $select.find('option:selected');
        var $selected_html = '';
        $selected.each(function () {
          $selected_option = $(this);
          $selected_text = $selected_option.data('display') || $selected_option.text();
          if (!$selected_option.val()) {
            return;
          }
          $selected_html += '<span class="current">' + $selected_text + '</span>';
        });
        $select_placeholder = $select.data('js-placeholder') || $select.attr('js-placeholder');
        $select_placeholder = !$select_placeholder ? 'Select' : $select_placeholder;
        console.log($select_placeholder);
        $selected_html = $selected_html === '' ? $select_placeholder : $selected_html;
        $dropdown.find('.multiple-options').html($selected_html);
      } else {
        var $selected = $select.find('option:selected');
        $dropdown.find('.current').html($selected.data('display') || $selected.text());
      }
      $options.each(function (i) {
        var $option = $(this);
        var display = $option.data('display');
        $dropdown.find('ul').append($('<li></li>').attr('data-value', $option.val()).attr('data-display', display || null).addClass('option' + ($option.is(':selected') ? ' selected' : '') + ($option.is(':disabled') ? ' disabled' : '')).html($option.text()));
      });
    }

    /* Event listeners */

    // Unbind existing events in case that the plugin has been initialized before
    $(document).off('.nice_select');

    // Open/close
    $(document).on('click.nice_select', '.nice-select', function (event) {
      var $dropdown = $(this);
      $('.nice-select').not($dropdown).removeClass('open');
      $dropdown.toggleClass('open');
      if ($dropdown.hasClass('open')) {
        $dropdown.find('.option');
        $dropdown.find('.nice-select-search').val('');
        $dropdown.find('.nice-select-search').focus();
        $dropdown.find('.focus').removeClass('focus');
        $dropdown.find('.selected').addClass('focus');
        $dropdown.find('ul li').show();
      } else {
        $dropdown.focus();
      }
    });
    $(document).on('click', '.nice-select-search-box', function (event) {
      event.stopPropagation();
      return false;
    });
    $(document).on('keyup.nice-select-search', '.nice-select', function () {
      var $self = $(this);
      var $text = $self.find('.nice-select-search').val();
      var $options = $self.find('ul li');
      if ($text == '') $options.show();else if ($self.hasClass('open')) {
        $text = $text.toLowerCase();
        var $matchReg = new RegExp($text);
        if (0 < $options.length) {
          $options.each(function () {
            var $this = $(this);
            var $optionText = $this.text().toLowerCase();
            var $matchCheck = $matchReg.test($optionText);
            $matchCheck ? $this.show() : $this.hide();
          });
        } else {
          $options.show();
        }
      }
      $self.find('.option'), $self.find('.focus').removeClass('focus'), $self.find('.selected').addClass('focus');
    });

    // Close when clicking outside
    $(document).on('click.nice_select', function (event) {
      if ($(event.target).closest('.nice-select').length === 0) {
        $('.nice-select').removeClass('open').find('.option');
      }
    });

    // Option click
    $(document).on('click.nice_select', '.nice-select .option:not(.disabled)', function (event) {
      var $option = $(this);
      var $dropdown = $option.closest('.nice-select');
      if ($dropdown.hasClass('has-multiple')) {
        console.log('clicked', $option);
        if ($option.hasClass('selected')) {
          $option.removeClass('selected');
        } else {
          $option.addClass('selected');
        }
        $selected_html = '';
        $selected_values = [];
        $dropdown.find('.selected').each(function () {
          $selected_option = $(this);
          var text = $selected_option.data('display') || $selected_option.text();
          $selected_html += '<span class="current">' + text + '</span>';
          $selected_values.push($selected_option.data('value'));
        });
        $select_placeholder = $dropdown.prev('select').data('js-placeholder') || $dropdown.prev('select').attr('js-placeholder');
        console.log($dropdown.prev('select'));
        $select_placeholder = !$select_placeholder ? 'Select' : $select_placeholder;
        $selected_html = $selected_html === '' ? $select_placeholder : $selected_html;
        $dropdown.find('.multiple-options').html($selected_html);
        $dropdown.prev('select').val($selected_values).trigger('change');
      } else {
        $dropdown.find('.selected').removeClass('selected');
        $option.addClass('selected');
        var text = $option.data('display') || $option.text();
        $dropdown.find('.current').text(text);
        $dropdown.prev('select').val($option.data('value')).trigger('change');
      }
    });

    // Keyboard events
    $(document).on('keydown.nice_select', '.nice-select', function (event) {
      var $dropdown = $(this);
      var $focused_option = $($dropdown.find('.focus') || $dropdown.find('.list .option.selected'));

      // Space or Enter
      if (event.keyCode == 32 || event.keyCode == 13) {
        if ($dropdown.hasClass('open')) {
          $focused_option.trigger('click');
        } else {
          $dropdown.trigger('click');
        }
        return false;
        // Down
      } else if (event.keyCode == 40) {
        if (!$dropdown.hasClass('open')) {
          $dropdown.trigger('click');
        } else {
          var $next = $focused_option.nextAll('.option:not(.disabled)').first();
          if ($next.length > 0) {
            $dropdown.find('.focus').removeClass('focus');
            $next.addClass('focus');
          }
        }
        return false;
        // Up
      } else if (event.keyCode == 38) {
        if (!$dropdown.hasClass('open')) {
          $dropdown.trigger('click');
        } else {
          var $prev = $focused_option.prevAll('.option:not(.disabled)').first();
          if ($prev.length > 0) {
            $dropdown.find('.focus').removeClass('focus');
            $prev.addClass('focus');
          }
        }
        return false;
        // Esc
      } else if (event.keyCode == 27) {
        if ($dropdown.hasClass('open')) {
          $dropdown.trigger('click');
        }
        // Tab
      } else if (event.keyCode == 9) {
        if ($dropdown.hasClass('open')) {
          return false;
        }
      }
    });

    // Detect CSS pointer-events support, for IE <= 10. From Modernizr.
    var style = document.createElement('a').style;
    style.cssText = 'pointer-events:auto';
    if (style.pointerEvents !== 'auto') {
      $('html').addClass('no-csspointerevents');
    }
    return this;
  };
})(jQuery);

/***/ }),

/***/ "./src/js/components/modal_experts.js":
/*!********************************************!*\
  !*** ./src/js/components/modal_experts.js ***!
  \********************************************/
/***/ (function() {

$('.company-experts__add, .company-experts__close').on('click', function (evt) {
  evt.preventDefault();
  $('main').toggleClass('modal');
  $('html').toggleClass('modal');
  $('.company-experts__modal').toggleClass('active');
  $('.company-experts__modal-container').slideToggle();
});

/***/ }),

/***/ "./src/js/components/navigation.js":
/*!*****************************************!*\
  !*** ./src/js/components/navigation.js ***!
  \*****************************************/
/***/ (function() {

$('.drop_btn').on('click', function (evt) {
  evt.preventDefault();
  var $this = $(this); // .drop_btn
  var $this_parent = $this.parent(); // .nav__item
  var $this_drop = $this.siblings('.drop'); // .drop_btn + .drop

  var $this_parent_siblings = $this_parent.siblings('.nav__item'); // .nav__item all
  var $this_siblings_drop = $this_parent_siblings.children('.drop'); // other .drops

  $this_parent_siblings.removeClass('active');
  $this_parent.toggleClass('active');
  $this_siblings_drop.slideUp();
  $this_drop.slideToggle();
});

/***/ }),

/***/ "./src/js/components/search-header.js":
/*!********************************************!*\
  !*** ./src/js/components/search-header.js ***!
  \********************************************/
/***/ (function() {

$('.head-search-input').on('input', function (evt) {
  var $this = $(this);
  var $section = $this.closest('.head-search');
  var $search = $section.find('.head-search-help');
  $(this).val() ? $search.addClass('active') : $search.removeClass('active');
});
$('.head-search-input-mobile').on('input', function (evt) {
  if ($(this).val()) {
    $('.search__by-word').addClass('active');
    $('.search__wait').addClass('active');
  } else {
    $('.search__by-word').removeClass('active');
    $('.search__wait').removeClass('active');
  }
});

/***/ }),

/***/ "./src/js/components/search.js":
/*!*************************************!*\
  !*** ./src/js/components/search.js ***!
  \*************************************/
/***/ (function() {

$('.search_open, .search_close').on('click', function (evt) {
  evt.preventDefault();
  var $this = $(this);
  var $header = $this.closest('.header');
  var $search_wrap = $header.find('.search_wrap');
  $('.header-blur').toggleClass('active');
  $search_wrap.slideToggle();
});
$('.search__category-btn').on('click', function (evt) {
  evt.preventDefault();
  var $this = $(this);
  var $header = $this.closest('.header');
  var $search_container = $header.find('.search__category-container');
  var $search_wrapper = $header.find('.search__category-wrapper');
  $search_wrapper.toggleClass('active');
  $this.toggleClass('active');
  $search_container.slideToggle();
});
$('.search__category-wrapper').on('click', function (evt) {
  evt.preventDefault();
  if ($(evt.target).hasClass('search__category-wrapper')) {
    var $this = $(this);
    var $header = $this.closest('.header');
    var $search_btn = $header.find('.search__category-btn');
    var $search_container = $header.find('.search__category-container');
    var $search_wrapper = $header.find('.search__category-wrapper');
    $search_wrapper.toggleClass('active');
    $search_btn.toggleClass('active');
    $search_container.slideToggle();
  }
});

// baner
$('.banner__input').on('input', function (evt) {
  $(this).val() ? $('.baner-search').addClass('active') : $('.baner-search').removeClass('active');
});

/***/ }),

/***/ "./src/js/components/social.js":
/*!*************************************!*\
  !*** ./src/js/components/social.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ninelines_sharing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ninelines-sharing */ "./node_modules/ninelines-sharing/dist/ninelines-sharing.js");
/* harmony import */ var ninelines_sharing__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ninelines_sharing__WEBPACK_IMPORTED_MODULE_0__);

if (document.querySelector('[data-social]')) {
  var list = document.querySelectorAll('[data-social]');
  Array.prototype.forEach.call(list, function (item) {
    item.addEventListener('click', function (e) {
      var social = e.currentTarget.dataset.social;
      var url = location.origin + location.pathname;
      (ninelines_sharing__WEBPACK_IMPORTED_MODULE_0___default())[social](url);
    });
  });
}

/***/ }),

/***/ "./src/js/components/swiper_experts.js":
/*!*********************************************!*\
  !*** ./src/js/components/swiper_experts.js ***!
  \*********************************************/
/***/ (function() {

var swiper_my_orders = new Swiper('.swiper_experts', {
  modules: [Navigation, Pagination, Grid],
  speed: 1000,
  grid: {
    rows: 2,
    fill: 'column'
  },
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    769: {
      grid: {
        rows: 4,
        fill: 'column'
      }
    }
  }
});

/***/ }),

/***/ "./src/js/components/swiper_grid.js":
/*!******************************************!*\
  !*** ./src/js/components/swiper_grid.js ***!
  \******************************************/
/***/ (function() {

window.Swiper_grid = function (slidesPerView, slidesPerGroup, rows, slidesPerViewM, slidesPerGroupM, rowsM) {
  var swiper_grid = new Swiper('.swiper_grid', {
    modules: [Navigation, Pagination, Grid],
    slidesPerView: slidesPerViewM,
    slidesPerGroup: slidesPerGroupM,
    grid: {
      rows: rowsM,
      fill: 'row'
    },
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      769: {
        slidesPerView: slidesPerView,
        slidesPerGroup: slidesPerGroup,
        grid: {
          rows: rows,
          fill: 'row'
        },
        speed: 1000
      }
    }
  });
};
Swiper_grid(4, 4, 3, 2, 2, 4);

/***/ }),

/***/ "./src/js/components/swiper_materials.js":
/*!***********************************************!*\
  !*** ./src/js/components/swiper_materials.js ***!
  \***********************************************/
/***/ (function() {

var SLIDES_GAP = 28;
var CONTAINER_WIDTH = 1520;
var swiper_materials_1 = new Swiper('.swiper_materials_1', {
  modules: [Navigation, Pagination],
  slidesPerView: 2,
  slidesPerGroup: 2,
  speed: 1000,
  spaceBetween: SLIDES_GAP / CONTAINER_WIDTH * 100 + '%',
  pagination: {
    el: ".swiper-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
var swiper_materials_2 = new Swiper('.swiper_materials_2', {
  modules: [Navigation, Pagination],
  slidesPerView: 2,
  slidesPerGroup: 2,
  speed: 1000,
  spaceBetween: SLIDES_GAP / CONTAINER_WIDTH * 100 + '%',
  pagination: {
    el: ".swiper-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
var swiper_materials_mobile_1 = new Swiper('.swiper_materials_mobile_1', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  slidesPerGroup: 1,
  speed: 1000,
  spaceBetween: SLIDES_GAP / CONTAINER_WIDTH * 800 + '%',
  pagination: {
    el: ".swiper-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
var swiper_materials_mobile_2 = new Swiper('.swiper_materials_mobile_2', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  slidesPerGroup: 1,
  speed: 1000,
  spaceBetween: SLIDES_GAP / CONTAINER_WIDTH * 800 + '%',
  pagination: {
    el: ".swiper-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

/***/ }),

/***/ "./src/js/components/swiper_my_orders.js":
/*!***********************************************!*\
  !*** ./src/js/components/swiper_my_orders.js ***!
  \***********************************************/
/***/ (function() {

var swiper_my_orders = new Swiper('.swiper_my_orders', {
  modules: [Navigation, Pagination, Grid],
  speed: 1000,
  grid: {
    rows: 4,
    fill: 'column'
  },
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

/***/ }),

/***/ "./src/js/components/swiper_news.js":
/*!******************************************!*\
  !*** ./src/js/components/swiper_news.js ***!
  \******************************************/
/***/ (function() {

var SLIDES_GAP = 28;
var CONTAINER_WIDTH = 1004;
var swiper_news = new Swiper('.swiper_news', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  speed: 1000,
  spaceBetween: SLIDES_GAP / CONTAINER_WIDTH * 200 + '%',
  pagination: {
    el: ".swiper-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    769: {
      slidesPerView: 4,
      spaceBetween: SLIDES_GAP / CONTAINER_WIDTH * 100 + '%',
      speed: 1000
    }
  }
});

/***/ }),

/***/ "./src/js/components/swiper_products_category.js":
/*!*******************************************************!*\
  !*** ./src/js/components/swiper_products_category.js ***!
  \*******************************************************/
/***/ (function() {

var swiper_grid = new Swiper('.swiper_products-category', {
  modules: [Navigation, Pagination, Grid],
  slidesPerView: 1,
  slidesPerGroup: 1,
  grid: {
    rows: 6,
    fill: 'row'
  },
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    769: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      grid: {
        rows: 3,
        fill: 'row'
      },
      speed: 1000
    }
  }
});

/***/ }),

/***/ "./src/js/components/swiper_sample_request.js":
/*!****************************************************!*\
  !*** ./src/js/components/swiper_sample_request.js ***!
  \****************************************************/
/***/ (function() {

var swiper_my_orders = new Swiper('.swiper_sample_request', {
  modules: [Navigation, Pagination, Grid],
  speed: 1000,
  grid: {
    rows: 4,
    fill: 'column'
  },
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

// $('.my_sample_request .switcher__btn').on('click', function(evt) {
// 	evt.preventDefault();
// 	console.log(123)

// 	let $this = $(this);
// 	let $section = $this.closest('.section');
// 	let $messages = $section.find('.swiper_shadow');
// 	switch($this.attr('class').split(' ')[2]) {
// 		case 'all_btn':
// 			$messages.removeClass();
// 			break;
// 		case 'new_btn':
// 			$messages.removeClass();
// 			$messages.addClass('new_only');
// 			break;
// 		case 'delivered_btn':
// 			$messages.removeClass();
// 			$messages.addClass('delivered_only');
// 			break;
// 		case 'denied_btn':
// 			$messages.removeClass();
// 			$messages.addClass('denied_only');
// 			break;
// 	}
// 	$messages.addClass('swiper_shadow');
// 	// if ($this.hasClass('new_btn')) {
// 	// 	$messages.addClass('new_only');
// 	// } else {
// 	// 	$messages.removeClass('new_only');
// 	// }
// 	swiper_my_orders.update()
// });

/***/ }),

/***/ "./src/js/components/swiper_solutions.js":
/*!***********************************************!*\
  !*** ./src/js/components/swiper_solutions.js ***!
  \***********************************************/
/***/ (function() {

var SLIDES_GAP = 29;
var CONTAINER_WIDTH = 1520;
var swiper_solutions = new Swiper('.swiper_solutions', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  slidesPerGroup: 1,
  speed: 1000,
  spaceBetween: SLIDES_GAP / CONTAINER_WIDTH * 500 + '%',
  pagination: {
    el: ".swiper-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    769: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: SLIDES_GAP / CONTAINER_WIDTH * 100 + '%',
      speed: 1500
    }
  }
});

/***/ }),

/***/ "./src/js/components/swiper_vendors.js":
/*!*********************************************!*\
  !*** ./src/js/components/swiper_vendors.js ***!
  \*********************************************/
/***/ (function() {

var SLIDES_GAP = 28;
var CONTAINER_WIDTH = 1520;
var swiper_vendors = new Swiper('.swiper_vendors', {
  modules: [Navigation, Pagination, Grid],
  slidesPerView: 2,
  slidesPerGroup: 2,
  speed: 1000,
  grid: {
    rows: 2,
    fill: 'row'
  },
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    769: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      grid: {
        rows: 1,
        fill: 'row'
      },
      spaceBetween: SLIDES_GAP / CONTAINER_WIDTH * 100 + '%',
      speed: 1500
    }
  }
});

/***/ }),

/***/ "./src/js/components/switcher.js":
/*!***************************************!*\
  !*** ./src/js/components/switcher.js ***!
  \***************************************/
/***/ (function() {

var $switcher_btns = $('.switcher__btn');
var $switcher__containers = $('.switcher__container');
window.switcherContainerHeight = function () {
  $('.switcher__container').each(function (index, elem) {
    console.log($(elem).find('.switcher__content.active').outerHeight());
    console.log($(elem).find('.switcher__content.active').innerHeight());
    var number = 1920 / window.outerWidth;
    if (window.outerWidth <= 768) number = 375 / window.outerWidth;
    var switcher_content_height = $(elem).find('.switcher__content.active').outerHeight() * number;
    $(elem).css('height', "".concat(switcher_content_height, "rem"));
  });
};
switcherContainerHeight();
if ($switcher_btns.length > 0) {
  $switcher_btns.on('click', function (evt) {
    evt.preventDefault();
    var $this = $(this);
    var index = $this.index();
    var $switcher = $this.closest('.switcher');
    var $switcher_container = $switcher.find('.switcher__container');
    var $switcher_contents = $switcher_container.find('.switcher__content');
    var number = 1920 / window.outerWidth;
    if (window.outerWidth <= 768) number = 375 / window.outerWidth;
    var switcher_content_height = $($switcher_contents[index]).outerHeight() * number;
    $this.siblings('.switcher__btn').removeClass('active');
    $this.addClass('active');
    $switcher_contents.each(function (index, elem) {
      $(elem).removeClass('active');
      var $invalid_inputs = $(elem).find('.invalid');
      if ($invalid_inputs.length) {
        $invalid_inputs.each(function (index, elem) {
          $(elem).removeClass('invalid');
        });
      }
    });
    $($switcher_contents[index]).addClass('active');
    $switcher_container.css('height', "".concat(switcher_content_height, "rem"));
    var $swiper_update = $this.closest('.section').find('.swiper');
    if ($swiper_update.length[index]) {
      $swiper_update[index].swiper.slideTo(0, 0, false);
    }
  });
}
document.querySelectorAll('.drop-zone__input').forEach(function (inputElement) {
  var dropZoneElement = inputElement.closest('.drop-zone');
  dropZoneElement.addEventListener('click', function (e) {
    inputElement.click();
  });
  inputElement.addEventListener('change', function (e) {
    if (inputElement.files.length) {
      updateProgress(dropZoneElement, inputElement.files);
    }
  });
  dropZoneElement.addEventListener('dragover', function (e) {
    e.preventDefault();
    dropZoneElement.classList.add('drop-zone--over');
  });
  ['dragleave', 'dragend'].forEach(function (type) {
    dropZoneElement.addEventListener(type, function (e) {
      dropZoneElement.classList.remove('drop-zone--over');
    });
  });
  dropZoneElement.addEventListener('drop', function (e) {
    e.preventDefault();
    if (e.dataTransfer.files.length) {
      inputElement.files = e.dataTransfer.files;
      updateProgress(dropZoneElement, e.dataTransfer.files);
    }
    dropZoneElement.classList.remove('drop-zone--over');
  });
});
function updateProgress(dropZoneElement, files) {
  var progressElements = dropZoneElement.nextElementSibling;

  // First time - remove the prompt
  if (progressElements) {
    progressElements.remove();
  }
  progressElements = document.createElement('div');
  progressElements.classList.add('progress_elements');
  dropZoneElement.after(progressElements);
  var progressElement = document.createElement('div');
  progressElement.classList.add('file__progress');
  var fileNameElement = document.createElement('div');
  fileNameElement.classList.add('file__name');
  fileNameElement.innerHTML = files[0].name;
  var fileWeightElement = document.createElement('div');
  fileWeightElement.classList.add('file__weight');
  fileWeightElement.innerHTML = Math.trunc(files[0].size / 1024) + ' kb';
  var fileIconElement = document.createElement('div');
  fileIconElement.classList.add('file__icon');
  progressElement.append(fileNameElement, fileWeightElement, fileIconElement);
  progressElements.appendChild(progressElement);

  // files.forEach((elem) => {
  // 	let progressElement = document.createElement('div');
  // 	progressElement.classList.add('file__progress');

  // 	let fileNameElement = document.createElement('div');
  // 	fileNameElement.classList.add('file__name');
  // 	fileNameElement.innerHTML = elem.name;

  // 	let fileWeightElement = document.createElement('div');
  // 	fileWeightElement.classList.add('file__weight');
  // 	fileWeightElement.innerHTML = Math.trunc(elem.size / 1024) + ' kb';

  // 	let fileIconElement = document.createElement('div');
  // 	fileIconElement.classList.add('file__icon');

  // 	progressElement.append(fileNameElement, fileWeightElement, fileIconElement);
  // 	progressElements.appendChild(progressElement);

  // });

  switcherContainerHeight();
}
$('.section_messages .switcher__btn').on('click', function (evt) {
  evt.preventDefault();
  var $this = $(this);
  var $section = $this.closest('.section');
  var $messages = $section.find('.messages');
  if ($this.hasClass('all_messages')) {
    $messages.removeClass('unread_only');
  } else {
    $messages.addClass('unread_only');
  }
});

/***/ }),

/***/ "./src/js/components/tags.js":
/*!***********************************!*\
  !*** ./src/js/components/tags.js ***!
  \***********************************/
/***/ (function() {

$('.tags__top').on('click', function (evt) {
  evt.preventDefault();
  var $this = $(this);
  var $tags = $this.closest('.tags');
  var $tags_bottom = $tags.find('.tags__bottom');
  $this.toggleClass('active');
  $tags_bottom.slideToggle();
});
$('.tags').each(function (index, elem) {
  var $this = $(elem);
  var total_tags = $this.find('.tag').length;
  var $total_tags = $this.find('.total_tags');
  $total_tags.text(total_tags);
});
$('.tag input').on('change', function (evt) {
  var $this = $(this);
  var $tags = $this.closest('.tags');
  var $checked_tags = $tags.find('.checked_tags');
  var checked_tags = $tags.find('input:checked').length;
  $checked_tags.text(checked_tags);
});

/***/ }),

/***/ "./src/js/helpers.js":
/*!***************************!*\
  !*** ./src/js/helpers.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! body-scroll-lock */ "./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js");

var vars = {};
vars.$document = $(document);
vars.$window = $(window);
vars.$body = $(document.body);
vars.$html = $(document.documentElement);
vars.isMobile = function () {
  return innerWidth <= 1024;
};
vars.isIE = function () {
  return vars.$html.hasClass('is-browser-ie');
};
vars.isIOS = function () {
  return vars.$html.hasClass('is-os-ios');
};
vars.winWidth = window.innerWidth;

/**
* Очистить текст от спецсимволов
* @param {string} text Обязательное, строка для очистки
* @returns {string} Очищенная строка
*/
vars.clearText = function (text) {
  return text.trim().replace(/\s+/g, ' ');
};

/**
* Создать куки запись
* @param {string} name Обязательное, название записи
* @param {string} value Обязательное, значение записи
* @param {string} days Обязательное, время для жизни
*/
vars.setCookie = function (name, value, days) {
  var expires = '';
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=".concat(date.toUTCString());
  }
  document.cookie = "".concat(name, "=").concat(value || '').concat(expires, "; path=/");
};

/**
* Получить куки запись
* @param {string} name Обязательное, название записи
*/
vars.getCookie = function (name) {
  var nameEQ = "".concat(name, "=");
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return null;
};

/**
* Удалить куки запись
* @param {string} name Обязательное, название записи
*/
vars.eraseCookie = function (name) {
  document.cookie = "".concat(name, "=; Max-Age=-99999999;");
};
var dataScrollLocks;
/**
* Блокирует скролл страницы
* Необходим для использования модальных окон
* @param {boolean} state Обязательное
* @param {string} element Обязательное, элемент которому нужно разрешить скролл
* @param {string} name Необязательное, ключ,
* чтобы была возможность открывать окно поверх другого окна
*/
vars.lockScroll = function (state, $element, name) {
  var element = $element.get(0) ? $element.get(0) : $element;
  if (typeof dataScrollLocks === 'undefined') {
    dataScrollLocks = new Set();
  }
  var scrollLocks = dataScrollLocks;
  if (state) {
    if (typeof name === 'string') {
      scrollLocks.add(name);
    }
    body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__.disableBodyScroll(element, {
      reserveScrollBarGap: true
    });
    setImmediate(function () {
      vars.$html.addClass('is-lock-scroll');
    });
  } else {
    if (typeof name === 'string') {
      scrollLocks["delete"](name);
    }
    body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__.enableBodyScroll(element);
    if (!scrollLocks.size) {
      body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__.clearAllBodyScrollLocks();
      vars.$html.removeClass('is-lock-scroll');
    }
  }
};

/**
* Скролл до элемента
* @param {string} $container Обязательное, элемент к которому нужно скроллить
* @param {string|number} time Необязательное, время скролла
* @param {string|number} offset Необязательное, смещение скролла может быть + или -
*/
vars.scrollTo = function ($container) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  vars.$html.css('scroll-behavior', 'initial');
  $('html, body').stop().animate({
    scrollTop: "".concat($container.offset().top + parseInt(offset, 10))
  }, parseInt(time, 10));
  setTimeout(function () {
    vars.$html.css('scroll-behavior', '');
  }, parseInt(time, 10) + 100);
};
var scrollDiv;

/**
* Получить размер скроллбара если он есть
* @returns {number} размер скроллбара
*/
vars.getScrollbarWidth = function () {
  var width = window.innerWidth - vars.$html.get(0).clientWidth;
  if (width || document.documentElement.clientHeight >= document.documentElement.offsetHeight) {
    return width;
  }

  // Document doesn't have a scrollbar, possibly because there is not enough content so browser doesn't show it
  if (!scrollDiv) {
    scrollDiv = document.createElement('div');
    scrollDiv.style.cssText = 'width:100px;height:100px;overflow:scroll !important;position:absolute;top:-9999px';
    document.body.appendChild(scrollDiv);
  }
  return scrollDiv.offsetWidth - scrollDiv.clientWidth;
};

/**
* Узнать есть доступен ли ховер
* @returns {boolean}
*/
function hasHoverSupport() {
  var hoverSupport;
  if (vars.isIE && vars.getScrollbarWidth()) {
    // On touch devices scrollbar width is usually 0
    hoverSupport = true;
  } else if (vars.isMobile()) {
    hoverSupport = false;
  } else if (window.matchMedia('(any-hover: hover)').matches || window.matchMedia('(hover: hover)').matches) {
    hoverSupport = true;
  } else if (window.matchMedia('(hover: none)').matches) {
    hoverSupport = false;
  } else {
    hoverSupport = typeof vars.$html.ontouchstart === 'undefined';
  }
  return hoverSupport;
}
if (!hasHoverSupport()) {
  vars.$html.removeClass('has-hover').addClass('no-hover');
} else {
  vars.$html.removeClass('no-hover').addClass('has-hover');
}

/**
* Переопределение доступности ховера
*/
function resize() {
  setTimeout(function () {
    if (vars.winWidth !== window.innerWidth) {
      if (!hasHoverSupport()) {
        vars.$html.removeClass('has-hover').addClass('no-hover');
      } else {
        vars.$html.removeClass('no-hover').addClass('has-hover');
      }
      vars.winWidth = window.innerWidth;
    }
  }, 300);
}
vars.$window.on('resize', resize);
/* harmony default export */ __webpack_exports__["default"] = (vars);

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/js/helpers.js");
/* harmony import */ var _components_social__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/social */ "./src/js/components/social.js");
/* harmony import */ var _vendor_ie_fix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vendor/ie-fix */ "./src/js/vendor/ie-fix.js");
/* harmony import */ var _vendor_vh_fix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vendor/vh-fix */ "./src/js/vendor/vh-fix.js");
/* harmony import */ var _modules_actualYear__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/actualYear */ "./src/js/modules/actualYear.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header */ "./src/js/components/header.js");
/* harmony import */ var _modules_lazyLoading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/lazyLoading */ "./src/js/modules/lazyLoading.js");
/* harmony import */ var _modules_scrollToAnchor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/scrollToAnchor */ "./src/js/modules/scrollToAnchor.js");
/* harmony import */ var _components_jquery_nice_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/jquery.nice-select */ "./src/js/components/jquery.nice-select.js");
/* harmony import */ var _components_jquery_nice_select__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_jquery_nice_select__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_search_header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/search-header */ "./src/js/components/search-header.js");
/* harmony import */ var _components_search_header__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_search_header__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/footer */ "./src/js/components/footer.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_components_footer__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_swiper_materials__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/swiper_materials */ "./src/js/components/swiper_materials.js");
/* harmony import */ var _components_swiper_materials__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_components_swiper_materials__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_swiper_solutions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/swiper_solutions */ "./src/js/components/swiper_solutions.js");
/* harmony import */ var _components_swiper_solutions__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_components_swiper_solutions__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_swiper_vendors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/swiper_vendors */ "./src/js/components/swiper_vendors.js");
/* harmony import */ var _components_swiper_vendors__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_components_swiper_vendors__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_swiper_news__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/swiper_news */ "./src/js/components/swiper_news.js");
/* harmony import */ var _components_swiper_news__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_components_swiper_news__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_swiper_my_orders__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/swiper_my_orders */ "./src/js/components/swiper_my_orders.js");
/* harmony import */ var _components_swiper_my_orders__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_components_swiper_my_orders__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_swiper_products_category__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/swiper_products_category */ "./src/js/components/swiper_products_category.js");
/* harmony import */ var _components_swiper_products_category__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_components_swiper_products_category__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _components_swiper_grid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/swiper_grid */ "./src/js/components/swiper_grid.js");
/* harmony import */ var _components_swiper_grid__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_components_swiper_grid__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/navigation */ "./src/js/components/navigation.js");
/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_components_navigation__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _components_switcher__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/switcher */ "./src/js/components/switcher.js");
/* harmony import */ var _components_switcher__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_components_switcher__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _components_displaying__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/displaying */ "./src/js/components/displaying.js");
/* harmony import */ var _components_displaying__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_components_displaying__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/dropdown */ "./src/js/components/dropdown.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_components_dropdown__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _components_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/forms */ "./src/js/components/forms.js");
/* harmony import */ var _components_forms__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_components_forms__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _components_cabinet__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/cabinet */ "./src/js/components/cabinet.js");
/* harmony import */ var _components_cabinet__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_components_cabinet__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _components_tags__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/tags */ "./src/js/components/tags.js");
/* harmony import */ var _components_tags__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_components_tags__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/search */ "./src/js/components/search.js");
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_components_search__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _components_filter_modal__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/filter_modal */ "./src/js/components/filter_modal.js");
/* harmony import */ var _components_filter_modal__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_components_filter_modal__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _components_swiper_experts__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/swiper_experts */ "./src/js/components/swiper_experts.js");
/* harmony import */ var _components_swiper_experts__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_components_swiper_experts__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _components_header_mobile__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/header_mobile */ "./src/js/components/header_mobile.js");
/* harmony import */ var _components_header_mobile__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_components_header_mobile__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _components_modal_experts__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/modal_experts */ "./src/js/components/modal_experts.js");
/* harmony import */ var _components_modal_experts__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_components_modal_experts__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _components_swiper_sample_request__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/swiper_sample_request */ "./src/js/components/swiper_sample_request.js");
/* harmony import */ var _components_swiper_sample_request__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_components_swiper_sample_request__WEBPACK_IMPORTED_MODULE_31__);
































$('select').niceSelect();
(0,_vendor_ie_fix__WEBPACK_IMPORTED_MODULE_3__.ieFix)();
(0,_vendor_vh_fix__WEBPACK_IMPORTED_MODULE_4__.vhFix)();
(0,_modules_actualYear__WEBPACK_IMPORTED_MODULE_5__.actualYear)();
_modules_scrollToAnchor__WEBPACK_IMPORTED_MODULE_8__["default"].init();
_components_header__WEBPACK_IMPORTED_MODULE_6__["default"].init();
_modules_lazyLoading__WEBPACK_IMPORTED_MODULE_7__["default"].init();

/***/ }),

/***/ "./src/js/modules/actualYear.js":
/*!**************************************!*\
  !*** ./src/js/modules/actualYear.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   actualYear: function() { return /* binding */ actualYear; }
/* harmony export */ });
/**
* Модуль "Актуальный год"
*/
var actualYear = function actualYear() {
  var year = new Date().getFullYear();
  if (document.querySelector('[data-actual-year]')) {
    document.querySelector('[data-actual-year]').textContent = year;
  }
};

/***/ }),

/***/ "./src/js/modules/lazyLoading.js":
/*!***************************************!*\
  !*** ./src/js/modules/lazyLoading.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lozad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lozad */ "./node_modules/lozad/dist/lozad.min.js");
/* harmony import */ var lozad__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lozad__WEBPACK_IMPORTED_MODULE_0__);

var observer;

/**
* Модуль "Отложенная загрузка изображений"
* https://github.com/ApoorvSaxena/lozad.js
*/
var init = function init() {
  observer = lozad__WEBPACK_IMPORTED_MODULE_0___default()('.js-lazy', {
    rootMargin: '10px 0px',
    // syntax similar to that of CSS Margin
    threshold: 0.1,
    // ratio of element convergence
    enableAutoReload: true,
    // it will reload the new image when validating attributes changes
    loaded: function loaded(el) {
      el.classList.add('is-loaded');
    }
  });
  observer.observe();
};

/**
* Тригер для загрузки изображений до того, как оно появится в наблюдателе области просмотра
* @param {string} img Обязательное, элемент img
*/
var trigger = function trigger(img) {
  observer.triggerLoad(img);
};
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  trigger: trigger
});

/***/ }),

/***/ "./src/js/modules/scrollToAnchor.js":
/*!******************************************!*\
  !*** ./src/js/modules/scrollToAnchor.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/header */ "./src/js/components/header.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/js/helpers.js");



/**
* Модуль "Плавный переход к якорю"
*/
var init = function init() {
  _helpers__WEBPACK_IMPORTED_MODULE_1__["default"].$document.on('click.anchor', '.js-to-anchor', function (e) {
    e.preventDefault();
    e.stopPropagation();
    var id = $(e.currentTarget).attr('href');
    var speed = $(e.currentTarget).data('speed') || 500;
    var offset = _helpers__WEBPACK_IMPORTED_MODULE_1__["default"].$header.css('position') === 'fixed' || _helpers__WEBPACK_IMPORTED_MODULE_1__["default"].$header.css('position') === 'absolute' ? -_helpers__WEBPACK_IMPORTED_MODULE_1__["default"].$header.outerHeight(true) : 0;
    _components_header__WEBPACK_IMPORTED_MODULE_0__["default"].closeMenu().then(function () {
      $('.js-burger').removeClass('is-active');
      _helpers__WEBPACK_IMPORTED_MODULE_1__["default"].scrollTo($(id), speed, offset);
    });
  });
};
var destroy = function destroy() {
  _helpers__WEBPACK_IMPORTED_MODULE_1__["default"].$document.off('.anchor');
};
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  destroy: destroy
});

/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/stable */ "./node_modules/core-js/stable/index.js");
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svg4everybody */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! object-fit-images */ "./node_modules/object-fit-images/dist/ofi.common-js.js");
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(object_fit_images__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");





// import objectFitVideos from 'object-fit-videos';

svg4everybody__WEBPACK_IMPORTED_MODULE_2___default()();
object_fit_images__WEBPACK_IMPORTED_MODULE_4___default()();
// objectFitVideos();

// import Swiper JS

window.$ = (jquery__WEBPACK_IMPORTED_MODULE_3___default());
window.jQuery = (jquery__WEBPACK_IMPORTED_MODULE_3___default());
window.objectFitImages = (object_fit_images__WEBPACK_IMPORTED_MODULE_4___default());
window.Swiper = swiper__WEBPACK_IMPORTED_MODULE_5__["default"];
window.Navigation = swiper__WEBPACK_IMPORTED_MODULE_5__.Navigation;
window.Pagination = swiper__WEBPACK_IMPORTED_MODULE_5__.Pagination;
window.EffectFade = swiper__WEBPACK_IMPORTED_MODULE_5__.EffectFade;
window.Grid = swiper__WEBPACK_IMPORTED_MODULE_5__.Grid;
// window.objectFitVideos = objectFitVideos;

__webpack_require__(/*! ninelines-ua-parser */ "./node_modules/ninelines-ua-parser/dist/ninelines-ua-parser.js");

/***/ }),

/***/ "./src/js/vendor/ie-fix.js":
/*!*********************************!*\
  !*** ./src/js/vendor/ie-fix.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ieFix: function() { return /* binding */ ieFix; }
/* harmony export */ });
/* eslint-disable */

/**
* Много разных фиксов для ie,
* чтобы не было лишних проблем
* Performance.now()
* forEach
* CustomEvent
* includes
* matches
* closest
* prepend
* append
* before
* remove
* startsWith
* Performance.now()
* https://gist.github.com/paulirish/5438650
*/

var ieFix = function ieFix() {
  (function () {
    if ("performance" in window == false) {
      window.performance = {};
    }

    // thanks IE8
    Date.now = Date.now || function () {
      return new Date().getTime();
    };
    if ("now" in window.performance == false) {
      var nowOffset = Date.now();
      if (performance.timing && performance.timing.navigationStart) {
        nowOffset = performance.timing.navigationStart;
      }
      window.performance.now = function now() {
        return Date.now() - nowOffset;
      };
    }
  })();

  // forEach
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }

  // CustomEvent
  (function () {
    if (typeof window.CustomEvent === 'function') return false;
    function CustomEvent(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    }
    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
  })();

  // includes
  if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
      value: function value(searchElement, fromIndex) {
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }
        var o = Object(this);
        var len = o.length >>> 0;
        if (len === 0) {
          return false;
        }
        var n = fromIndex | 0;
        var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
        function sameValueZero(x, y) {
          return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
        }
        while (k < len) {
          if (sameValueZero(o[k], searchElement)) {
            return true;
          }
          k++;
        }
        return false;
      }
    });
  }

  // matches
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
      var matches = (this.document || this.ownerDocument).querySelectorAll(s);
      var i = matches.length;
      // eslint-disable-next-line no-empty
      while (--i >= 0 && matches.item(i) !== this) {}
      return i > -1;
    };
  }
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  }

  // closest
  if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      var el = this;
      do {
        if (el.matches(s)) {
          return el;
        }
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);
      return null;
    };
  }

  // prepend
  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("prepend")) {
        return;
      }
      Object.defineProperty(item, "prepend", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function prepend() {
          // eslint-disable-next-line prefer-rest-params
          var argArr = Array.prototype.slice.call(arguments);
          var docFrag = document.createDocumentFragment();
          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
          this.insertBefore(docFrag, this.firstChild);
        }
      });
    });
  })([Element.prototype, Document.prototype, DocumentFragment.prototype]);

  // append
  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("append")) {
        return;
      }
      Object.defineProperty(item, "append", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function append() {
          // eslint-disable-next-line prefer-rest-params
          var argArr = Array.prototype.slice.call(arguments);
          var docFrag = document.createDocumentFragment();
          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
          this.appendChild(docFrag);
        }
      });
    });
  })([Element.prototype, Document.prototype, DocumentFragment.prototype]);

  // before
  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("before")) {
        return;
      }
      Object.defineProperty(item, "before", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function before() {
          // eslint-disable-next-line prefer-rest-params
          var argArr = Array.prototype.slice.call(arguments);
          var docFrag = document.createDocumentFragment();
          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
          this.parentNode.insertBefore(docFrag, this);
        }
      });
    });
  })([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

  // remove
  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("remove")) {
        return;
      }
      Object.defineProperty(item, "remove", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function remove() {
          if (this.parentNode !== null) {
            this.parentNode.removeChild(this);
          }
        }
      });
    });
  })([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

  // startsWith
  if (!String.prototype.startsWith) {
    // eslint-disable-next-line no-extend-native
    Object.defineProperty(String.prototype, "startsWith", {
      value: function value(search, rawPos) {
        var pos = rawPos > 0 ? rawPos | 0 : 0;
        return this.substring(pos, pos + search.length) === search;
      }
    });
  }

  // Fixes
  //---------------------------------

  // ie download
  var ie11Download = function ie11Download(el) {
    if (el.href === "") {
      throw Error("The element has no href value.");
    }
    var filename = el.getAttribute("download");
    if (filename === null || filename === "") {
      var tmp = el.href.split("/");
      filename = tmp[tmp.length - 1];
    }
    el.addEventListener("click", function (evt) {
      evt.preventDefault();
      var xhr = new XMLHttpRequest();
      xhr.onloadstart = function () {
        xhr.responseType = "blob";
      };
      xhr.onload = function () {
        navigator.msSaveOrOpenBlob(xhr.response, filename);
      };
      xhr.open("GET", el.href, true);
      xhr.send();
    });
  };
  if (window.navigator.msSaveBlob) {
    var downloadLinks = document.querySelectorAll("a[download]");
    if (downloadLinks.length) {
      downloadLinks.forEach(function (el) {
        ie11Download(el);
      });
    }
  }

  // ie svg focus fix
  var unfocusableSvg = function unfocusableSvg() {
    if (!(!!window.MSInputMethodContext && !!document.documentMode)) {
      return;
    }
    var svg = document.querySelectorAll('svg');
    svg.forEach(function (el) {
      el.setAttribute('focusable', 'false');
    });
  };
  unfocusableSvg();

  //ie footer nailing
  var ieFooterNailing = function ieFooterNailing() {
    var main = document.querySelector('main');
    var header = document.querySelector('.header');
    var footer = document.querySelector('.footer');
    var headerH;
    var footerH;
    var mainHMin;
    if (!main || !(!!window.MSInputMethodContext && !!document.documentMode)) {
      return;
    }
    var mainHeight = function mainHeight() {
      // eslint-disable-next-line no-unused-expressions
      header ? headerH = header.getBoundingClientRect().height : headerH = 0;
      // eslint-disable-next-line no-unused-expressions
      footer ? footerH = footer.getBoundingClientRect().height : footerH = 0;
      mainHMin = window.innerHeight;
      main.style.minHeight = mainHMin - (headerH + footerH) + 'px';
    };
    document.addEventListener('loadDOMContentLoaded', mainHeight());
    window.addEventListener('resize', mainHeight);
  };
  ieFooterNailing();
};


/***/ }),

/***/ "./src/js/vendor/vh-fix.js":
/*!*********************************!*\
  !*** ./src/js/vendor/vh-fix.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   vhFix: function() { return /* binding */ vhFix; }
/* harmony export */ });
/**
* Модуль исправления багов на iOs устройствах
* определяет высоту экрана и при любом изменении переопределяет её
* в стилях используйте кастомные стили var(--vh)
*/
var vhFix = function vhFix() {
  if (!(!!window.MSInputMethodContext && !!document.documentMode)) {
    var vh = window.innerHeight;
    document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
    window.addEventListener('resize', function () {
      vh = window.innerHeight;
      document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
    });
  }
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_74101_template"] = self["webpackChunk_74101_template"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./src/js/main.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map