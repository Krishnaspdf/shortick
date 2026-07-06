const form = document.getElementById("shortener-form");
const input = document.getElementById("url-input");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const url = input.value.trim();

    console.log("User entered:", url);

    if (validateURL(url)) {
        const shortCode = generateShortCode();

        // Future deployment:
        // const shortURL = `https://shortick.vercel.app/${shortCode}`;

        console.log("Short Code:", shortCode);

        result.innerHTML = `
            <h2>Generated Link</h2>
            <p><strong>Original URL:</strong> ${url}</p>
            <p><strong>Short Code:</strong> ${shortCode}</p>
        `;

        /*
        // I Will Uncomment after deploying to Vercel

        result.innerHTML = `
            <h2>Generated Link</h2>
            <p><strong>Original URL:</strong> ${url}</p>
            <p><strong>Short URL:</strong> ${shortURL}</p>
        `;
        */

    } else {
        console.log("Invalid URL");

        result.innerHTML = `
            <h2>Generated Link</h2>
            <p>❌ Please enter a valid HTTP or HTTPS URL.</p>
        `;
    }

    input.value = "";
});