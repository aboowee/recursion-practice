//Input is object or array
//Output is a string for object or array
  //For obj, if undefined (return nothing), if NaN, Null, Infinity (return null)
  //For arr, if undefined, nan, null, infinity (return null)

var stringifyJSON = function(obj) {

  var convertedResult = '';

  if (typeof obj === 'undefined' || typeof obj === 'function') {
    return undefined;
  }

  var innerFunction = function (item) {

    if (Array.isArray(item)) {
      convertedResult += '[';
      item.forEach(function (innerItem) {
        innerFunction(innerItem);
      });
      convertedResult += '],';
    }

    if (typeof item === 'object' && !Array.isArray(item) && item !== null) {
      convertedResult += '{';
      for (var key in item) {
        if (item[key] === undefined || typeof item[key] === 'function') {
          continue;
        }
        innerFunction(key);
        convertedResult += ':';
        innerFunction(item[key]);
      }
      convertedResult += '},';
    }

    if (item === undefined || typeof item === 'function' || item === null) {
      convertedResult += 'null,';
    } else if (typeof item === 'number' || typeof item === 'boolean') {
      convertedResult += item + ',';
    } else if (typeof item === 'string') {
      convertedResult += '"' + item + '",';
    }

  };
  innerFunction(obj);

  if (convertedResult[convertedResult.length - 1] === ',') {
    convertedResult = convertedResult.slice(0, convertedResult.length - 1);
  }
  convertedResult = convertedResult.split(',]').join(']');
  convertedResult = convertedResult.split(',}').join('}');
  convertedResult = convertedResult.split(',:').join(':');

  return convertedResult;
};