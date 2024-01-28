$(document).ready(function () {
    M.updateTextFields();

    $("select").formSelect();

    $(".datepicker").datepicker();

    document.querySelector(".menu").addEventListener("click", openMenu);

    function openMenu() {
        document.querySelector(".nav-info").classList.toggle("active");
    }
    let number = 1;
    let loopValue = 0;
    const person =
        '<div class="theard-section"><div class="label">person ' +
        number +
        '</div><div><div class="full-name"><input placeholder="name and username" id="first_name" type="text" class="validate"></div><div class="input-field age"><select><option value="">age</option><option value="2">10</option><option value="3">20</option><option value="3">30</option></select></div><div class="input-field passport"><input placeholder="N.passport" id="first_name" type="text" class="validate"></div><div class="nationality"><input placeholder="nationality" id="first_name" type="text" class="validate"></div></div></div>';

    const peopleInput = document.getElementById("people");
    const personsSection = document.getElementById("persons_section");
    peopleInput.addEventListener("focus", focusEvent);
    peopleInput.addEventListener("blur", blurEvent);
    peopleInput.addEventListener("input", validateNumericInput);

    function focusEvent() {
        // number = 0;
    }
    function blurEvent() {
        if (!isNaN(loopValue)) {
            loopValue = peopleInput.value;
            personsSection.innerHTML = "";
        }

        for (let i = 0; i < loopValue; i++) {
            personsSection.innerHTML += person;
            console.log(number);
            number++;
        }
    }
    function validateNumericInput() {
        peopleInput.value = peopleInput.value.replace(/[^0-9]/g, "");
    }
});
