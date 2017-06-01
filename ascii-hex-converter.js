//https://www.codewars.com/kata/ascii-hex-converter/train/javascript/58e2384dcbbac4f1080000cb

const Converter = {
  toAscii: hex => {
    const result = [];
    for (let i = 0; i < hex.length; i+=2) {
      let chunk = hex[i] + hex[i + 1];
      result.push(parseInt(chunk, 16));
    }

    return result
      .map(n => String.fromCharCode(n))
      .join('');
  },

  toHex: ascii => (
    ascii
      .split('')
      .map(c => c.charCodeAt(0))
      .map(n => n.toString(16))
      .join('')
  )
}
