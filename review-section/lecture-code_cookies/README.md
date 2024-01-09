# Lecture Cookies

Today we learned about cookies! It's true you can do them on your own, but we're just using `cookie-parser` to make it easier.

```bash
npm install cookie-parser
```

(it's already installed in this repo)

# signed vs unsigned cookies
The difference is that signed cookies are encrypted and unsigned cookies are not. Signed cookies are more secure, but unsigned cookies are easier to read. So for now, we didn't bother with them, but other libraries will do this by default. If you *wanted* to sign a cookie it looks like this:

```js
// You need to use a secret to sign cookies (this would be in your .env)
// app.use(cookieParser('secret'))
app.use(cookieParser(process.env.COOKIE_SECRET))


// And then here's how you would use it
app.get('/count', function (req, res) {
  console.log(req.signedCookies);

  let count = (Number(req.signedCookies.count) + 1) || 1;
  count++;

  res.cookie('count', count, { signed: true }) // still need to sign
  res.send({ count });
})
```

Check out what the cookie looks like in your browser. It's encrypted! We didn't bother with it here as we focused on the basics, but just wanted you to know!

(You can see cookies in the Application tab in Chrome Dev Tools)