function validateURL(url) {
    try {
        const parsedURL = new URL(url);
        return (
            parsedURL.protocol === "http:" ||
            parsedURL.protocol === "https:"
        );
    } catch {
        return false;
    }
}