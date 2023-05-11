// object shorthand
const makeCar = (name, maker, color) => {
    const isNew = true;
    return {
        name: name,
        maker: maker,
        color: color,
        isNew: isNew,
    };
}

const makeCarShort = (name, maker, color) => {
    const isNew = true;
    return { name, maker, color, isNew };
};

const wrapPropsInObj = (name, age, bio) => ({ name, age, bio });