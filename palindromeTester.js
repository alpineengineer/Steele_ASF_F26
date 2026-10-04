function isPalindrome(input) {
    if (typeof input !== "string") return false;

    let cleaned = input
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "")
    let reversed = cleaned.split("").reverse().join("");

    return cleaned === reversed;
}

module.exports = isPalindrome;