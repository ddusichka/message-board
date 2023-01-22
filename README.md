## C4C Message Board

This is a message board designed for people to talk to each other online! Users can type and post messages between 1 and 128 characters long and see all posted messages from most to least recent. They can also chat with people on different computers.

## Components

This app uses React components and stores messages and user info in Firebase. The main page consists of a MessageBoard component, which holds each message plus the "Send Message" field, along with a navigation bar and login page. The MessageBoard renders each message (stored in Firebase) and the SendMessage component waits for user input so it can post new messages. The NavBar is rendered at the top and dynamically includes a SignOut button if the user is signed in. A user can sign in with any of the 3 methods and be able to post messages, using either an anonymous animal name, their Google display name, a custom display name if they enter one with their email and password, or just their email if the display name is left blank. All authentication is done using Firebase. Once users write a message and click send, the message is filtered for any inappropriate language and sent to Firebase and added to the board.

## Requirements

This app meets the requirements because users can post anonymous messages up to 128 characters. All posted messages are sorted from most to least recent, and users on different computers can post to the same board. The app also supports logging in with Google, or with an email and password. Users can also remain anonymous if they wish. Finally, bad words are prevented as a bonus feature.

## To use:
Visit https://c4c-message-board.netlify.app/

OR to run locally: 
clone this repo using **git clone https://github.com/ddusichka/message-board.git**

open a terminal, run **npm install** and then **npm start**
