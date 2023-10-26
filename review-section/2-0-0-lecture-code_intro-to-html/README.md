# Lecture Prep 2.0.0 - Intro To HTML

This lecture is a little different! There's just `lecture`

# Part 1 - What is HTML?
> The internet is made up of billions and billions of pages. But just like Google sheets, we need some way of *writing* those pages. The browser needs some way to know what it's looking at and how it should display it to the user. Is this text a heading? A quote? A list? HTML tells the browser exactly what it's looking at. JS lets us add interactivity with dynamic scripts, and css lets us style our pages to look nice, but the *content* comes from HTML documents. So in order to show our users all our cool applications, first, we have learn to create our own HyperText Markup Language documents, or HTML pages!

For this lecture, encourage the fellows to create a document along with you to see all the tags in action. Nothing in here is complicated, it's all just showing the features so they can write them down and start using them.

-----------
Time: 2min
Total: 2min

# Part 2 - Creating and opening a file
Explain that "index.html" is a magic name that servers will automatically look for if a user enters a domain without a file extension: test.com === test.com/index.html. Modern routing systems mess with this a bit, but `index.html` is still almost universally the entrypoint for applications.

You can open the file either by clicking on it or using `open index.html` from the console. That will open it as a file (browser says file://). That's fine for small projects, but some more advanced features need the file to be "hosted" by a server. You could build an express server (and we will eventually!), but you can also use standalone products that build a static server. like
- vscode's liveserver
- `npx http-server`
- `python3 http-serve`

A server that only hosts static (unchanging) assets like html and js files is called a "static server" and GitHub pages is a great one to use.

We'll use live server on VSCode because it does "hot reloading," which means every time we save our document, the server will reload our browser window for us.

---------
Time: 5min
Total: 7min

# Part 3 - Anatomy of a tag: h and p
The base "unit" in html is called the "tag." A tag usually has an opening and a closing tag

```html
<!-- Opening Closing Tags -->
<h1>Hello world</h1>

<p>
  also fine
</p>
```

Notice that the closing tag `</ >` has the slash. HTML will collapse white space so you can also format them indented.

heading tags are for main headings and there are 6, they should always flow in order, ignore the default styling, you can change that. There should only ever be one `h1` per page

```html
<h1>Hello</h1>
<p>Subtitle</p>
<h4>Uh oh</h1> <!-- no -->
```

```html
<h1>Hello</h1>
<p>Subtitle</p>
<h2>Uh oh</h2> <!-- yes! -->
```

paragraph tags are for most standard text. Text should always appear in a tag.

By the way, `<!-- -->` is how you comment in html.

---------
Time: 5min
Time: 13min

# Part 4: nesting tags
Text is not the only thing that can go in a tag, in fact *most* tags nest other tags. A good example of this is the `ordered list` and `unordered list` tags and their `list items`:

```html
<h2>Make dinner</h2>
<ol>
  <li>Get freezer meal</li>
  <li>Put in microwave</li>
  <li>Eat</li>
</ol>

<h2>Pets</h2>
<ul>
  <li>Dogs</li>
  <li>Cats</li>
  <li>Fish</li>
</ul>
```

Use `<ol>` when order matters, and `ul` when it doesn't.

You can keep nesting, technically unlimited nests! Though, only nest when the items should be grouped together. Whenever you nest, indent one level for readability.

```html
<ul>
  <li>
    <p>Look at me nesting!</p>
    <p>When will it end? No one knows!</p>
  </li>
</ul>
```

**child** tags are those that are nested in a **parent** tag. Tags that are in the same nesting level next to each other are **siblings**.

`li` are children of a `ul`
`li` are siblings to each other

---------
Time: 5min
Total: 18min

# Part 5 - Self closing tags
On the flip side, some elements have no children because they have no closing tag! These are called "self closing" tags:

```html
<!-- Self closing tag -->
<hr /> <!-- Not strictly necessary yet, but /> is recommended -->
<hr>

<br />
```

Those are probably the simplest tags of all: `horizontal rule` and `break`. Usually `br` is just a stop gap for testing, rapid iteration, and in reality breaks on the page should be controlled by css. But `hr` tags can be styled to look like nice dividers

---------
Time: 2min
Total: 20min

# Part 6 - tag attributes
Sometimes you need more information for a tag or the tag itself needs more information to work. Like images: they use attributes to load the images and tell us what we're looking at:

```html
<img src="https://http.cat/images/415.jpg" alt="cat eating a record" />
```

`src` is the actual media source, and `alt` tells bots and screen readers what the picture is. It's also what can show up if the link is broken.

`src` can be a hyperlink or a local link:

```html
<img src="https://http.cat/images/415.jpg" alt="cat eating a record" />

<img src="./images/lecture-prep/images/cat-pizza.png" alt="cat eating a pizza" />
```

If the content is central to your site, you *must* include an `alt` attribute, if the picture is just a decoration (like a background image) you do not need an `alt` attribute. In your `alt` do not say "picture of" or anything, just describe the image.

A cooler version of an image with a caption is `figure`, look it up!

```html
<figure>
  <img src="./images/lecture-prep/images/cat-pizza.png" alt="cat eating a pizza" >
  <figcaption>Here we see a cat eating a pizza it does not deserve.</figcaption>
</figure>
```

---------
Time: 5min
Total: 25min

# Part 7 - ids and classes
Perhaps the most used attributes of all are ids and classes.
`id`s mark a tag as a *single*, unique, important item on your page. `class`es are for denoting a bunch of related tags, and can appear more than once per page. They are most commonly used for grabbing styles as you'll see tomorrow.

```html
<h1 id="main-heading">Hello world!</h1>
<p class="blue-text">lorem ipsum</p>
<p>lorem ipsum</p>
<p class="blue-text">lorem ipsum</p>
<p>lorem ipsum</p>
```

`id` and `class` names are case sensitive, cannot start with numbers, and can't have spaces. Stylistically, in pure html, you'll see kebab-case names. You can have multiple classes by separating with spaces, but only one id. You can include both an id and class on a single tag.

```html
<p id="important-text" class="blue funky-font">lorem ipsum</p>
```

Both `id`s and `class`es are used to call out elements on pages so that they can be accessed, either by JS or CSS. They are a way to differentiate tags on your page from other identical tags.

`id` = one name per page, one per tag
`class` = multiple per page, multiple space separated names per tag

---------
Time: 5min
Total: 30min

# Part 8 - links
Pages often link to others with `hyperlink anchor` tags. These combine everything we've learned so far. They need attributes to send us along, and text to tell us where to go

```html
<a href="https://google.com">Go to Google</a>
```

Links can be outside sites, local or absolute, or even within the page (they link to ids)

```html
<a href="https://google.com">Go to Google</a>
<a href="./">Go Home</a>
<a href="./about">Our About Page</a>
<a href="#more-information">See more information</a>
```
Be careful with relative links "/" is the root of the *server* which may not be where you mean. Local links `./, ../` will direct you from your current directory.

Links can also be nested, but will still flow seamlessly in the final document.


```html
<p> If you're looking for things <a href="https://google.com">Go to Google</a>, and you'll see ads</p>
```

Link text should *always* be descriptive of where you're going, never just put "click here."

---------
Time: 10min
Total: 40min

# Part 9 - Properly formatted document
The way that HTML works is it's a "document" filled with "tags". Let's start simple with some boilerplate to set up our document

```html
<!DOCTYPE html>
<html lang="en">
</html>
```

These two tags make sure our browser knows what we're dealing with. Just copy them in without worrying. There are other doctypes and languages, but this is what we'll use

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
```

The `head` tag is where we put meta information, scripts, links, and titles. the `title` tag is the only one visible to our users as what appears in the browser tag. `meta` does other things like tell the mobile browser how big to start the page and what character set we're using.

The `body` tag is where we put all the stuff we just wrote before! This is where we can put things for our users to see. From here on out, always include the boilerplate here

vscode users: start with an empty document, type `html` and then from the popup select `html:5`

---------
Time: 5min
Total: 45min

# Part 10 - Semantic vs Non Semantic
So far, all the tags we've made were "semantic" that is to say that their name told us about their function: `h` tags are headings, `a` are links, `p` are paragraphs. However, there's another kind of tag that conveys no meaning: non-semantic. Pretty much the only ones you'll see are `div` and `span`. These are just for grouping other related tags together (div) or calling out a particular section of text (span).

```html
<div id="main-user-info">
  <p><span class="name-text">Name:</span> Zo</p>
  <p>Age: 24</p>
  <p>Hobbies:
  <ul>
    <li>Basketball</li>
    <li>Coding</li>
  </ul>
</div>
```

Non-semantic tags should only be used for grouping or grabbing parts of text. Do not ever copy semantic elements

```html
<div>
  <div>Hobbies</div>
  <div class="hobby">Basketball</div>
  <div class="hobby">coding</div>
</div>
<!-- NO AWFUL. NEVER. Instead use p and ul -->
```

`div` and `span` are pretty much the only non-semantic tags you'll use, but there are SO MANY more semantic tags to see! We haven't even touched forms and buttons for interactivity yet. Your HW will go over more semantic elements like `main` and `nav`, so make sure to do it!

---------
Time: 5min
Total: 50min









