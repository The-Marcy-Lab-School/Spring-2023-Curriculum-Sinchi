# Flex Basis

## Vocabulary
* flex-basis
* flex-shrink
* flex-grow


## Syntax
```js
.child {
  flex: 0 1 auto;
}

/* This is just how I think about the rule above in my head */

.child {
  flex: [flex-grow] [flex-shrink] [flex-basis];
}

/* or... */

.child {
  flex: [max] [min] [ideal size];
}
```