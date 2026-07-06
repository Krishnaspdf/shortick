const form = document.getElementById("shortener-form");
const input = document.getElementById("url-input");
const result = document.getElementById("result");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const url = input.value;
    console.log("User entered:", url);
    if (validateURL(url)) {
    const shortCode = generateShortCode();
    console.log("Original URL:", url);
    console.log("Short Code:", shortCode);
} else {
    console.log("Invalid URL");
}
    input.value = "";
});