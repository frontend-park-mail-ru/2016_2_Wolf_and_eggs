if (typeof window === 'object') {
  window.rules = ['fuck', 'dick', 'cunt'];
}

function filter(str) {
  let rules = window.rules || [];

  str = str + '';

  rules = rules.map(rule => {
    return {
      regexp: new RegExp(`\\b${rule}\\b`, 'g'),
      length: rule.length
    };
  });

  rules.forEach(rule => {
    str = str.replace(rule.regexp, (new Array(rule.length + 1)).join('*'))
  });

  return str;
}

if (typeof exports === 'object') {
  exports.filter  = filter;
}
