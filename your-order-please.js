// https://www.codewars.com/kata/your-order-please

const order = words => (
  words
    .split(' ')
    .map(word => ({
      text: word,
      index: +word.replace(/\D/g,'')
    }))
    .sort((a, b) => a.index > b.index)
    .map(entry => entry.text)
    .join(' ')
);
