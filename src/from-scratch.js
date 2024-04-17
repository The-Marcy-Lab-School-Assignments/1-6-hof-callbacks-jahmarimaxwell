const myForEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    callback(num);
  }
  return undefined;
};

const myMap = (arr, callback) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = callback(arr[i], i);
    newArr.push(result);
  }
  return newArr;
}

const myFind = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i]))
      return arr[i];
  };
  return undefined;
}

const myFilter = (arr, callback) => {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      newArray.push(arr[i]);
    }
  };
  return newArray;
}

const sortWords = (arr) => {
  let newArray = [...arr]
  return newArray.sort();
};

const sortNumbers = (arr) => {
  let newArray = [...arr]
  return newArray.sort((a, b) => (a - b));
};

const sortNumbersBetter = (arr, isDescending) => {
  let newArray = [...arr]
  if (isDescending) {
    return newArray.sort((a, b) => (b - a));
  }
  return newArray.sort((a, b) => (a - b))
};

const sortUsersByOrder = (arr) => {
  let newArray = [...arr]
  return newArray.sort((a, b) => (a.order - b.order));
};

const sortUsersByName = (arr) => {
  let newArray = [...arr]
  newArray.sort((a, b) => {
    const nameA = a.name
    const nameB = b.name
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  return newArray
};

module.exports = {
  myForEach,
  myMap,
  myFind,
  myFilter,

  sortWords,
  sortNumbers,
  sortNumbersBetter,
  sortUsersByOrder,
  sortUsersByName,
};
