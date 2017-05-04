// https://www.codewars.com/kata/default-configuration

function defaults(obj, defs) {
  const allKeys = Object.keys(Object.assign({}, obj, defs));

  return allKeys.reduce((result, key) => {
    const value = (key in obj) ? obj[key] : defs[key];
    
    if (value !== null && typeof value === 'object' && value.type === 'Error') {
      throw value.error();
    }
    
    result[key] = value;
    return result;
  }, {});
}


function mandatory(err) {
  return {
    type: 'Error',
    error: () => err
  };
}