$(document).ready(function () {
    M.updateTextFields();

    $("select").formSelect();

    $(".datepicker").datepicker();

    document.querySelector(".menu").addEventListener("click", openMenu);

    function openMenu() {
        document.querySelector(".nav-info").classList.toggle("active");
    }
});
