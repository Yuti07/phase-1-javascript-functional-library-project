// index.js

function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else if (typeof collection === "object") {
      for (const key in collection) {
        callback(collection[key]);
      }
    }
    return collection;
  }

  function myMap(collection, callback) {
    const newArray = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        newArray.push(callback(collection[i]));
      }
    } else if (typeof collection === "object") {
      for (const key in collection) {
        newArray.push(callback(collection[key]));
      }
    }
    return newArray;
  }

  function myReduce(collection, callback, initialValue) {
    if (Array.isArray(collection)) {
      let result = initialValue !== undefined ? initialValue : collection[0];
      const startIndex = initialValue !== undefined ? 0 : 1;

      for (let i = startIndex; i < collection.length; i++) {
        result = callback(result, collection[i]);
      }
      return result;
    } else if (typeof collection === "object") {
      const objectValues = getObjectValues(collection);
      let result = initialValue !== undefined ? initialValue : objectValues[0];
      const startIndex = initialValue !== undefined ? 0 : 1;

      for (let i = startIndex; i < objectValues.length; i++) {
        result = callback(result, objectValues[i]);
      }
      return result;
    }
  }
  function getObjectValues(object) {
    return Object.keys(object).map((key) => object[key]);
  }

  function myFind(collection, callback) {
    for (let i = 0; i < collection.length; i++) {
      if (callback(collection[i])) {
        return collection[i];
      }
    }
    return undefined;
  }

  function myFilter(collection, callback) {
    const newArray = [];
    for (let i = 0; i < collection.length; i++) {
      if (callback(collection[i])) {
        newArray.push(collection[i]);
      }
    }
    return newArray;
  }

  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else if (typeof collection === "object") {
      return Object.keys(collection).length;
    }
  }
  function myFirst(collection, n = 1) {
    if (!Array.isArray(collection)) {
      return undefined;
    }

    if (n === 1) {
      return collection[0];
    }

    return collection.slice(0, n);
  }
  function myLast(collection, n = 1) {
    if (!Array.isArray(collection)) {
      return undefined;
    }

    if (n === 1) {
      return collection[collection.length - 1];
    }

    return collection.slice(-n);
  }

  function myKeys(collection) {
    return Object.keys(collection);
  }

  function myValues(collection) {
    return Object.values(collection);
  }

  module.exports = {

    myEach,
    myMap,
    myReduce,
    myFind,
    myFilter,
    mySize,
    myFirst,
    myLast,
    myKeys,
    myValues,
  };
