// https://www.codewars.com/kata/complementary-dna

function DNAStrand(dna){
  var complements = {
    'A': 'T',
    'T': 'A',
    'C': 'G',
    'G': 'C'
  };

  return dna ?
    dna
      .split('')
      .map(c => complements[c])
      .join('') :
    null;
}
