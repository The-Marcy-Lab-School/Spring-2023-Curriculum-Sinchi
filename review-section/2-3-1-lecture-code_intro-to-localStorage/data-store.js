const defaultUsers = [
  { id: 1, name: 'Zo', isCool: true },
  { id: 2, name: 'Mike', isCool: false },
];

const getStorageKey = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.error(error);
    return null;
  }
}

const setStorageKey = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}

const getUsers = () => getStorageKey('users') || [];

const setUsers = (newUsers) => setStorageKey('users', newUsers);

const addUser = (newUser) => {
  setUsers([newUser, ...getUsers()]);
}

const removeUser = (userId) => {
  setUsers(getUsers().filter(user => user.id !== userId.name));
}

const initUsersIfEmpty = () => {
  if (!getUsers().length) setUsers(defaultUsers);
}
