new WOW().init();
$(document).ready(function() {
  // Валидация
  $('#preview-form').validate({
    rules: {
      username: {
        required: true,
        minlength: 2
      },
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true
      }
    },
    messages: {
      username: {
        required: "Заполните поле",
        minlength: jQuery.validator.format("Еще символов {0}")
      },
      email: "Укажите корректный email",
      phone: "Заполните поле"
    }
  });
  // Маска телефона
  $('.phone').mask('+7(999) 999-9999');
}); 