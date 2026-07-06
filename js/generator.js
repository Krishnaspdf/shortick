const PREFIX = "kd";
const CODE_LENGTH = 6;
const CHARACTERS =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateShortCode() {
    let code = "";

    for (let i = 0; i < CODE_LENGTH; i++) {
        const randomIndex = Math.floor(Math.random() * CHARACTERS.length);
        code += CHARACTERS[randomIndex];
    }

    return PREFIX + code;
}