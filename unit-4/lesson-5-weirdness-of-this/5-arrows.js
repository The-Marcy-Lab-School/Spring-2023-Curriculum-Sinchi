console.log('Global ----------', );
module.exports.test = "Arrow's `this` is set!";

const arrowThis = (tag) => {
  console.log(`${tag}:`, this);
};

arrowThis('Arrow in global');

console.log('\nIn Obj ----------', );
// changing owner != changing this
const objArrow = {
  test: 'The arrow will ignore this',
  arrowThis,
};

objArrow.arrowThis('Arrow in obj');

console.log('\nIn class ----------', );
class NoBreak {
  constructor(test) {
    this.test = test;
  }

  show() {
    console.log('this in method:', this);
    arrowThis('Arrow in class');
  }
}

const stillGlobalArrow = new NoBreak('No Break');
stillGlobalArrow.show();
