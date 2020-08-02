# DAS-Coding-Assessment

Matthew Logan's submission fro Digital Airstrike's Coding Assessment. This code utilizes Node.js and Express for creating the API and ReactJS for the client interface.

\
\
---- INSTRUCTIONS TO RUN CODE ----\

- To run both the client and server together: run "npm start dev" within the "DAS-Coding-Assessment/client" folder\
- To run the ReactJS client: run "npm start client" within the "DAS-Coding-Assessment/client" folder (runs on port 3000 by default)\
- To run the Node.js server: run "npm start server" within the "DAS-Coding-Assessment/client" folder (runs on port 8000 by defualt)\

\
\
---- ASSIGNMENT INSTRUCTIONS ----\

Digital Airstrike Coding Assessment

At a minimum we’d like to see a web page that interacts with an API to deliver the functionality described
below using a modern framework appropriate to your stack. Feel free to go beyond those requirements and
really show off your talent but we don’t expect you to spend a lot of time on it.
You can submit your source code by granting us access to a public or private git repository. Free, private
repositories are available on GitHub or BitBucket
We’d also like to be able to run your solution. Please include a note on how to run it. Feel free to deploy it (or
not) and include a link to the running site.
Some recommended technologies:
NET - C#/.NET Core, Java, ReactJs,
Angular2, Node.js
The Challenge

Create a web page that will display the optimal coin combination (fewest number of coins) that fulfills a given
dollar value. The web page should take a dollar value as input and interact with an API that computes and
returns the optimal coin combination. The results of the API call should be displayed on the web page.
Assume the following coins: - Silver Dollar ($1.00) - Half Dollar (0.50) - Quarter (0.25) - Dime (0.10) -
Nickel (0.05) - Penny (0.01) 
Input: ​A dollar value (e.g. $1.56 or \$12.85).
Output: ​A format of your choosing that indicates which coins and how many of each are required. An ideal
output for the API is an object in JSON representation of the coins and a count for each coin.
For example, your solution should return something like the following for the indicated values:

\$0.99​ =&gt; {
&quot;silver-dollar&quot;: 0,
&quot;half-dollar&quot;: 1,
&quot;quarter&quot;: 1,
&quot;dime&quot;: 2,
&quot;nickel&quot;: 0,
&quot;penny&quot;: 4 }

\$1.56​ =&gt; {
&quot;silver-dollar&quot;: 1,
&quot;half-dollar&quot;: 1,
&quot;quarter&quot;: 0,
&quot;dime&quot;: 0,
&quot;nickel&quot;: 1,
&quot;penny&quot;: 1 }

\$12.85​ =&gt; {
&quot;silver-dollar&quot;: 12,
&quot;half-dollar&quot;: 1,
&quot;quarter&quot;: 1,
&quot;dime&quot;: 1,
&quot;nickel&quot;: 0,
&quot;penny&quot;: 0 }

At a minimum the above examples should work.
Submissions will be judged on readability, code style, creativity and pragmatism. Bonus points for including
unit tests, demonstrating client-side skills, and/or making a robust solution.
