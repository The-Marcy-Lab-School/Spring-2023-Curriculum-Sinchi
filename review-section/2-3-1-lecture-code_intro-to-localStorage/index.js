const defaultUsers = ['zo', 'itzel', 'carms']

const setLocalStorageKey = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}

const getLocalStorageValue = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (err) {
    console.log(err)
  }
}

export const getUsers = () => {
  return getLocalStorageValue('users') || []
}

export const setUsers = (users) => {
  setLocalStorageKey('users', users)
}

export const addUser = (newUser) => {
  setUsers([newUser, ...getUsers()])
}

export const initUsersIfEmpty = () => {
  if (!getUsers().length) setUsers(defaultUsers)
}

initUsersIfEmpty();

const localUsers = getUsers()
console.log('localUsers:', localUsers);
addUser('mike')

