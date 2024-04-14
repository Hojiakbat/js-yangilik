



var elform = document.querySelector(".form");
var elformInput = document.querySelector(".form__input");
var elformselect = document.querySelector(".form__select");
var result = document.querySelector(".form__result");

elform.addEventListener("submit", function (evt) {
    evt.preventDefault()

    var inputvalue = elformInput.value;
    var selectvalue = elformselect.value;

    result.textContent = `${inputvalue * selectvalue}`;

})

