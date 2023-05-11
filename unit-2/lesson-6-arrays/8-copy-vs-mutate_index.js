// when to copy vs mutate
const toDos = [
    'go to store',
    'walk dog',
    'learn about arrays'
];

// we DO want to mutate
const addToDo = (toDo, toDoList) => {
    toDoList.push(toDo);
}

// we DON'T want to mutate
const showLastToDo = (toDoList) => {
    return toDoList.pop();
}
console.log('toDos before:', toDos);
console.log(showLastToDo(toDos));
console.log('toDos after:', toDos);

// this is the pure version of showLastToDo
const showLastToDoFixed = (toDoList) => {
    return toDoList[toDoList.length - 1];
}

console.log('toDos before:', toDos);
console.log(showLastToDoFixed(toDos));
console.log('toDos after:', toDos);