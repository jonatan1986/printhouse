sudo npm --build-from-source install bcrypt@3.0.6


hello guys.
this is my 1st project in web development.
after learning from the book node.js in action, I decided to implement my own
project. the entire project i worked with google. it was my only assistant.

this project's aim is to simulate a webpage for a print house whose name ,
is "PrintHouse". this website allows users who want to design postcards,
to do it online and order it. users could register with name and pass,
and design postcards with given templates/ selected file and select font.
the users could also track their orders and the status of their order("in process"/"ready").
there is also an admin access which could check all the orders, and update
their status.

DB for the project:
1) Users are saved into redis.
2) Photos are saved into mongodb(mongoose).

The entire project (both frontend and backend) was written with node.js framework. version v8.10.0.

installation:
1) npm install
2) sudo npm --build-from-source install bcrypt@3.0.6

run:
1) node app.js
2) run mongod --dbpath= $path/to/current/directory (make sure you have mongodb installed)
2) on browser type : localhost:3000/homepage and from there navigate.

attached video of website which demonstrates it.
