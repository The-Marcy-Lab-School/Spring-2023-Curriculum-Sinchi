const defaultUsers = ['zo', 'itzel', 'carms']

localStorage.setItem('me', 'mike')
localStorage.getItem('me')

const setLocalStorageKey = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}

const getLocalStorageValue = async (key) => {
  try {
    await dbFunc()
  } catch(err) {
    console.log(err)
  }
}