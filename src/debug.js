const myEvery = (arr, callback) => {
  for (const value of arr) {
    if (!callback(value))
      return false;
  }
  return true;
};

const sortUsersBy = (users, sortingFunction) => {
  return [...users].sort(sortingFunction);
};

const logEachName = (names) => {
  return names.forEach((name, index, arr) => console.log(name, index, arr));
};

const logEachUserBio = (users) => {
  return users.forEach((user) => { console.log(user.bio) });
};

module.exports = {
  myEvery,
  sortUsersBy,
  logEachName,
  logEachUserBio,
};
