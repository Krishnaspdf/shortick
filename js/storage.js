function getAllURLs(){
    return JSON.parse(localStorage.getItem("urls")) || {};    
}

function saveURL(shortCode, originalURL) {
    const urls = getAllURLs();
    
    urls[shortCode] = originalURL;

    localStorage.setItem("urls", JSON.stringify(urls));
}

function deleteURL(shortCode) {
    const urls = getAllURLs();

    delete urls[shortCode];

    localStorage.setItem("urls", JSON.stringify(urls));
}