const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  const letters = expr.match(/.{1,10}/g);
  let decoded = "";

  letters.forEach(function (letter) {
    let newLetter = letter
      .replace(/00/g, "")
      .replace(/10/g, ".")
      .replace(/11/g, "-");

    Object.keys(MORSE_TABLE).forEach(function (key) {
      if (key == newLetter) {
        newLetter = MORSE_TABLE[key];
      }
    });
    decoded += newLetter;
  });
  return decoded.split("**********").join(" ");
}

module.exports = {
  decode,
};
