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
    const result = callback(arr[i], i);
    if (result === true)
      return arr;
  };
}
const myFilter = () => {
};

const sortWords = () => {
};

const sortNumbers = () => {
};

const sortNumbersBetter = () => {
};

const sortUsersByOrder = () => {
};

const sortUsersByName = () => {
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
