const text = document.querySelector('#number');
const button = document.querySelector('#convert-btn');
const output = document.querySelector('#output');

button.onclick = convert;

function convert() {
    if (text.value == "") {
        output.innerHTML = "Please enter a valid number"
    } else if (text.value < 0) {
        output.innerHTML = "Please enter a number greater than or equal to 1"
    } else if (text.value > 3999) {
        output.innerHTML = "Please enter a number less than or equal to 3999"
    } else {
        output.innerHTML = toRomanNumerals(text.value);
    }
}

function toRomanNumerals(number) {
    const romanNumerals = [
        { value: 1000, numeral: "M" },
        { value: 900, numeral: "CM" },
        { value: 500, numeral: "D" },
        { value: 400, numeral: "CD" },
        { value: 100, numeral: "C" },
        { value: 90, numeral: "XC" },
        { value: 50, numeral: "L" },
        { value: 40, numeral: "XL" },
        { value: 10, numeral: "X" },
        { value: 9, numeral: "IX" },
        { value: 5, numeral: "V" },
        { value: 4, numeral: "IV" },
        { value: 1, numeral: "I" }
    ];

    let result = "";
    for (const numeral of romanNumerals) {
        while (number >= numeral.value) {
            result += numeral.numeral;
            number -= numeral.value;
        }
    }

    return result;
}