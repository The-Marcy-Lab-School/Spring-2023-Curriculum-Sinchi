# Lecture Prep 2.0.3 - The Importance of Accessibility (A11y)

This lecture is a little different! There's just `lecture` since you won't be editing code, just showing off the two different version.

# A11y Commands you'll need
voiceover on mac: command + f5
- `VO` is "ctrl + option" by default
- Rotor web navigation on mac: `VO`` + u

To get it to read the page:
- To fully read without prompting, just refresh the tab
- To read sections on your own, `VO` + right left

to enable Accessibility Inspector:
it's the bar under Elements , click accessibility and check "enable full page accessibility tree" and reload. Now, you should be able to access the A11y tree by clicking the little person icon when you go to your "elements" tab in the console.

To color blind with chrome:
- On the JS console tab, click "no issues", that opens up the second nav bar below.
- Then on the second bar that pops up, click the three dots
- Then go to rendering
- Scroll down to "emulate vision deficiencies

To alter the default system font:
- In chrome click the 3 dots, then go to settings then look for "font size"
- Adjust as necessary


# Part 0: Why A11y?
You know how Marcy is so great because it's all about opening doors that were shut to you for? Well that's why accessibility is so important. The internet should be for *everyone*, and it's pretty easy to hit that goal with just a little bit of work on our end.

Also, and I cannot stress enough that we should care about *humans* more than anything, but you may wind up at a cynical company that simply doesn't care about anything but the bottom line. Fine. They should know that inaccessible sites keep getting sued, so if they don't want to face a lawsuit over a few lines of code, they need to get their act together. Also, Google and bots are getting better, but not fast enough. If you really want SEO to work well with your site, give the bots as much information as possible.

And finally...a lot of this stuff is just good for *all* your users AND your fellow developers. Most A11y changes are just general design improvements. So you have no excuse not to learn it all now and lead the way!

# Part 1: Semantic elements
There are 2 pages, `bad.html` and `index.html`, point out in the browser that they don't exactly look that different. Probably the biggest difference is that `bad.html` is doing that trendy thing of light text and the links are green with not underlines. Both for purely aesthetic reasons. In terms of code, looks like there's more in `index.html` but overall not much.

# Part 2: A11y tree
Then open your console on `bad.html`, and pop open your A11y tree. Now the two pages look totally different, an absolute mess and sign of things to come. There is no hierarchy and no order, everything is just being spat out at you.

Compare that to `index.html` and it's night and day. The sections are all clear regions and everything is very orderly.

# Part 3: Voice over
Turn on voice over and listen at how things like the navigation are just links, the list and it's nested list are just read out as text, there is no concept they are linked. There's no way to skip to anything, you just have to move through the entire page.

Pop open the Rotor view with `VO` + u, and show how the links are abysmal, just a list of "here" with no information. There are no landmarks at all, so we can't jump to any region, and the headings convey absolutely no meaning, the numbers are all over the place. It's all a mess

Now go over to `index.html` and again, it's night and day. Now when we read over the site, we actually can see that our items are grouped in lists and sub lists, our image is described.

Pop open the rotor again and see all the links are descriptive, the headers denote a clear hierarchy and don't waste time on the logo, and the landmarks allow us to skip anywhere we need.

# Part 4: Visual Impairments
By following the directions above, open the render menu in chrome and select low contrast and then no color with `bad.html`. That cool light text effectively disappears and whoops, so do the links.

Again, show how on `index.html` the text is definitely still hard to read, but it is possible with low contrast, and then see how even in no color the links are still perfectly visible because of the underline.

Also mess around with the browsers default font size. Show how `bad.html` is unaffected, but `index.html` scales appropriately.

# Part 5: images
Real quick, just point out that the broken image on the main page makes the section read weird because we have no idea what the image is, and the loaded text references it. Then on `index.html` the image is still broken, but chrome displays the alt text so we still know what we're *supposed* to be looking at. Ditto for screen readers.

# Part 6: How to fix it
The honestly easiest thing is to just use elements correctly!
- Headings should always be used in order
- Semantic elements (nav, main, header, li) should always be used when possible
- Use descriptive link text instead of vague "click" or "here"
- Always include alt tags
- Only one h1 on a page
- Do not use your logo as an h1, that's the same on every page and therefor not helpful, just use a p tag with styling
- Use rems in your styling to respect the users default font size

# Part 7: ARIA and Landmarks
ARIA and it's attributes are an initiative to try and make the web more accessible. You can take a non semantic element (or alter a semantic one) with the `aria-role` attribute. But honestly? All that's ever really doing is standing in for proper elements, so try to just use those.

No, what we'll talk about today is `aria-label` and `aria-labelledby` because you actually *do* need that for `section` tags. See, the browser is now able to recognize regions or landmarks on the screen. These are things like navs and main and articles and whatnot.

Because `section` is still kind of vague, it needs a labe to fully be picked up as a region. You have 2 options, either `aria-label` which lets you simply title something inline. This is really only used if you have a section but you really *can't* include a visible heading (rare).

```html
<section aria-label="our products">
```

Or you can use `aria-labelledby` (note the weird kebab-non-camel-case, I don't know why, I don't make the rules). This is actually better because it lets you link an element's id and use that text content. This should be a heading tag.

```html
<section aria-label="products">
  <h2 id="products">Our Products</h2>
```

`aria-labelledby` is preferred because now your screen readers, bots, and users with no sight problems all see the same thing automatically, and you only ever need to update one.

# Part 8: Rem vs px
You may have seen "rem" as a unit. That's a slightly modified version of "em" and what both of them do is go based off the browsers base font size. That's by default 16px. Now, here's the problem. If *you* specify sizes in px yourself, that will override the default and ignore it.

If you don't do this, you will force your users to have to manually zoom or unzoom every page of yours that they visit. Annoying and unnecessary.


