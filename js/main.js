
$(function () {
  
  // Создание СЛАЙДЕРА при помощи сайта slick-slider
  $(function () {
  // К селектору класса iphone-slider 
  // применяем slick
  $('.iphone-slider, .slider__items').slick({
    // Убираем стрелки и устанавливаем кнопки
    arrows: false,
    dots: true,
    // Плавный стиль переключения анимации
    fade: true,
    // Чтобы слайдер срабатывал автоматически через каждую 1 секунду
     autoplay: true,
     autoplaySpeed: 1000,
  });
});

});




