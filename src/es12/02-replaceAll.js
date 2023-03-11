const string = "JavaScript es un maravilloso lenguaje de programación";

const replacedString = string.replace("JavaScript", "TypeScript");

console.log(replacedString);    // TypeScript es un maravilloso lenguaje de programación



// Example jeje
const inputText = "If you're :) and you know it :clap your hands :clap :clap"

const emojiReplace = (text) => {
  let emojized = ""
  emojized = text.replaceAll(':)', '😀')
  emojized = emojized.replaceAll(':clap', '👏🏻')

  return emojized
}

console.log(emojiReplace(inputText))