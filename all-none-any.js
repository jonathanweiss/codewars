// https://www.codewars.com/kata/54589f3b52756d34d6000158

// NOTE: I'm *not* using Array.prototype.all, Array.prototype.filter or any other of those native methods because I consider using them cheating on this kata.

Array.prototype.all = function (p) {
  for (let i = 0; i < this.length; i++) {
    if (!p(this[i])) {
      return false;
    }
  }

  return true;
};

Array.prototype.none = function (p) {
  let result = true;

  for (let i = 0; i < this.length; i++) {
    if (p(this[i])) {
      result =  false;
    }
  }

  return result;
};

Array.prototype.any = function (p) {
  for (let i = 0; i < this.length; i++) {
    if (p(this[i])) {
      return true;
    }
  }
  
  return false;
};
