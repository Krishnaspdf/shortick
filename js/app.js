const form = document.getElementById("shortener-form");
const input = document.getElementById("url-input");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const url = input.value.trim();
    console.log("User entered:", url);

    if (validateURL(url)) {
        const shortCode = generateShortCode();
        const shortURL = `https://shortick.vercel.app/${shortCode}`;

        console.log("Original URL:", url);
        console.log("Short URL:", shortURL);

        // Version with plain text
        result.innerHTML = `
            <h2>Generated Link</h2>
            <p><strong>Original URL:</strong> ${url}</p>
            <p><strong>Short URL:</strong> ${shortURL}</p>
        `;

        // Version with clickable link
        /*
        result.innerHTML = `
            <h2>Generated Link</h2>
            <p><strong>Original URL:</strong> ${url}</p>
            <p>
                <strong>Short URL:</strong>
                <a href="${shortURL}" target="_blank">${shortURL}</a>
            </p>
        `;
        */
    } else {
        console.log("Invalid URL");
        result.innerHTML = `
            <h2>Generated Link</h2>
            <p>❌ Please enter a valid URL.</p>
        `;
    }
    input.value = "";
});