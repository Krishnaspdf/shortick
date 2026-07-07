// ==============================
// 1. REDIRECT SYSTEM (RUNS FIRST)
// ==============================
const params = new URLSearchParams(window.location.search);
const code = params.get("code");

if (code) {
    const urls = getAllURLs();

    if (urls[code]) {
        window.location.href = urls[code];
    } else {
        document.body.innerHTML = "<h2>❌ Invalid or expired link</h2>";
    }
}

// ==============================
// 2. APP LOGIC
// ==============================
document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("shortener-form");
    const input = document.getElementById("url-input");
    const result = document.getElementById("result");
    const historyList = document.getElementById("history-list");

    function renderHistory() {
        const urls = getAllURLs();
        historyList.innerHTML = "";

        if (Object.keys(urls).length === 0) {
            historyList.innerHTML = "<p>No links yet.</p>";
            return;
        }
        Object.entries(urls).forEach(([shortCode, originalURL]) => {
            historyList.innerHTML += `
                <div class="history-item">
                    <p><strong>Short Code:</strong> ${shortCode}</p>
                    <p><strong>Original URL:</strong> ${originalURL}</p>

                    <button class="copy-btn" data-code="${shortCode}">
                        Copy
                    </button>

                    <button class="delete-btn" data-code="${shortCode}">
                        Delete
                    </button>
                </div>`;
        });
        const copyButtons = document.querySelectorAll(".copy-btn");
        const deleteButtons = document.querySelectorAll(".delete-btn");
        copyButtons.forEach((button) => {
            button.addEventListener("click", () => {
                const shortCode = button.dataset.code;
                const shortURL =
                `${window.location.origin}/?code=${shortCode}`;
                navigator.clipboard.writeText(shortURL);
                alert("Link copied!");
            });
        });
        deleteButtons.forEach((button) => {
            button.addEventListener("click", () => {
                const shortCode = button.dataset.code;
                deleteURL(shortCode);
                renderHistory();
            });
        });
    }

    renderHistory();

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const originalURL = input.value.trim();

        console.log("User entered:", originalURL);

        if (validateURL(originalURL)) {

            // Generate short code
            const shortCode = generateShortCode();

            // Save to localStorage
            saveURL(shortCode, originalURL);
            renderHistory();

            // Create redirect-style short URL
            const shortURL = `${window.location.origin}/?code=${shortCode}`;

            console.log("Short Code:", shortCode);
            console.log("Short URL:", shortURL);

            // Show result in UI (NO LINK VERSION FOR NOW)
            result.innerHTML = `
                <h2>Generated Link</h2>
                <p><strong>Original URL:</strong> ${originalURL}</p>
                <p><strong>Short Code:</strong> ${shortCode}</p>
            `;

        } else {

            result.innerHTML = `
                <h2>Generated Link</h2>
                <p>❌ Please enter a valid HTTP or HTTPS URL.</p>
            `;
        }

        input.value = "";
    });

});