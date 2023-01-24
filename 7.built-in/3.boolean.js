let boolean = new Boolean(true);
console.log(boolean.valueOf());

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean

/**
 * 거짓
 * 0
 * -0
 * NaN
 * undefined
 * null
 * ''
 */
const bNoParam = new Boolean();
const bZero = new Boolean(0);
const bNull = new Boolean(null);
const bEmptyString = new Boolean('');
const bfalse = new Boolean(false);

/**
 * 참
 * 1
 * -1
 * '0'
 * 'false
 * []
 * {}
 */
const btrue = new Boolean(true);
const btrueString = new Boolean('true');
const bfalseString = new Boolean('false');
const bSuLin = new Boolean('Su Lin');
const bArrayProto = new Boolean([]);
const bObjProto = new Boolean({});
