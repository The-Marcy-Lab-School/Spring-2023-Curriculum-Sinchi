# Lecture Prep 2.0.1 - Intro To CSS

# Part 0 - What is CSS?
CSS stands for "Cascading Style Sheets." We'll talk about what "cascading" means in this context, but you can guess what styles are! CSS is made up of "rules" that tell our browser how to display our HTML. You can "select" certain things on the page like tags, ids, classes, and more, and then apply styles to them.

The browser already has some default styles (like why `h1`s are bigger than `h2`s), but we can override those styles with our own. We can change the color, the size, the font, the position, and more of anything on the page.

# Part 1 - Loading the file
Go through adding a `link` tag in the head, explain how we need the `rel` (relevance, it tells the browser what the kind of file is) and `href` (the actual file location) attributes. It's always important to show because fellows very often have correct CSS that doesn't work because the file isn't actually linked. Whenever you test your connection, always have a few super obvious rules in the CSS file to make sure it's actually changing the HTML appearance.

# Part 2 - Anatomy of a rule
Check out the linked image in the html, it's a break down of selectors

- the rule is the whole thing
- the selector is what chooses the element(s) that will be styled
- the declaration is the actual style that will be applied
- and within the declaration are key value pairs, the property and the value
- each key value pair is separated by semicolons

Styles can be commented out by doing /* */

# Part 3 - Selectors
Go over the three basic selectors and show them more with [the list of all the options](https://www.w3schools.com/cssref/css_selectors.php)

- tags
- #id, tag#id
- .class, tag.class
- parent child
- tag:pseudo-class
  - a:link - a normal, unvisited link
  - a:visited - a link the user has visited
  - a:hover - a link when the user mouses over it
  - a:active - a link the moment it is clicked

# Part 4 - Specificity
So What if you have styles that apply to more than one element, and they conflict with each other? That's where specificity comes in

By default, "cascading" means that the rule that comes later, wins! So

```css
p {
  color: red;
}

p {
  color: blue;
}
```

`p` tags will be blue. BUT the more selectors you add, the more specific the rule is, and the more it will override other rules.

```css
p#subtitle {
  color: red;
}

p {
  color: blue;
}
```

Now, the subtitle id will be red, because it's more specific. `id` selectors are super powerful. Like an id only has one on the page, so it will classes since there are more than one per page.

# Part 5 - Box Model
The box model is how the browser calculates the size of an element. It's made up of the content, padding, border, and margin. The content is the actual text or image or whatever is inside the element. The padding is the space between the content and the border. The border is the line around the element. The margin is the space between the border and the next element.

Check out the image `margin-padding-content.png` in `images`

However, how does CSS combine these measures to give you an ultimate width and height? By default it will add them all together (width plus padding plus border plus margin). However, that can be weird! Because `width` will refer to the *content*, and then add margin and padding on top. So a 200px wide element with 10px padding and 10px margin will actually be 220px wide. Lame! So we can change that with the `box-sizing` property.

```css
html {
  box-sizing: border-box;
}
```

That will take our width and height and "smush" our content so that everything fits inside. So now our 200px wide element with 10px padding and 10px margin will be 200px wide. Much better!

We tend to put this in the `html` tag because we want this style to apply to every single thing on our page, and everything is a child of HTML

https://www.w3schools.com/css/css3_box-sizing.asp


# Part 6 - common tricks
## rems
Instead of using pixels, which ignore browser settings on base font size, you can use `rem` as a measure. `1rem` is the same as what the browser sets as the root font size. 16 pixels by default. So if you set your font size to `1.5rem` it will be 24 pixels. This is a good way to make sure your site is accessible to people who need larger font sizes.

## removing list styles

```css
ul {
  list-style: none;
  padding: 0;
}
```

## centering things
We'll learn more about positioning later, but a fun intro is auto centering "block level" elements like divs.

`margin: 0 auto;` will auto increment the side margins to make sure they are even and the item is centeres horizontally on the page.

For inline elements, like text, you can use `text-align: center;` to center the text inside the element.

Play around with it!

## fitting images
Specify *one* height or width to get the image to maintain it's natural aspect ratio. If you specify both, it will stretch the image to fit the box, which may not be what you want.

## Part 7 - HW
So css has so many selectors, and it's helpful to know what they are! That's why the HW tonight is a game that runs through an incredible amount of them. There are lots of CSS properties to learn as well, but looking them up is simple. If you figure out how to *select* something, you'll be ok!

And remember, simplest is better. Writing your HTML to just include an id or class on a crucial element is better than trying to make some crazy selector. It's easier to read, and easier to maintain.
