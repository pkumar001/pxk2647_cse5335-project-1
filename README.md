### Name: Purn Prem Kumar
#### ID: 1001112647

- What server framework did you choose and why?

>I used Node JS express framework for the server in this project. Node JS has a comprehensive communication paradigm with HTTP and for a JavaScript programmer, creating RESTful API in Node JS is pretty sensible and easy to learn as well. Express is the most common Node JS web application framework and is preferred because it adds intuitive view system management process, robust routing tool processing, high executable code for generating applications and various other such Express coding benefits. Considering express is the most popular framework, getting sample codes and understanding the code structure is easier.

- What client framework did you choose and why?

> I used JavaScript Jquery for the client side in this project. JQuery is intuitive and easy to learn, considering the library is built on shorter, simpler
code. Using JQuery overcomes the problem of incorrectly rendered parts of the webpage in case Adobe Flash isn't installed. Manipulating the HTML DOM has
become the most widely accepted practice of manipulating a Web page so content will be rendered even if JavaScript is disabled in the browser. I opted for
JQuery because it is light, works anywhere and the AJAX call using JQuery doesn't face Cross-Origin Resource Sharing (CORS) issues.


- What aspect of the implementation did you find easy, if any, and why?

> I found most of the aspects of the implementation fairly easy to understand. JavaScript has a simple concept and it is interesting the way it can be used
to manipulate HTML DOM to create different kinds of webpages. Considering only 'get' part of RESTful API was implementated, the server side was not very 
difficult to code using Node JS.


- What aspect of the implementation did you find hard, if any, and why?

> I found the implementation of JSON request to the server comparatively difficult. I faced the problem of Cross-Origin Resource Sharing (CORS) during many 
attempts of requesting JSON data from the server. Finding the JQuery method which should be able to share cross-domain resources took longer than I expected.


- What components OTHER than your client and server framework did you install, if any, and if so, what is their purpose for your solution?

> I have used Google Web Toolkit (GWT) other than the client and server framework in order to display the location of latitude-longitude values in JSON data 
representing the capitals of the countries with nuclear power, as well as represent the power generated and contribution to domestic need in the form of a
bar chart.


- What Ubuntu commands are required to deploy and run your server?

> Make sure you have Node.js and the Heroku Toolbelt installed. Open the Command Prompt Interface.

> Log in using the email address and password you used when creating your Heroku account:
```sh
$ heroku login
```
> Execute the following commands to clone the application:
```sh
$ git clone https://github.com/premkumar010890/cse5335-project1.git
$ cd cse5335-project1
```
> Create an app on Heroku, which prepares Heroku to receive the source code:
```sh
$ heroku create
```
> Now deploy the code:
```sh
$ git push heroku master
```
> The application is now deployed. Ensure that at least one instance of the app is running:
```sh
$ heroku ps:scale web=1
```
> Visit the app at the URL generated, open the website as follows:
```sh
$ heroku open
```