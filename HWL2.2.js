const phones = [
    "067 734 4343",
    "094 643 7432",
    "083 jfvj 4554",
    "Anton0938 884",
    "0437348348"
];

phones.forEach(phone =>
    console.log("validatePhoneNymber(" + phone + ") -> " + validatePhoneNymber(phone)));

function validatePhoneNymber(phone) {
let isValid = Array.from(phone).every(symbol => !isNaN(symbol));
return isValid;
}
console.log("Finish");
