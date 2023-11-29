# How to Initialize an express project (beginner)
- create files 
  - index.js 
- Install express && nodemon
  - `npm i express`
  - `npm i nodemon`
- import express && start a new express server
  - `const express = require('express');`
  - `const app = express();`
  - `const PORT = 8080;`
  - Following code is used to listen to requests being made. 
      ```js
      app.listen(PORT, () => {
        console.log(`Listening on Port: ${PORT}`);
      })
      ```
- middleware: express.json()
  - This is used to parse incoming requests into json!
- make a default GET request to check if server is running:
  ```js
    app.get("/",(req,res) => {
      res.send("hello, this server is working");
      res.sendStatus(200);
    });
  ```

## CRUD Operations in memory 
- Initialize an array (This array will hold objects); 
- CREATE: 
  - POST Request 
  - Body needs to be included 
  - get info from the body 
  - add the info from the body to the array of objects 
- READ 
  - GET request
  - response should send back the current list of objects 
  - response should send back a status code of 200 
- UPDATE 
  - PATCH || PUT request 
  - get the id from the params
  - get the data that will be changed 
  - find the specific task among the array based on the id 
  - if there is no task found return an error 
  - else update the information and return the new task 
- DELETE 
  - DELETE request 
  - get the id from the params 
  - find the task to be deleted in the array 
  - if the task doesn't exist return an error 
  - else remove it from the array (splice)

## Other info: 
PUT Vs. PATCH: 
- Put is going to update the entire resource!
- Patch targets **specific** properties in the resource and keeps the other properties the **same**.  

