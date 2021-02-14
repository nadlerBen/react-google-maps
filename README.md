# React Google Maps
## Table of contents
* [General info](#general-info)
* [Setup](#setup)

## General Info

In this React Google Maps assignment I was tasked with locating a user's location on google maps based on his IP. <br>
With the IPData api I was able to send a request based on the user's IP and gain a string containing data about the user location. <br>
With that data string which I parsed to a JSON object I was able to get the desired data I need, which is: city, country, latitude and longitude. <br>
I used the latitude and longitude for the google maps api which shows the user's location, I used the city and country to display to the user the found location.<br>

For this assignment I have used React.js with hooks.
I have deployed the live demo to vercel at:

## Setup
To run this project, clone this repo and install it locally using npm:

```
$ cd ../react-google-maps
$ npm install
$ npm start
```