const form = document.getElementById("shortener-form");
const input = document.getElementById("url-input");
const result = document.getElementById("result");
console.log(form);

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const url = input.value;
    console.log(url);
    input.value = "";
});