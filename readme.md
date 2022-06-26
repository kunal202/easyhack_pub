<h2>What this basic app does right?</h2>
<h4>In Single Sentence it publishes all incoming request body </h4>
<h5>It is a basic node app which runs on port 4000 and publishes all incoming data on the endpoint /user [POST].<br><br> For more watch this short GIF or clone and run this by yourself cause i suck at writing :)</h5>

Steps to Run :-

- Make sure your redis is running on same port as your [subscriber's](https://github.com/kunal202/easyhack_sub)
  redis is running on.
- Run `npm i` and then `node index`
- Make sure your [subscriber](https://github.com/kunal202/easyhack_sub)
 is running.
- Hit a POST request on http://localhost:4000/user
- Now you will see a database with name Logger in your MongoDB Compass and it will have the collection of your request body.

Tech stack:-

- Node
- Redis

P.S.- It has only bare minima functionality which only includes publishing message so that it could act as a logging System

Refer to it's subscriber:-
[subscriber](https://github.com/kunal202/easyhack_sub)
