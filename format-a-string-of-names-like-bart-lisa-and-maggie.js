// https://www.codewars.com/kata/format-a-string-of-names-like-bart-lisa-and-maggie

function list(names){
  return names
    .reduce((result, person, index, list) => {
      let append = person.name;

      if (list.length - 2 === index) {
        append += ' & ';
      } else if (list.length - 1 > index) {
        append += ', ';
      }

      return result + append;
    }, '')

}
