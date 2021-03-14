module.exports = function toReadable(number) {
    let decimalPartNames = [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety"
    ];

    let numberNames = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"
    ];

    if (number == 0) return "zero";

    if (number < 20) {
        return numberNames[number];
    }

    if (number < 100) {
        let decimalPart = decimalPartNames[Math.floor(number / 10)];
        return (number % 10 === 0) ? decimalPart : decimalPart + " " + numberNames[number % 10];
    }

    let hundredthPart = numberNames[Math.floor(number / 100)] + " hundred";
    return (number % 100 === 0) ? hundredthPart : hundredthPart + " " + toReadable(number % 100);
}
