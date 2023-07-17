const getId = ((id = 1) => () => id++)();

module.exports = { getId };
