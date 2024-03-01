const convertButton = document.getElementById("convert-btn");
const inputNumber = document.getElementById("number");
const outputDiv = document.getElementById("output");

function convertToRoman(num) {
    if (typeof num !== "number" || !Number.isInteger(num) || num < 1 || num > 3999) {
        return null;
    }

    const romanBases = [
        ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
        ["", "M", "MM", "MMM"],
    ];

    let digits = String(num).split("").reverse(); // Reverse the array to start from units
    let roman = "";

    for (let i = 0; i < digits.length; i++) {
        roman = romanBases[i][parseInt(digits[i])] + roman;
    }

    return roman;
}

convertButton.addEventListener("click", function () {
    const inputValue = parseInt(inputNumber.value);
    const result = convertToRoman(inputValue);

    if (result !== null) {
        outputDiv.textContent = result;
    } else {
        if (inputValue < 1) {
            outputDiv.textContent = "Please enter a number greater than or equal to 1";
        } else if (inputValue > 3999) {
            outputDiv.textContent = "Please enter a number less than or equal to 3999";
        } else {
            outputDiv.textContent = "Please enter a valid number";
        }
    }
});
