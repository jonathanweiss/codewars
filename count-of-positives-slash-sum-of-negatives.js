// https://www.codewars.com/kata/count-of-positives-slash-sum-of-negatives

function countPositivesSumNegatives(input) {
    return input && input.length > 0 ?
      input.reduce(function(result, n) {

        if (n > 0) {
          result[0]++
        } else {
          result[1] += n;
        }

        return result;
      }, [0, 0]) :

      [];
}
