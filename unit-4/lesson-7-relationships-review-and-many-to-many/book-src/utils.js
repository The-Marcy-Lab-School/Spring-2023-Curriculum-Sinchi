const getId = ((id = 1) => () => id++)(); // IIFE

module.exports = { getId };
