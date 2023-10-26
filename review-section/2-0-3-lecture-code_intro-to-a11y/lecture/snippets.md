# Lecture Prep 2.0.0 - Intro To HTML

# Part 3 - Anatomy of a tag: h and p

```html
<!-- Opening Closing Tags -->
<h1>Hello world</h1>

<p>
  also fine
</p>
```

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


----------------------------------------------------------------

# Part 4: Nesting tags

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


```html
<ul>
  <li>
    <p>Look at me nesting!</p>
    <p>When will it end? No one knows!</p>
  </li>
</ul>
```

---------------------------------------------------------

# Part 5 - Self closing tags

```html
<!-- Self closing tag -->
<hr /> <!-- Not strictly necessary yet, but /> is recommended -->
<hr>

<br />
```

------------------------------------------------------------

# Part 6 - tag attributes

```html
<img src="https://http.cat/images/415.jpg" alt="cat eating a record" />
```

```html
<img src="https://http.cat/images/415.jpg" alt="cat eating a record" />

<img src="./images/lecture-prep/images/cat-pizza.png" alt="cat eating a pizza" />
```


```html
<figure>
  <img src="./images/lecture-prep/images/cat-pizza.png" alt="cat eating a pizza" >
  <figcaption>Here we see a cat eating a pizza it does not deserve.</figcaption>
</figure>
```

------------------------------------------------------------

# Part 7 - ids and classes

```html
<h1 id="main-heading">Hello world!</h1>
<p class="blue-text">lorem ipsum</p>
<p>lorem ipsum</p>
<p class="blue-text">lorem ipsum</p>
<p>lorem ipsum</p>
```

```html
<p id="important-text" class="blue funky-font">lorem ipsum</p>
```

------------------------------------------------------------


# Part 8 - links


```html
<a href="https://google.com">Go to Google</a>
```


```html
<a href="https://google.com">Go to Google</a>
<a href="/">Go Home (or will you?)</a>
<a href="./about">Our About Page</a>
<a href="#more-information">See more information</a>
```


```html
<p> If you're looking for things <a href="https://google.com">Go to Google</a>, and you'll see ads</p>
```

--------------------------------------------------------------------

# Part 9 - Properly formatted document

```html
<!DOCTYPE html>
<html lang="en">
</html>
```

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
```

```html
<body>
</body>
```

# Part 10 - Semantic vs Non Semantic

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

```html
<div>
  <div>Hobbies</div>
  <div class="hobby">Basketball</div>
  <div class="hobby">coding</div>
</div>
<!-- NO AWFUL. NEVER. Instead use p and ul -->
```










