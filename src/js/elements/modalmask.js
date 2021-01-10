/* Маска для номера телефона */
let phoneMask = IMask(
    document.querySelector('input[type="tel"]'), {
    mask: '+{7} (000) 000-00-00'
});
