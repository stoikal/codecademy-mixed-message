function generateRandomNumber(num) {
  return Math.floor(Math.random() * num);
}

const possibleValues = {
  food: ['rujak', 'pecel', 'soto', 'nasi goreng', 'sup jamur'],
  fruit: ['jeruk', 'pisang', 'apel', 'mangga', 'manggis', 'semangka', 'pepaya', 'melon', 'anggur', 'jambu'],
  drink: ['kopi', 'teh', 'cokelat', 'air putih', 'jus']
}
  
let personalWisdom = [];
  
for(let key in possibleValues) {
  let optionIdx = generateRandomNumber(possibleValues[key].length)

  switch(key) {
    case 'food':
      personalWisdom.push(`Makanan: "${possibleValues[key][optionIdx]}".`)
      break
    case 'fruit':
      personalWisdom.push(`Buah: "${possibleValues[key][optionIdx]}".`)
      break
    case 'drink':
      personalWisdom.push(`Minuman: "${possibleValues[key][optionIdx]}".`)
      break
    default:
      break;
  }
}

function print(wisdom) {
  const formatted = wisdom.join('\n')
  console.log(formatted)
}

print(personalWisdom);
