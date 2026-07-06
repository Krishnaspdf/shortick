const form = document.getElementById("shortener-form");
const input = document.getElementById("url-input");
const result = document.getElementById("result");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const url = input.value;
    console.log("User entered:", url);
    if (validateURL(url)) {
        console.log("✅ Valid URL");
    } else {
        console.log("❌ Invalid URL");
    }
    input.value = "";
});