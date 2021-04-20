function checkUniqueLettersInString(str) {
    const arr = str.split('');
    const unique = new Set(arr);

    return arr.length === unique.size;
}

module.exports = checkUniqueLettersInString;
