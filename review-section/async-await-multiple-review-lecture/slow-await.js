import { sleep } from './utils.js'

const userIds = [10,20,30,40]

/* this is broken, .map can't deal with multiple promises, it just fires them all off and can't be awaited */
console.log('I should be first')
const result = await userIds.map(async (id) => {
  await sleep(5000,);
  return `fetched ${id}!`
})
console.log('I should be last')
console.log('result:', result);

/* We can try a for loop, but that's ungodly slower */
console.time('for and await');
for (let i = 0; i < userIds.length; i++) {
  await sleep(500);
  console.log('fetched id:', userIds[i]);
}
console.timeEnd('for and await');

/* the correct way is to use .all */
console.time('promise.all')
const data = await Promise.all(userIds.map(async (id) => {
  await sleep(5000,);
  // if (id === 30) throw new Error('bad id')
  return `fetched ${id}!`
}))
console.timeEnd('promise.all')
console.log('data:', data);

console.log('Program successfully ended:', );

// But what is a promise rejects? Check out promise.allSettled!
